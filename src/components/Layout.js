import NavBar from "./NavBar"
import ContentWrapper from './ContentWrapper'
import styles from '../style/Layout.module.css'
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className={styles.Layout}>
            <NavBar/>
            <ContentWrapper>
                {children}
            </ContentWrapper>
            <Footer />
        </div>
    )
}

export default Layout