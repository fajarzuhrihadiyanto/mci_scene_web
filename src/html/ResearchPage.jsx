import { Html } from "@react-three/drei"

import styles from './styles/SubjectPage.module.css'
import { RESEARCH } from "../data/research"

const ResearchPage = () => {
    return (
        <Html
            transform
            scale={[.05, .05, .05]}
            rotation={[-Math.PI/2, 0, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Daftar Penelitian</h1>
                <ul className={styles.list}>
                    {RESEARCH.map((research, index) => (
                        <li key={index}>{research.year} - {research.title}</li>
                    ))}
                </ul>
            </div>
        </Html>
    )
}

export default ResearchPage