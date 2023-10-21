import React from "react";
import styles from "./input.module.css";
const Input = ({ id, type, placeholder, label, changeHandler, value }) => {
  return (
    <div className={styles["form-control"]}>
      <label htmlFor="passwrod" className={styles["form-label"]}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles["form-input"]}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
