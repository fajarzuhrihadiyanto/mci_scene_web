import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import useMainStore from "../../store/useMainStore"
import { FOCUS_COMMUNITY_SERVICE } from "../../constants"
import Tooltip from "../../components/Tootlip"
import CommunityServicePage from "../../html/CommunityServicePage"

const CommunityServicePanelArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_COMMUNITY_SERVICE)
            setCameraPosition([-0.536, 1.731, 2.91])
            setControlsTargetOffset([0, 0, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group
                    name="command_center_screen_4"
                    position={[-0.536, 1.731, 3.91]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.5, 1, 1.5]}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onClick={onClick}>
                    <mesh
                        name="Plane007"
                        geometry={nodes.Plane007.geometry}
                        material={materials['command center_frame']}
                    />
                    <mesh
                        name="Plane007_1"
                        geometry={nodes.Plane007_1.geometry}
                        material={materials['command center_side']}
                    />
                    <mesh
                        name="Plane007_2"
                        geometry={nodes.Plane007_2.geometry}
                        material={materials['command center_white screen']}
                    />
                    {focusTarget === FOCUS_COMMUNITY_SERVICE && <CommunityServicePage />}
                </group>
            </Select>
            <Tooltip position={[1, 1.731, 3.509]} rotation={[0,Math.PI,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Pengabdian Masyarakat</p>
            </Tooltip>
        </>
    )
}

export default CommunityServicePanelArea