import styles from '../style/NavBar.module.css'
import { Link } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
    return <nav>
        <ul>
            <li><Link to="/Home" className={styles.navlink}>Новости</Link></li>
            <li><Link to="/Books" className={styles.navlink}>Книги</Link></li>
        </ul>
        <div className={styles.logo}>Logo</div>
        <div className={styles.btnholder}>
            <div><Link><Button>Login</Button></Link></div>
            <div><Link><Button gold>Signup</Button></Link></div>
        </div>
    </nav>
}
export default NavBar