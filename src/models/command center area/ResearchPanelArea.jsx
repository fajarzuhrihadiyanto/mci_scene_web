import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import { FOCUS_RESEARCH } from "../../constants"
import Tooltip from "../../components/Tootlip"
import ResearchPage from "../../html/ResearchPage"

const ResearchPanelArea = ({ nodes, materials }) => {
    // get the state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback((e) => {
        e.stopPropagation()
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback((e) => {
        e.stopPropagation()
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_RESEARCH)
            setCameraPosition([-2.036, 2.656, 2.509])
            setControlsTargetOffset([0, 0.005, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group
                    name="command_center_screen_5001"
                    position={[-2.036, 3.156, 3.509]}
                    rotation={[Math.PI / 3, 0, Math.PI]}
                    scale={[1.5, 1, 1.5]}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onClick={onClick}>
                    <mesh
                        name="Plane001"
                        geometry={nodes.Plane001.geometry}
                        material={materials['command center_frame']}
                    />
                    <mesh
                        name="Plane001_1"
                        geometry={nodes.Plane001_1.geometry}
                        material={materials['command center_side']}
                    />
                    <mesh
                        name="Plane001_2"
                        geometry={nodes.Plane001_2.geometry}
                        material={materials['command center_white screen']}
                    />
                    {focusTarget === FOCUS_RESEARCH && <ResearchPage />}
                </group>
            </Select>
            <Tooltip position={[-3.25, 3.156, 3.509]} rotation={[0,Math.PI,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Penelitian</p>
            </Tooltip>
        </>
    )
}

export default ResearchPanelArea