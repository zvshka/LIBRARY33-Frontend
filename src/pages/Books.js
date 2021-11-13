import Catalogue from "../components/Catalogue"
import SearchEl from "../components/SearchEl"
import styles from '../style/Books.module.css'

const Books = () => {
    return <>
    <p>Каталог доступных книг</p>
    <hr />
    <div className={styles.main}>
        <SearchEl />
        <Catalogue />
    </div>
    </>
}
export default Books