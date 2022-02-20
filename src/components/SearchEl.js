import styles from '../style/SearchEl.module.css'
import colors from '../style/Colors.module.css'
import Button from './Button'

const SearchEl = () => {
    return <div className={styles.SearchEl}>
        <div className={`${colors.bggray}`}>
            <input type='text' placeholder='Поиск по названию' />
        </div>
        <div className={`${colors.bggray}`}>
            <p>Наличие:</p>
            <div className={styles.stock}>
                <div><input type='radio' id='stock_all' name='in_stock' value='all' checked /><label for='stock_all'>Все книги</label></div>
                <div><input type='radio' id='stock_in_stock' name='in_stock' value='in_stock' /><label for='stock_in_stock'>В наличии</label></div>
                <div><input type='radio' id='stock_not_in_stock' name='in_stock' value='not_in_stock' /><label for='stock_not_in_stock'>Нет в наличии</label></div>
            </div>
            <p>Автор:</p>
            <div className={`${colors.bgdgray}`}><input type='text' placeholder='Поиск автора' /></div>
            <div><input type='checkbox' id='list_of_authors' />
            <label for='list_of_authors'>Список авторов</label></div>
            <p>Жанр:</p>
            <div className={`${colors.bgdgray}`}><input type='text' placeholder='Поиск жанра' /></div>
            <div><input type='checkbox' id='list_of_genres' />
            <label for='list_of_genres'>Список жанров</label></div>
            <p>Издатель:</p>
            <div className={`${colors.bgdgray}`}><input type='text' placeholder='Поиск издательства' /></div>
            <div><input type='checkbox' id='list_of_redactions' />
            <label for='list_of_redactions'>Список издательств</label></div>
        </div>
        <Button gold>Искать</Button>
    </div>
}
export default SearchEl