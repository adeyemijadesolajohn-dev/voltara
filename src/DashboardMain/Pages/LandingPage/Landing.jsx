import React from "react";
import "./Landing.scss";
import "../../../App.scss";
import Slider from "../../Components/LandingPageSlider/ImageSlider";
import navLogo from "../../../LoginAssets/voltara placeholder logo.png";
import { iconImgs } from "../../../LoginAssets/LoginAssets";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLogoWechat, IoLogoSkype } from "react-icons/io5";

const Landing = () => {
  return (
    <div className="landingPage">
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
              <Link to="/Login">
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
                <img src={iconImgs.instagram} alt="Instagram" />
              </a>

              <a href="#">
                <img src={iconImgs.facebook} alt="Facebook" />
              </a>

              <a href="#">
                <img src={iconImgs.eX} alt="X" />
              </a>
            </div>
          </div>
        </nav>

        <div className="largeStatement">
          <h1 className="statement">
            Streamline Customer & Account Management with Our Powerful
            Enterprise Solution
          </h1>
        </div>

        <Slider />

        <footer className="footer">
          <div className="footerContainer">
            <div className="footerContent">
              <div className="footerList">
                <h3 className="footerHeading">Enterprise Content Management</h3>

                <p>Single Phase Energy Meter</p>

                <p>Three Phase Energy Meter</p>

                <p>Home Electricity Usage</p>
              </div>

              <div className="footerList footMiddle">
                <h3 className="footerHeading">Meter Phase</h3>

                <p>Smart Meters</p>

                <p>Static Meters</p>

                <p>Electronic Meters</p>
              </div>

              <div className="footerList footMiddle">
                <h3 className="footerHeading">Occupant Type</h3>

                <p>Landlord</p>

                <p>Tenant</p>

                <p>Government Agency</p>
              </div>

              <div className="footerList footMiddle">
                <h3 className="footerHeading">Follow Us</h3>

                <div className="footSocials">
                  <a href="#">
                    <img src={iconImgs.instagram} alt="Instagram" />
                  </a>

                  <a href="#">
                    <img src={iconImgs.facebook} alt="Facebook" />
                  </a>

                  <a href="#">
                    <img src={iconImgs.eX} alt="X" />
                  </a>
                </div>
              </div>
              <div className="footerList footRight">
                <h3 className="footerHeading">Contact Us</h3>

                <div className="footerContact">
                  <p>+234 811 816 4299</p>

                  <div className="contactIcon">
                    <FaPhoneAlt />
                  </div>
                </div>

                <div className="footerContact">
                  <p>voltaraenergy@gmail.com</p>

                  <div className="contactIcon">
                    <IoMail />
                  </div>
                </div>

                <div className="footerContact">
                  <p>13982653087</p>

                  <div className="contactIcon">
                    <IoLogoWechat />
                  </div>
                </div>

                <div className="footerContact">
                  <p>13982653087</p>

                  <div className="contactIcon">
                    <IoLogoSkype />
                  </div>
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
              </div>

              <div className="poweredBy">
                <p>
                  Powered by <span className="footVoltara">Voltara</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
