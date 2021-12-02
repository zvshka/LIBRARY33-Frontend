import { Link } from 'react-router-dom'
import colors from '../style/Colors.module.css'
import styles from '../style/Footer.module.css'

const Footer = () => {
    return <footer className={colors.bggray}>
        <ul>
            <li><Link to="/Home" >Новости</Link></li>
            <li><Link to="/Books" >Книги</Link></li>
        </ul>
        <p>App is created by tasha03 & zvshka</p>
    </footer>
}
export default Footer