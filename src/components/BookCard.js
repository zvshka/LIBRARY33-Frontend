import styles from '../style/BookCard.module.css'
import colors from '../style/Colors.module.css'

const BookCard = () => {
    return <>
    <div className={`${styles.BookCard}`}>
        <div className={styles.img}></div>
        <div className={`${styles.title_p}`}><p>Book</p></div>
        <div className={`${styles.rate_p} ${colors.bglgray}`}><p>4/5</p></div>
    </div>
    </>
}
export default BookCard