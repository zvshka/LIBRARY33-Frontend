import styles from '../style/BookCard.module.css'
import colors from '../style/Colors.module.css'
import { Link } from 'react-router-dom'

const BookCard = ({id, title}) => {
    return <Link to={`book/` + id}>
    <div id={id} className={`${styles.BookCard}`}>
        <div className={styles.img}></div>
        <div className={`${styles.title_p}`}><p>{title}</p></div>
        <div className={`${styles.rate_p} ${colors.bglgray}`}><p>4/5</p></div>
    </div></Link>
}
export default BookCard