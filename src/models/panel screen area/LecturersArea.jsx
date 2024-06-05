import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import PanelScreen from "./PanelScreen"
import { FOCUS_LECTURER } from "../../constants"
import Tooltip from "../../components/Tootlip"
import LecturerPage from "../../html/LecturerPage"

const LecturersArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_LECTURER)
            setCameraPosition([0.126, 1.731, -2.5])
            setControlsTargetOffset([0, 0, -.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>  
            <Select enabled={isHovered}>
                <PanelScreen nodes={nodes} materials={materials} position={[0.126, 1.731, -3.9]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1, 1.5]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_LECTURER && <LecturerPage />}
                </PanelScreen>
            </Select>
            <Tooltip position={[0.126, 2.75, -3.9]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Dosen</p>
            </Tooltip>
        </>
    )
}

export default LecturersArea