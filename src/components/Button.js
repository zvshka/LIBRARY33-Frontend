import styles from '../style/Button.module.css'

const Button = ({ children, gold }) => {
    return <button className={`${styles.btn} ${gold ? styles.gold : ''}`}>
        {children}
    </button>
}
export default Button