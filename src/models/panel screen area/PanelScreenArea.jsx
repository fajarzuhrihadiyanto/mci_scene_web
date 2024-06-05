import LecturersArea from "./LecturersArea"
import PanelScreen from "./PanelScreen"

const PanelScreenArea = ({ nodes, materials }) => {
    return (
        <>
            <LecturersArea nodes={nodes} materials={materials}/>
            <PanelScreen nodes={nodes} materials={materials} position={[0.126 + 1.65, 1.731, -3.9]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1, 1.5]}/>
        </>
    )
}

export default PanelScreenArea