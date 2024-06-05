const LabChair = ({ nodes, materials, ...props}) => {
    return (
        <group  {...props}>
            <mesh
                name="lab_chair_structure001"
                geometry={nodes.lab_chair_structure001.geometry}
                material={materials['lab chair_structure']}
            />
            <mesh
                name="lab_chair_seat_pillow001"
                geometry={nodes.lab_chair_seat_pillow001.geometry}
                material={materials['lab chair_pillow']}
                position={[.203, 0.403, 0]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                name="lab_chair_seat_base001"
                geometry={nodes.lab_chair_seat_base001.geometry}
                material={materials['lab chair_base']}
                position={[.204, 0.399, 0]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                name="lab_chair_backrest_pillow001"
                geometry={nodes.lab_chair_backrest_pillow001.geometry}
                material={materials['lab chair_pillow']}
                position={[-.007, 0.65, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                name="lab_chair_backrest_base001"
                geometry={nodes.lab_chair_backrest_base001.geometry}
                material={materials['lab chair_base']}
                position={[-.009, 0.65, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
            />
        </group>
    )
}

export default LabChair