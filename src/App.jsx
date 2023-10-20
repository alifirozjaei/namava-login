import React from "react";
import "./App.css";
import NamavaIcon from "./components/Icons/NamavaIcon.jsx";
const App = () => {
  return (
    <>
      <div className="app">
        <div className="form-container">
          <div className="row justify-content-between align-items-center">
            <NamavaIcon />
            <button className="btn">ثبت نام</button>
          </div>

          <form className="form">
            <h3>ورود از طریق ایمیل</h3>
            <p>لطفا ایمیل و رمز عبور خود را وارد کنید</p>

            <div className="form-control">
              <label htmlFor="email" className="form-label">
                ایمیل
              </label>
              <input
                type="text"
                id="email"
                className="form-input"
                placeholder="ایمیل"
              />
            </div>

            <div className="form-control">
              <label htmlFor="passwrod" className="form-label">
                رمز عبور
              </label>
              <input
                type="passwrod"
                id="passwrod"
                className="form-input"
                placeholder="رمز عبور"
              />
            </div>

            <button className="form-btn" type="submit" disabled>
              ورود
            </button>

            <a href="#" className="form-link">
              رمز عبور خود را فراموش کرده ام
            </a>

            <a href="#" className="form-link">
              ورود از طریق شماره تلقن همراه
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
