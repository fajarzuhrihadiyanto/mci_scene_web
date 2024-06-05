const Room = ({ nodes, materials }) => {
    return (
        <group name="room" scale={[4, 5.359, 4]}>
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials.room}
          />
          <mesh
            name="Plane_1"
            geometry={nodes.Plane_1.geometry}
            material={materials.room_light}
          />
          <mesh
            name="Plane_2"
            geometry={nodes.Plane_2.geometry}
            material={materials.room_floor}
          />
        </group>
    )
}

export default Room