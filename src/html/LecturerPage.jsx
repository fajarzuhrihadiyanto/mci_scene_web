import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/LecturerPage.module.css'
import { LECTURERS } from "../data/lecturers"

const LecturerPage = () => {
    const [lecturerId, setLecturerId] = React.useState(0)
    const lecturer = LECTURERS[lecturerId]
    const screenRef = React.useRef()

    const next = React.useCallback(() => {
        setLecturerId((lecturerId + 1) % LECTURERS.length)
    }, [lecturerId])

    const previous = React.useCallback(() => {
        setLecturerId((lecturerId - 1 + LECTURERS.length) % LECTURERS.length)
    }, [lecturerId])

    React.useEffect(() => {
        if (screenRef.current) {
            screenRef.current.scrollTo(0, 0)
        }
    }, [lecturerId])
    return (
        <Html
            transform
            scale={[.05, .05, .05]}
            rotation={[-Math.PI/2, 0, 0]}
            className={styles.html}
            ref={screenRef}
            >
            <div className={`${styles.container}`}>
                <div className={styles.image_container}>
                    <img className={styles.image} src={lecturer?.pictureUrl} alt={lecturer?.name}/>
                </div>
                <div className={styles.data_container}>
                    <h1 className={styles.title}>{lecturer?.name}</h1>
                    <p>{lecturer?.isHeadLab && 'Kepala Laboratorium'}</p>
                    <p>NIDN : {lecturer?.nidn}</p>
                    <p>Email : {lecturer?.email}</p>
                    <p>Pendidikan terakhir : {lecturer?.last_education}</p>
                    <p>Jabatan terakhir</p>
                    <ul>
                        {lecturer?.last_position.map((position, i) => (
                            <li key={i}>{position}</li>
                        ))}

                        {lecturer?.last_position.length === 0 && '-'}
                    </ul>
                </div>
            </div>
            <div className={styles.publication_container}>
                <h3>Publikasi</h3>
                <div className={styles.publication}>
                    <a href={`https://www.scopus.com/authid/detail.uri?authorId=${lecturer?.scopusId}`} target="_blank" rel="noreferrer">Scopus</a>
                    <a href={`https://scholar.google.co.id/citations?user=${lecturer?.scholarId}&hl=id`} target="_blank" rel="noreferrer">Google Scholar</a>
                    <a href={`https://sinta.kemdikbud.go.id/authors/profile/${lecturer?.sintaId}`} target="_blank" rel="noreferrer">Sinta</a>
                </div>
            </div>
            <div className={styles.button_container}>
                <button className={styles.button} onClick={previous}>Previous</button>
                <button className={styles.button} onClick={next}>Next</button>
            </div>
        </Html>
    )
}

export default LecturerPage