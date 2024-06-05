const Drawer = ({ nodes, materials, ...props}) => {
    return (
        <group name="desk_drawer001" {...props}>
            <mesh
                name="Cube011"
                geometry={nodes.Cube011.geometry}
                material={materials.desk_drawer_body}
            />
            <mesh
                name="Cube011_1"
                geometry={nodes.Cube011_1.geometry}
                material={materials.deak_drawer_handle}
            />
        </group>
    )
}

export default Drawer