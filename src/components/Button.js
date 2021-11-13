import styles from '../style/Button.module.css'
import colors from '../style/Colors.module.css'

const Button = ({ children, gold, txtdgold }) => {
    return <button className={`${styles.btn} ${gold ? colors.bggold : ''} ${txtdgold ? colors.txtdgold : ''}`}>
        {children}
    </button>
}
export default Button