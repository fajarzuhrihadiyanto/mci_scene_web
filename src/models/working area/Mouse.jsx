const Mouse = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                name="mouse_body001"
                geometry={nodes.mouse_body001.geometry}
                material={materials.mouse_body}
            />
            <mesh
                name="mouse_scroll_button001"
                geometry={nodes.mouse_scroll_button001.geometry}
                material={materials['mouse_scroll button']}
                position={[-.023, -0.003, 0]}
            />
        </group>
    )
}

export default Mouse