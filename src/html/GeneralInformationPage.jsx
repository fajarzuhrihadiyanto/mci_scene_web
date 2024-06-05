import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'

const GeneralInformationPage = () => {
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
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>Laboratorium di bidang minat ini menawarkan bidang keahlian yang ditekankan pada kemampuan lulusan dalam menganalisis, mensintesa dan mengevaluasi proses bisnis dan sistem informasi pada sistem Enterprise, mengimplementasikan rekayasa pengetahuan ke dalam suatu aplikasi, melakukan investigasi, pengujian, evaluasi kematangan dan kepatutan terhadap prosedur standard dan tata kelola teknologi informasi, melakukan tata kelola proyek dan sumber daya manusia dan merancang dan mengimplementasikan solusi basis data terdistribusi dan teknologi Big Data.</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage