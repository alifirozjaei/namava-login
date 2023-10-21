import React from "react";
import styles from "./input.module.css";
const Input = ({ id, type, placeholder, label }) => {
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
      />
    </div>
  );
};

export default Input;
