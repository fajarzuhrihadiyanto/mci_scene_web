import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/SubjectPage.module.css'
import { SUBJECT } from "../data/subject"

const SubjectList = ({ onClick }) => {
    return (
        <>
            <h1 className={styles.title}>Daftar Mata Kuliah</h1>
            <div className={styles.grid_container}>
                {SUBJECT.map((subject, index) => (
                    <button className={styles.button} key={index} onClick={() => onClick(index)}>{subject.title}</button>
                ))}
            </div>
        </>
    )
}

const SubjectDetail = ({ subject, onClick }) => {
    return (
        <>
            <h1 className={styles.title}>{subject.title}</h1>
            <p className={styles.description}>Mata kuliah {subject.mandatory ? 'wajib' : 'pilihan'}</p>
            <div>
                <h2>Deskripsi Mata Kuliah</h2>
                <p className={styles.description}>{subject.description}</p>
            </div>
            <div>
                <h2>Capaian Pembelajaran Mata Kuliah</h2>
                <ul className={styles.list}>
                    {subject.objective.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
            <button className={styles.button} onClick={onClick} style={{marginTop: 24}}>Back</button>
        </>
    )
}

const SubjectPage = () => {

    // Get state and setter from the store
    const [subjectId, setSubjectId] = React.useState(-1)

    const onClick = (id) => {
        setSubjectId(id)
    }

    const onCancel = () => {
        setSubjectId(-1)
    }
    return (
        <Html
            transform
            scale={[.05, .05, .05]}
            rotation={[-Math.PI/2, 0, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                {subjectId === -1
                    ? <SubjectList onClick={onClick}/>
                    : <SubjectDetail subject={SUBJECT[subjectId]} onClick={onCancel}/>
                }
            </div>
        </Html>
    )
}

export default SubjectPage