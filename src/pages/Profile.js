import { useSelector } from "react-redux"
import styles from "../style/Profile.module.css"

const Profile = () => {
    const user = useSelector(state => state.auth.user)

    if (!user.role) {
        return <>Пользователь не авторизован</>
    } else {
        return <>
            <div className={`${styles.heading}`}>Информация о пользователе <div className={`${styles.username}`}>{user.username}</div></div>
            <div>Имя: {user.firstName} {user.lastName}</div>
        </>
    }
}
export default Profile