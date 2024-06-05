import { Html } from "@react-three/drei"

import styles from './styles/SubjectPage.module.css'
import { BOOKS } from "../data/books"

const BookPage = () => {
    return (
        <Html
            transform
            scale={[.05, .05, .05]}
            rotation={[-Math.PI/2, 0, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 className={styles.title}>Daftar Buku</h1>
                <ul className={styles.list}>
                    {BOOKS.map((data, index) => (
                        <li key={index}>{data.year} - {data.title}</li>
                    ))}
                </ul>
                {BOOKS.length === 0 && <p className={styles.description}>Tidak ada data</p>}
            </div>
        </Html>
    )
}

export default BookPage