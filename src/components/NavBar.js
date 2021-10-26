import styles from '../style/NavBar.module.css'
import { Link } from 'react-router-dom'
import Button from './Button'


const NavBar = () => {
    return <nav>
        <ul>
            <li><Link to="/Home">Новости</Link></li>
            <li><Link to="/Books">Книги</Link></li>
        </ul>
        <div>Logo</div>
        <div><Link><Button>Login</Button></Link></div>
        <div><Link><Button gold>Signup</Button></Link></div>
    </nav>
}
export default NavBar