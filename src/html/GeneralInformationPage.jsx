import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'
import useDataStore from "../store/dataStore"

const GeneralInformationPage = () => {
    const labDescription = useDataStore.useLabDescription()
    return (
        <Html
            transform
            position={[0, 0.212, 0]} 
            scale={[.025, .025, .025]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 style={{margin: 0, marginBottom: '16px'}}>Selamat Datang di halaman Laboratorium Manajemen Cerdas Informasi.</h1>
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>{labDescription}</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage