const Robot = ({ nodes, materials }) => {
    return (
        <group
            name="robot_male"
            position={[-1.709, 0.3, -3.304]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <skinnedMesh
                name="Alpha_Joints"
                geometry={nodes.Alpha_Joints.geometry}
                material={materials.Alpha_Joints_MAT}
                skeleton={nodes.Alpha_Joints.skeleton}
            />
            <skinnedMesh
                name="Alpha_Surface"
                geometry={nodes.Alpha_Surface.geometry}
                material={materials.Alpha_Body_MAT}
                skeleton={nodes.Alpha_Surface.skeleton}
            />
            <primitive object={nodes.mixamorigHips} />
        </group>
    )
}

export default Robot