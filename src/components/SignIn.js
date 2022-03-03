import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../features/auth/authSlice";
import URLConst from "./URLConst";
import Button from "./Button";
import { Link } from "react-router-dom";
import styles from '../style/Authentication.module.css';

const SignUp = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URLConst}/auth/login`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    console.log(response);
    dispatch(login(response));
  };

  return (
    <>
      <form id="signin" className={styles.SignIn}>
        <div><input
          placeholder="Логин"
          onChange={(e) => setUsername(e.target.value)}
        /></div>
        <div><input
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        /></div>
        <Link to="books/">
          <Button gold onClick={handleSubmit}>
            Войти
          </Button>
        </Link>
      </form>
    </>
  );
};
export default SignUp;
