import { Html } from "@react-three/drei"

import styles from './styles/SubjectPage.module.css'
import useDataStore from "../store/dataStore"

const BookPage = () => {
    const books = useDataStore.useBooks()
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
                    {books.map((book, index) => (
                        <li key={index}>{book.release_year} - {book.title}{book.professor_fullname && `, ${book.professor_fullname}`}</li>
                    ))}
                </ul>
                {books.length === 0 && <p className={styles.description}>Tidak ada data</p>}
            </div>
        </Html>
    )
}

export default BookPage