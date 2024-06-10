import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import { FOCUS_SUBJECT } from "../../constants"
import Tooltip from "../../components/Tootlip"
import SubjectPage from "../../html/SubjectPage"
import { useResponsiveScreen } from "../../utils"

const SubjectPanelArea = ({ nodes, materials }) => {
    // get the state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const { isMobile } = useResponsiveScreen()

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
            const cameraPosition = isMobile ? [-0.536, 2.356, 1.909] : [-0.536, 2.656, 2.509]
            setIsHovered(false)
            setFocusTarget(FOCUS_SUBJECT)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([0, 0.005, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group
                    name="command_center_screen_4001"
                    position={[-0.536, 3.156, 3.509]}
                    rotation={[Math.PI / 3, 0, Math.PI]}
                    scale={[1.5, 1, 1.5]}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onClick={onClick}>
                    <mesh
                        name="Plane002"
                        geometry={nodes.Plane002.geometry}
                        material={materials['command center_frame']}
                    />
                    <mesh
                        name="Plane002_1"
                        geometry={nodes.Plane002_1.geometry}
                        material={materials['command center_side']}
                    />
                    <mesh
                        name="Plane002_2"
                        geometry={nodes.Plane002_2.geometry}
                        material={materials['command center_white screen']}
                    />
                    {focusTarget === FOCUS_SUBJECT && <SubjectPage />}
                </group>
            </Select>
            <Tooltip position={[.75, 3.156, 3.509]} rotation={[0,Math.PI,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Mata Kuliah</p>
            </Tooltip>
        </>
    )
}

export default SubjectPanelArea