import React, { useState } from "react";
import Input from "../Form/Input.jsx";
import styles from "./loginform.module.css";
import validateEmail from "../../utils/validateEmail.js";
import validatePassword from "../../utils/validatePassword.js";
import { toast } from "react-toastify";
import login from "../../services/login.js";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../lottie/loading.json";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const changeEmailHandler = (emailValue) => {
    setEmail(emailValue.trim());
  };

  const changePasswordHandler = (passwordValue) => {
    setPassword(passwordValue.trim());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);

    toast.dismiss();
    if (!emailIsValid) {
      toast.warn("ایمیل نامعتبر است.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (!passwordIsValid) {
      toast.warn("رمز عبور نامعتبر است.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (isLoading == false) {
      setIsLoading(true);
      login({ Password: password, UserName: email })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log("Error in login", error))
        .finally(() => {
          setIsLoading(false);
        });
    }
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
        disabled={!email || !password || isLoading}
      >
        {!isLoading && "ورود"}
        {isLoading && (
          <Player
            autoplay
            loop
            src={animation}
            style={{ height: "40px", width: "40px" }}
          ></Player>
        )}
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
