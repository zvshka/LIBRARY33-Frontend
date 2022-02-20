import { Link } from 'react-router-dom'
import colors from '../style/Colors.module.css'
import styles from '../style/Footer.module.css'

const Footer = () => {
    return <footer className={`${colors.bgdblue} ${colors.txtwhite}`}>
        <ul>
            <li><Link to="/home" className={colors.txtwhite}>Новости</Link></li>
            <li><Link to="/books" className={colors.txtwhite}>Книги</Link></li>
        </ul>
        <p>App is created by tasha03 & zvshka</p>
    </footer>
}
export default Footer