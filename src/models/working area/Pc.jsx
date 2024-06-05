const Pc = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <group name="pc_body001" >
                <mesh
                    name="Cube015"
                    geometry={nodes.Cube015.geometry}
                    material={materials.pc_body_main}
                />
                <mesh
                    name="Cube015_1"
                    geometry={nodes.Cube015_1.geometry}
                    material={materials.pc_body_rear}
                />
            </group>
            <mesh
                name="pc_front001"
                geometry={nodes.pc_front001.geometry}
                material={materials.pc_front}
                position={[0, 0.002, -.15]}
            />
        </group>
    )
}

export default Pc