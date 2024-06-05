const Keyboard = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                name="keyboard_buttons001"
                geometry={nodes.keyboard_buttons001.geometry}
                material={materials.keyboard_buttons}
            />
            <mesh
                name="keyboard_base001"
                geometry={nodes.keyboard_base001.geometry}
                material={materials.keyboard_base}
                position={[-.17, -.005, -.06]}
            />
        </group>
    )
}

export default Keyboard