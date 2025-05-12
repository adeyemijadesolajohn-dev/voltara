import React, { useState } from "react";
import "./Register.scss";
import "../../../App.scss";
import loginBG from "../../../LoginAssets/Login placeholder BG.png";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import { Link } from "react-router";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { TbLockPassword, TbPassword } from "react-icons/tb";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";

const Register = () => {
  const [type, setType] = useState("password");
  return (
    <div className="flex registerPage">
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

            <h3>Join Us</h3>
          </div>

          <form action="" className="grid form">
            <h2>Sign Up</h2>

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
                  type="Email"
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
                <AiOutlinePhone className="icon" />
                <input
                  type="number"
                  id="inputField"
                  placeholder="0800 000 0000"
                  aria-placeholder="Phone Number"
                  required
                />
                <label htmlFor="Phone Number">Phone Number</label>
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

            <div className="inputDiv">
              <div className="flex input">
                <BsShieldLock className="icon" />
                <input
                  type={type}
                  id="inputField"
                  placeholder="************"
                  aria-placeholder="Confirm Password"
                  required
                />
                <label htmlFor="Confirm Password"> Confirm Password</label>
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
            </div>

            <div className="flex termsConditions">
              <label>
                <input type="checkbox" required />
                <span>
                  By creating your account, you agree to our{" "}
                  <a href="#">
                    <span className="link">Terms of Use</span>
                  </a>{" "}
                  &{" "}
                  <a href="#">
                    <span className="link">Privacy Policy</span>
                  </a>
                </span>
              </label>
            </div>

            <Link to="/SelectDashboard">
              <div type="submit" className="btn">
                <button></button>
                <span>Sign Up</span>
              </div>
            </Link>

            <div className="registerLinkDiv">
              <span className="text">Already have an account? </span>
              <Link to="/Login">
                <span className="signUp link">Log In</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
