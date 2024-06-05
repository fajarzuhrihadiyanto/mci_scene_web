const Monitor = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <mesh
                name="monitor_base001"
                geometry={nodes.monitor_base001.geometry}
                material={materials.monitor_base}
            />
            <mesh
                name="monitor_pole001"
                geometry={nodes.monitor_pole001.geometry}
                material={materials.monitor_base}
                position={[-.034, 0.08, 0]}
            />
            <group name="monitor_screen001" position={[0, 0.212, 0]}>
                <mesh
                    name="Plane022"
                    geometry={nodes.Plane022.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    name="Plane022_1"
                    geometry={nodes.Plane022_1.geometry}
                    material={materials.monitor_light}
                />
            </group>
            {children}
        </group>
    )
}

export default Monitor