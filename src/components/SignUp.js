import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../features/auth/authSlice";
import URLConst from "./URLConst";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordRepeat) {
      await fetch(`${URLConst}/auth/register`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify({
          email,
          username,
          password,
          firstName,
          lastName,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      const response = await fetch(`${URLConst}/auth/login`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      console.log(response);
      dispatch(login(response));
    }
  };

  return (
    <>
      <form id="signup">
        <input
          placeholder="Логин"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Повтор пароля"
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <input
          placeholder="Имя"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Фамилия"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Link to="books/">
          <Button gold onClick={handleSubmit}>
            Создать аккаунт
          </Button>
        </Link>
      </form>
    </>
  );
};
export default SignUp;
