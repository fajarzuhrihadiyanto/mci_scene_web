import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import WorkingArea from "./WorkingArea"
import { FOCUS_GENERAL_INFORMATION } from "../../constants"
import Tooltip from "../../components/Tootlip"
import GeneralInformationPage from "../../html/GeneralInformationPage"

const GeneralInformationArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_GENERAL_INFORMATION)
            setCameraPosition([-3.25, 0.85, 0.949 - 2 + .5])
            setControlsTargetOffset([-0.01, 0, 0])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <WorkingArea nodes={nodes} materials={materials} position={[-3.585, 0.62, 0.949 - 2]} rotation={[0, Math.PI / 2, 0]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_GENERAL_INFORMATION && <GeneralInformationPage />}
                </WorkingArea>
            </Select>
            <Tooltip position={[-3.585, 1.5, 0.949 - 2]} rotation={[0,Math.PI/2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Informasi Umum</p>
            </Tooltip>

        </>
    )
}

export default GeneralInformationArea