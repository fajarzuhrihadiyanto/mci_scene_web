import BookPanelArea from "./BookPanelArea"
import CommunityServicePanelArea from "./CommunityServicePanelArea"
import ResearchPanelArea from "./ResearchPanelArea"
import SubjectPanelArea from "./SubjectPanelArea"

const CommandCenterArea = ({ nodes, materials }) => {
    return (
        <>
            <BookPanelArea nodes={nodes} materials={materials} />
            <CommunityServicePanelArea nodes={nodes} materials={materials} />
            <ResearchPanelArea nodes={nodes} materials={materials} />
            <SubjectPanelArea nodes={nodes} materials={materials} />
            <group
                name="command_center_control_1"
                position={[-0.304, 0.743, 3.421]}
                rotation={[2.618, 0, Math.PI]}>
                <mesh
                    name="Plane011"
                    geometry={nodes.Plane011.geometry}
                    material={materials['command center_frame']}
                />
                <mesh
                    name="Plane011_1"
                    geometry={nodes.Plane011_1.geometry}
                    material={materials['command center_side']}
                />
                <mesh
                    name="Plane011_2"
                    geometry={nodes.Plane011_2.geometry}
                    material={materials['command center_screen']}
                />
            </group>
            <group
                name="command_center_control_2"
                position={[-1.292, 0.743, 3.421]}
                rotation={[2.618, 0, Math.PI]}>
                <mesh
                    name="Plane012"
                    geometry={nodes.Plane012.geometry}
                    material={materials['command center_frame']}
                />
                <mesh
                    name="Plane012_1"
                    geometry={nodes.Plane012_1.geometry}
                    material={materials['command center_side']}
                />
                <mesh
                    name="Plane012_2"
                    geometry={nodes.Plane012_2.geometry}
                    material={materials['command center_screen']}
                />
            </group>
            <group
                name="command_center_control_3"
                position={[-2.279, 0.743, 3.421]}
                rotation={[2.618, 0, Math.PI]}>
                <mesh
                    name="Plane013"
                    geometry={nodes.Plane013.geometry}
                    material={materials['command center_frame']}
                />
                <mesh
                    name="Plane013_1"
                    geometry={nodes.Plane013_1.geometry}
                    material={materials['command center_side']}
                />
                <mesh
                    name="Plane013_2"
                    geometry={nodes.Plane013_2.geometry}
                    material={materials['command center_screen']}
                />
            </group>
            <mesh
            name="command_center_base"
            geometry={nodes.command_center_base.geometry}
            material={materials['command center_base']}
            position={[-1.289, 0.45, 3.359]}
            rotation={[Math.PI, 0, Math.PI]}
            />
        </>
    )
}

export default CommandCenterArea