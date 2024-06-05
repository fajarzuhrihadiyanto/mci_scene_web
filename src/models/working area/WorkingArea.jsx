import Desk from "./Desk"
import Drawer from "./Drawer"
import Keyboard from "./Keyboard"
import LabChair from "./LabChair"
import Monitor from "./Monitor"
import Mouse from "./Mouse"
import Organizer from "./Organizer"
import Pc from "./Pc"

const WorkingArea = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <Drawer nodes={nodes} materials={materials} position={[.72, -.32, 0]}  />
            <Desk nodes={nodes} materials={materials}/>
            <Organizer nodes={nodes} materials={materials} position={[.741, 0.21, .015]} />
            <Pc nodes={nodes} materials={materials} position={[-.005, 0.204, -.147]} rotation={[0, -Math.PI, 0]} />
            <Keyboard nodes={nodes} materials={materials} position={[-.382, 0.03, .189]}/>
            <Monitor nodes={nodes} materials={materials} position={[-.531, 0.009, -.172]} rotation={[0, -Math.PI / 2, 0]}>
                {children}
            </Monitor>
            <Mouse nodes={nodes} materials={materials} position={[-.175, 0.025, .107]} rotation={[0, -Math.PI / 2, 0]}/>
            <LabChair nodes={nodes} materials={materials} position={[-.553, -.62, .673]} rotation={[Math.PI, Math.PI / 2, Math.PI]} />
        </group>
    )
}

export default WorkingArea