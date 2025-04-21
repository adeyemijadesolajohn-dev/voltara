import React from "react";
import "../../App.scss";
import "./LandingPage.css";
import { Link } from "react-router";
import navLogo from "../../LoginAssets/voltara placeholder logo.png";
import instagram from "../../LoginAssets/icons8-instagram.gif";
import facebook from "../../LoginAssets/icons8-facebook (1).gif";
import eX from "../../LoginAssets/2714-logo-x-ezgif.com-resize.gif";
import Slider from "./LandingPageSlider/LandingPageSlider";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLogoWechat, IoLogoSkype } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
// import "../../LoginAssets";
// import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="landingContainer">
      <nav className="navBar">
        <div className="navLogo">
          <img src={navLogo} alt="logo" />
          <div className="navLogoText">
            <h4>Voltara</h4>
            <p>Energy Solutions</p>
          </div>
        </div>

        <div className="navLinks">
          <ul className="menuBar">
            <li>
              <a href="#">Main</a>
              <div className="chevronDown">
                <IoIosArrowDown className="arrowDown" />
              </div>
            </li>
            <li>
              <a href="#">About</a>
              <div className="chevronDown">
                <IoIosArrowDown className="arrowDown" />
              </div>
            </li>
            <li>
              <a href="#">Services</a>
              <div className="chevronDown">
                <IoIosArrowDown className="arrowDown" />
              </div>
            </li>
            <li>
              <a href="#">Contact</a>
              <div className="chevronDown">
                <IoIosArrowDown className="arrowDown" />
              </div>
            </li>
          </ul>

          <div className="navLogin">
            <Link to="/">
              <div className="btn">
                <button></button>
                <span>Sign In</span>
              </div>
            </Link>
            <Link to="/Register">
              <div className="btn">
                <button></button>
                <span>Sign Up</span>
              </div>
            </Link>
          </div>

          <div className="navSocials">
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={eX} alt="X" />
            </a>
          </div>
        </div>
      </nav>

      <div className="largeStatement">
        {/* <motion.h1
          className="statement"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Streamline Customer & Account Management with Our Powerful Enterprise
          Solution
        </motion.h1> */}

        <h1 className="statement">
          Streamline Customer & Account Management with Our Powerful Enterprise
          Solution
        </h1>

        <div>{/* <Slider /> */}</div>

        <footer className="footer">
          <div className="footerContainer">
            <div className="footerContent">
              <div className="footerList">
                <h3 className="footerHeading">Enterprise Content Management</h3>
                <p>Single Phase Energy Meter</p>
                <p>Three Phase Energy Meter</p>
                <p>Home Electricity Usage</p>
              </div>
              <div className="footerList">
                <h3 className="footerHeading">Meter Phase</h3>
                <p>Smart Meters</p>
                <p>Static Meters</p>
                <p>Electronic Meters</p>
              </div>
              <div className="footerList">
                <h3 className="footerHeading">Occupant Type</h3>
                <p>Landlord</p>
                <p>Tenant</p>
                <p>Government Agency</p>
              </div>
              <div className="footerList">
                <h3 className="footerHeading">Follow Us</h3>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={eX} alt="X" />
                </a>
              </div>
              <div className="footerList">
                <h3 className="footerHeading">Contact Us</h3>
                <div className="footerContact">
                  <div className="contactIcon">
                    <FaPhoneAlt />
                  </div>
                  <p>+234 811 816 4299</p>
                </div>
                <div className="footerContact">
                  <div className="contactIcon">
                    <IoMail />
                  </div>
                  <p>voltaraenergy@gmail.com</p>
                </div>
                <div className="footerContact">
                  <div className="contactIcon">
                    <IoLogoWechat />
                  </div>
                  <p>13982653087</p>
                </div>
                <div className="footerContact">
                  <div className="contactIcon">
                    <IoLogoSkype />
                  </div>
                  <p>13982653087</p>
                </div>
              </div>
            </div>

            <div className="footerBottom">
              <p>
                <a href="#">Privacy Policy</a> |{" "}
                <a href="#">Terms & Conditions</a>
              </p>
              <div className="copyright">
                <p>�� 2025 Voltara Energy Solutions. All rights reserved.</p>
                <div className="poweredBy">
                  <p>Powered by Voltara</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
