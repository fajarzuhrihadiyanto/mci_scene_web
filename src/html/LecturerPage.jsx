import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/LecturerPage.module.css'
import useDataStore from "../store/dataStore"

const LecturerPage = () => {
    const professors = useDataStore.useProfessors()

    const [lecturerId, setLecturerId] = React.useState(0)
    const lecturer = professors[lecturerId]
    const screenRef = React.useRef()

    const next = React.useCallback(() => {
        setLecturerId((lecturerId + 1) % professors.length)
    }, [lecturerId, professors.length])

    const previous = React.useCallback(() => {
        setLecturerId((lecturerId - 1 + professors.length) % professors.length)
    }, [lecturerId, professors.length])

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
                    <img className={styles.image} src={lecturer?.photo_url} alt={lecturer?.fullname}/>
                </div>
                <div className={styles.data_container}>
                    <h1 className={styles.title}>{lecturer?.fullname}</h1>
                    <p>{lecturer?.is_head_lab && 'Kepala Laboratorium'}</p>
                    <p>NIDN : {lecturer?.NIDN}</p>
                    <p>Email : {lecturer?.email}</p>
                    <p>Pendidikan terakhir : {lecturer?.latest_education}</p>
                    <p>Jabatan terakhir</p>
                    <ul>
                        {lecturer?.position.map((position, i) => (
                            <li key={i}>{position.name} {position.from_year && `${position.from_year} - ${position.to_year || 'Sekarang'}`}</li>
                        ))}

                        {lecturer?.position.length === 0 && '-'}
                    </ul>
                </div>
            </div>
            <div className={styles.publication_container}>
                <h3>Publikasi</h3>
                <div className={styles.publication}>
                    {lecturer?.publication.scopus_id && <a href={`https://www.scopus.com/authid/detail.uri?authorId=${lecturer?.publication.scopus_id}`} target="_blank" rel="noreferrer">Scopus</a>}
                    {lecturer?.publication.google_scholar_id && <a href={`https://scholar.google.co.id/citations?user=${lecturer?.publication.google_scholar_id}&hl=id`} target="_blank" rel="noreferrer">Google Scholar</a>}
                    {lecturer?.publication.sinta_id && <a href={`https://sinta.kemdikbud.go.id/authors/profile/${lecturer?.publication.sinta_id}`} target="_blank" rel="noreferrer">Sinta</a>}
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