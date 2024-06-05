const Logo = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                name="logo_image"
                geometry={nodes.logo_image.geometry}
                material={materials.logo_image}
                position={[-3.985, 2.655, 0.904]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.25, 0.025, 0.25]}
            />
            <mesh
                name="logo_text"
                geometry={nodes.logo_text.geometry}
                material={materials.logo_text}
                position={[-3.985, 2.728, 0.505]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.294}
            />
        </>
    )
}

export default Logo