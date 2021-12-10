import styles from '../style/NavBar.module.css'
import colors from '../style/Colors.module.css'
import { Link } from 'react-router-dom'
import Button from './Button'
import logo from '../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'
import URLConst from "./URLConst"

const NavBar = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${URLConst}/auth/login`, {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify({ 'username': 'admin', 'password': 'admin' }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        console.log(response)
        dispatch(login(response))
    }

    if (!user.role) {
        return <nav className={colors.bglgray}>
            <ul>
                <li><Link to="/Home" className={styles.navlink}>Новости</Link></li>
                <li><Link to="/Books" className={styles.navlink}>Книги</Link></li>
            </ul>
            <div className={styles.logo}><img src={logo} alt='logo.png' />LIBRARY33</div>
            <div className={styles.btnholder}>
                <div><Button onClick={handleLogin}>Вход</Button></div>
                <div><Link to="/Signing"><Button gold>Регистрация</Button></Link></div>
            </div>
        </nav>
    } else {
        return <nav className={colors.bglgray}>
            <ul>
                <li><Link to="/Home" className={styles.navlink}>Новости</Link></li>
                <li><Link to="/Books" className={styles.navlink}>Книги</Link></li>
            </ul>
            <div className={styles.logo}><img src={logo} alt='logo.png' />LIBRARY33</div>
            <div className={styles.btnholder}>
                <Button gold className={styles.username}>{user.username}</Button>
            </div>
        </nav>
    }
}
export default NavBar