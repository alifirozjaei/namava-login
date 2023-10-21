import React from "react";
import "./App.css";
import NamavaIcon from "./components/Icons/NamavaIcon.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
const App = () => {
  return (
    <>
      <div className="app">
        <div className="form-container">
          <div className="row justify-content-between align-items-center">
            <NamavaIcon />
            <button className="btn">ثبت نام</button>
          </div>

          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default App;
