import { Html } from "@react-three/drei"

import styles from './styles/FacilitiesPage.module.css'

const FacilitiesPage = () => {
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <ul className={styles.list}>
                <li>PC Client (Intel Core i7 Gen 12, Ram 32GB, SSD 1TB, Monitor 24″ Curved).</li>
                <li>Android TV 65″.</li>
                <li>Laptop High End</li>
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage