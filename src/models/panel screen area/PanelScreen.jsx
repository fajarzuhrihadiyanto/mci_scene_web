const PanelScreen = ({ nodes, materials, children, ...props }) => {
    return (
        <group
            name="command_center_screen_4002"
            {...props}
            >
            <mesh
                name="Plane028"
                geometry={nodes.Plane028.geometry}
                material={materials['command center_frame']}
            />
            <mesh
                name="Plane028_1"
                geometry={nodes.Plane028_1.geometry}
                material={materials['command center_side']}
            />
            <mesh
                name="Plane028_2"
                geometry={nodes.Plane028_2.geometry}
                material={materials.screen}
            />
            {children}
        </group>
    )
}

export default PanelScreen