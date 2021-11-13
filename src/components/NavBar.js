import styles from '../style/NavBar.module.css'
import colors from '../style/Colors.module.css'
import { Link } from 'react-router-dom'
import Button from './Button'
import logo from '../images/logo.png'

const NavBar = () => {
    return <nav className={colors.bglgray}>
        <ul>
            <li><Link to="/Home" className={styles.navlink}>Новости</Link></li>
            <li><Link to="/Books" className={styles.navlink}>Книги</Link></li>
        </ul>
        <div className={styles.logo}><img src={logo} alt='logo.png'/>LIBRARY33</div>
        <div className={styles.btnholder}>
            <div><Link><Button>Вход</Button></Link></div>
            <div><Link><Button gold txtdgold>Регистрация</Button></Link></div>
        </div>
    </nav>
}
export default NavBar