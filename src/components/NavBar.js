import styles from "../style/NavBar.module.css";
import colors from "../style/Colors.module.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user.role) {
    return (
      <nav className={colors.bglgray}>
        <ul>
          <li>
            <Link to="/Home" className={styles.navlink}>
              Новости
            </Link>
          </li>
          <li>
            <Link to="/Books" className={styles.navlink}>
              Книги
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src={logo} alt="logo.png" />
          LIBRARY33
        </div>
        <div className={styles.btnholder}>
          <div>
            <Link to="/LoggingIn">
              <Button>Вход</Button>
            </Link>
          </div>
          <div>
            <Link to="/Signing">
              <Button gold>Регистрация</Button>
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={colors.bglgray}>
        <ul>
          <li>
            <Link to="/Home" className={styles.navlink}>
              Новости
            </Link>
          </li>
          <li>
            <Link to="/Books" className={styles.navlink}>
              Книги
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src={logo} alt="logo.png" />
          LIBRARY33
        </div>
        <div className={styles.btnholder}>
          <Link to="/Profile">
            <Button gold className={styles.username}>
              {user.username}
            </Button>
          </Link>
        </div>
      </nav>
    );
  }
};
export default NavBar;
