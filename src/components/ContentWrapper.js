import styles from '../style/ContentWrapper.module.css'

const ContentWrapper = ({children}) => {
    return <div className={styles.ContentWrapper}>
        {children}
    </div>
}
export default ContentWrapper