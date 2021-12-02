import { Link } from "react-router-dom"
import Catalogue from "../components/Catalogue"
import SearchEl from "../components/SearchEl"
import styles from '../style/Books.module.css'
import { useSelector } from "react-redux"
import Button from "../components/Button"

const Books = () => {
    const user = useSelector(state => state.auth.user)

    return <>
        <div className={styles.header}>
            <p>Каталог доступных книг</p>
            {user.role === 'ADMIN' ? <Link to='/Create_PG'><Button gold>Создать книгу</Button></Link> : ''}
        </div>
        <hr />
        <div className={styles.main}>
            <SearchEl />
            <Catalogue />
        </div>
    </>
}
export default Books