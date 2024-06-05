import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import { FOCUS_BOOKS } from "../../constants"
import Tooltip from "../../components/Tootlip"
import BookPage from "../../html/BookPage"

const BookPanelArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_BOOKS)
            setCameraPosition([-2.036, 1.731, 2.91])
            setControlsTargetOffset([0, 0, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group
                    name="command_center_screen_5"
                    position={[-2.036, 1.731, 3.91]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[1.5, 1, 1.5]}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    onClick={onClick}>
                    <mesh
                        name="Plane005"
                        geometry={nodes.Plane005.geometry}
                        material={materials['command center_frame']}
                    />
                    <mesh
                        name="Plane005_1"
                        geometry={nodes.Plane005_1.geometry}
                        material={materials['command center_side']}
                    />
                    <mesh
                        name="Plane005_2"
                        geometry={nodes.Plane005_2.geometry}
                        material={materials['command center_white screen']}
                    />
                    {focusTarget === FOCUS_BOOKS && <BookPage />}
                </group>
            </Select>
            <Tooltip position={[-2.75,  1.731, 3.509]} rotation={[0,Math.PI,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Buku</p>
            </Tooltip>
        </>
    )
}

export default BookPanelArea