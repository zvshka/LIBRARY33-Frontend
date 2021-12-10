import BookCard from "./BookCard"
import styles from '../style/Catalogue.module.css'
import { useEffect, useState } from "react"
import URLConst from "./URLConst"

const Catalogue = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`${URLConst}/books`, {
            credentials: 'same-origin'
        }).then(res => res.json()).then(bks => setBooks(bks))
    }, [])

    return <div className={`${styles.Catalogue}`}>
        {books.map((book, i) => <BookCard id={book.id} title={book.title} key={i}/>)}
    </div>
}
export default Catalogue