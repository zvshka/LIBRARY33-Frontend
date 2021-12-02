import BookCard from "./BookCard"
import styles from '../style/Catalogue.module.css'
import { useEffect, useState } from "react"

const Catalogue = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/books', {
            credentials: 'same-origin'
        }).then(res => res.json()).then(bks => setBooks(bks))
    }, [])

    return <div className={`${styles.Catalogue}`}>
        {books.map((book, i) => <BookCard id={book.id} title={book.title} key={i}/>)}
    </div>
}
export default Catalogue