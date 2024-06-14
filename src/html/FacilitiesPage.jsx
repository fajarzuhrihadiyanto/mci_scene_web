import { Html } from "@react-three/drei"

import styles from './styles/FacilitiesPage.module.css'
import useDataStore from "../store/dataStore"

const FacilitiesPage = () => {
    const facilities = useDataStore.useFacilities()
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Fasilitas</h1>
                <ul className={styles.list}>
                    {facilities.map((facility, index) => <li key={index}>{facility.name}</li>)}
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage