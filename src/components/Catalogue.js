import BookCard from "./BookCard"
import styles from '../style/Catalogue.module.css'

const Catalogue = () => {
    return <div className={`${styles.Catalogue}`}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
    </div>
}
export default Catalogue