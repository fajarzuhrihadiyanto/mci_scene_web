import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import WorkingArea from "./WorkingArea"
import { FOCUS_FACILITIES } from "../../constants"
import Tooltip from "../../components/Tootlip"
import FacilitiesPage from "../../html/FacilitiesPage"
import { useResponsiveScreen } from "../../utils"

const FacilitiesArea = ({ nodes, materials }) => {
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
            const cameraPosition = isMobile ? [-3, 0.85, 0.949 + .53] : [-3.25, 0.85, 0.949 + .5]
            setIsHovered(false)
            setFocusTarget(FOCUS_FACILITIES)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([-0.01, 0, 0])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <WorkingArea nodes={nodes} materials={materials} position={[-3.585, 0.62, 0.949]} rotation={[0, Math.PI / 2, 0]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_FACILITIES && <FacilitiesPage />}
                </WorkingArea>
            </Select>
            <Tooltip position={[-3.585, 1.5, 0.949]} rotation={[0,Math.PI/2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Fasilitas</p>
            </Tooltip>
        </>
    )
}

export default FacilitiesArea