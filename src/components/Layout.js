import NavBar from "./NavBar"
import ContentWrapper from './ContentWrapper'
import styles from '../style/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.Layout}>
            <NavBar/>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </div>
    )
}

export default Layout