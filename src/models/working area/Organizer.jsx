const Organizer = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                name="organizer_container001"
                geometry={nodes.organizer_container001.geometry}
                material={materials.organizer_container}
            />
            <mesh
                name="organizer_content001"
                geometry={nodes.organizer_content001.geometry}
                material={materials.organizer_content}
                position={[0, 0.01, 0]}
            />
        </group>
    )
}

export default Organizer