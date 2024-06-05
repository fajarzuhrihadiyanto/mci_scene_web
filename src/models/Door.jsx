const Door = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                name="door_left_body"
                geometry={nodes.door_left_body.geometry}
                material={materials['Material.002']}
                position={[3.957, 0, 0.826]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group
                name="door_left_in_handle"
                position={[4.012, 1.138, -0.024]}
                rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    name="Cylinder004"
                    geometry={nodes.Cylinder004.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    name="Cylinder004_1"
                    geometry={nodes.Cylinder004_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    name="Cylinder004_2"
                    geometry={nodes.Cylinder004_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <mesh
                name="door_right_body"
                geometry={nodes.door_right_body.geometry}
                material={materials['Material.002']}
                position={[3.957, 0, -1.174]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group
                name="door_right_in_handle"
                position={[4.012, 1.138, -0.324]}
                rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    name="Cylinder005"
                    geometry={nodes.Cylinder005.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    name="Cylinder005_1"
                    geometry={nodes.Cylinder005_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    name="Cylinder005_2"
                    geometry={nodes.Cylinder005_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <mesh
                name="door_frame"
                geometry={nodes.door_frame.geometry}
                material={materials['Material.003']}
                position={[3.982, 2.325, -0.174]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.075, 0.1]}
            />
            <group
                name="door_left_out_handle"
                position={[3.952, 1.138, -0.024]}
                rotation={[0, -1.571, 0]}>
                <mesh
                    name="Cylinder006"
                    geometry={nodes.Cylinder006.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    name="Cylinder006_1"
                    geometry={nodes.Cylinder006_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    name="Cylinder006_2"
                    geometry={nodes.Cylinder006_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
            <group
                name="door_right_out_handle"
                position={[3.952, 1.138, -0.324]}
                rotation={[0, -1.571, 0]}>
                <mesh
                    name="Cylinder007"
                    geometry={nodes.Cylinder007.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    name="Cylinder007_1"
                    geometry={nodes.Cylinder007_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    name="Cylinder007_2"
                    geometry={nodes.Cylinder007_2.geometry}
                    material={materials['Material.001']}
                />
            </group>
        </>
    )
}

export default Door