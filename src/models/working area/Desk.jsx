const Desk = ({ nodes, materials, ...props}) => {
    return (
        <mesh
            name="desk001"
            geometry={nodes.desk001.geometry}
            material={materials.desk}
            {...props}
        />
    )
}

export default Desk