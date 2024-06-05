const HelixDna = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                name="helix_base"
                geometry={nodes.helix_base.geometry}
                material={materials.helix_base}
            />
            <mesh
                name="helix_dna"
                geometry={nodes.helix_dna.geometry}
                material={materials.helix_dna}
                position={[0, 0.21, 0]}
            />
            <mesh
                name="helix_ceil"
                geometry={nodes.helix_ceil.geometry}
                material={materials.helix_base}
                position={[0, 2.02, 0]}
            />
            <mesh
                name="helix_glass"
                geometry={nodes.helix_glass.geometry}
                material={materials.helix_glass}
                position={[0, 1.01, 0]}
                scale={[1, 19, 1]}
            />
        </group>
    )
}

export default HelixDna