import React from "react";
import Input from "../Form/Input.jsx";
import styles from "./loginform.module.css";
const LoginForm = () => {
  return (
    <form className={styles["form"]}>
      <h3>ورود از طریق ایمیل</h3>
      <p>لطفا ایمیل و رمز عبور خود را وارد کنید</p>

      <Input id="email" type="email" placeholder="ایمیل" label="ایمیل" />

      <Input
        id="password"
        type="password"
        placeholder="رمز عبور"
        label="رمز عبور"
      />

      <button className={styles["form-btn"]} type="submit" disabled>
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
