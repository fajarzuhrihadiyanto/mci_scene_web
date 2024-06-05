const Chamber = ({ nodes, materials }) => {
    return (
        <group name="chamber" position={[-1.709, 0.1, -3.304]}>
            <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.chamber}
            />
            <mesh
                name="Cylinder_1"
                geometry={nodes.Cylinder_1.geometry}
                material={materials.chamber_glass}
            />
            <mesh
                name="Cylinder_2"
                geometry={nodes.Cylinder_2.geometry}
                material={materials.chamber_pipe}
            />
            <mesh
                name="Cylinder_3"
                geometry={nodes.Cylinder_3.geometry}
                material={materials.chamber_accent}
            />
        </group>
    )
}

export default Chamber