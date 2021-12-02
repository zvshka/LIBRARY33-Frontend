import styles from '../style/Button.module.css'
import colors from '../style/Colors.module.css'

const Button = ({ children, gold, onClick}) => {
    return <button className={`${styles.btn} ${gold ? colors.bggold : ''}`} onClick={onClick}>
        {children}
    </button>
}
export default Button