import React, { useState } from "react";
import "./Login.scss";
import "../../../App.scss";
import loginBG from "../../../LoginAssets/Login placeholder BG.png";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import { Link } from "react-router";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [type, setType] = useState("password");

  return (
    <div className="flex loginPage">
      <div className="flex container">
        <div className="loginBGDiv">
          <img src={loginBG} alt="Login Background" />

          <div className="loginBGText">
            <h2 className="loginBGHeading">Connecting you to the future</h2>
            <p>Create your Connection</p>
          </div>
        </div>

        <div className="flex formDiv">
          <div className="headerDiv">
            <Link to="/">
              <div className="logo">
                <img src={logo} alt="logo" />
                <h4>Voltara</h4>
                <p>Energy Solutions</p>
              </div>
            </Link>

            <h3>Welcome Back</h3>
          </div>

          <form action="" className="grid form">
            <h2>Log In</h2>

            <div className="inputDiv">
              <div className="flex input">
                <FaUsersBetweenLines className="icon" />
                <input
                  type="text"
                  id="inputField"
                  placeholder="Company Ltd"
                  aria-placeholder="Company Name"
                  required
                />
                <label htmlFor="Company Name">Company Name</label>
              </div>
            </div>

            <div className="inputDiv">
              <div className="flex input">
                <SiAmazonsimpleemailservice className="icon" />
                <input
                  type="text"
                  id="inputField"
                  placeholder="abc123@email.com"
                  aria-placeholder="Company Email"
                  required
                />
                <label htmlFor="Email">Company Email</label>
              </div>
            </div>

            <div className="inputDiv">
              <div className="flex input">
                <TbLockPassword className="icon" />
                <input
                  type={type}
                  id="inputField"
                  placeholder="************"
                  aria-placeholder="Password"
                  required
                />
                <label htmlFor="Password">Password</label>
                {type === "password" ? (
                  <FaRegEyeSlash
                    className="eye"
                    onClick={() => {
                      setType("text");
                    }}
                  />
                ) : (
                  <FaRegEye
                    className="eye"
                    onClick={() => {
                      setType("password");
                    }}
                  />
                )}
              </div>
            </div>

            <div className="flex rememberForgot">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#">
                <span className="forgot link">Forgot Password</span>
              </a>
            </div>

            <Link to="/SelectDashboard">
              <div type="submit" className="btn">
                <button></button>
                <span>Log In</span>
              </div>
            </Link>

            <div className="registerLinkDiv">
              <span className="text">Don't have an account? </span>
              <Link to="/Register">
                <span className="signUp link">Register</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
