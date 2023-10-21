import React, { useState } from "react";
import Input from "../Form/Input.jsx";
import styles from "./loginform.module.css";
import validateEmail from "../../utils/validateEmail.js";
import validatePassword from "../../utils/validatePassword.js";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmailHandler = (emailValue) => {
    setEmail(emailValue.trim());
  };

  const changePasswordHandler = (passwordValue) => {
    setPassword(passwordValue.trim());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      email,
      password,
      validateEmail(email),
      validatePassword(password)
    );
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <h3>ورود از طریق ایمیل</h3>
      <p>لطفا ایمیل و رمز عبور خود را وارد کنید</p>

      <Input
        id="email"
        type="text"
        placeholder="ایمیل"
        label="ایمیل"
        changeHandler={changeEmailHandler}
        value={email}
      />

      <Input
        id="password"
        type="password"
        placeholder="رمز عبور"
        label="رمز عبور"
        changeHandler={changePasswordHandler}
        value={password}
      />

      <button
        className={styles["form-btn"]}
        type="submit"
        disabled={!email || !password}
      >
        ورود
      </button>

      <a href="#" className={styles["form-link"]}>
        رمز عبور خود را فراموش کرده ام
      </a>

      <a href="#" className={styles["form-link"]}>
        ورود از طریق شماره تلقن همراه
      </a>
    </form>
  );
};

export default LoginForm;
