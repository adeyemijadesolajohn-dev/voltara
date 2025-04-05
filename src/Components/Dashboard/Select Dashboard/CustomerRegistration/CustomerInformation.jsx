import React from "react";
import "./CustomerInformation.css";
import "../../../../App.css";
import loginBG from "../../../../LoginAssets/Login placeholder BG.png";
import clientLogo from "../../../../LoginAssets/pngegg.png";
import { Dashboard } from "react-router-dom";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { FaDiagramNext } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const CustomerInformation = () => {
  return (
    <div className="flex customerRegistrationPage">
      <div className="flex container">
        <div className="loginBGDiv">
          <img src={loginBG} alt="Login Background" />

          <div className="steps">
            <h2>Customer Registration</h2>
            <div className="step">
              <div className="stepBullet">
                <FaCircle className="stepIcon" />
              </div>

              <div className="stepText">
                <p>Step 1</p>
                <h4>Your Information</h4>
              </div>
            </div>

            <div className="step">
              <div className="stepBullet">
                <FaCircle className="stepIcon" />
              </div>
              <div className="stepText">
                <p>Step 2</p>
                <h4>Identification</h4>
              </div>
            </div>

            <div className="step">
              <div className="stepBullet">
                <FaCircle className="stepIcon" />
              </div>
              <div className="stepText">
                <p>Step 3</p>
                <h4>Customer Type</h4>
              </div>
            </div>

            <div className="step">
              <div className="stepBullet">
                <FaCircle className="stepIcon" />
              </div>
              <div className="stepText">
                <p>Step 4</p>
                <h4>Occupant Type</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex formDiv">
          <div className="headerDiv">
            <Dashboard to="/Dashboard">
              <div className="logo">
                <img src={clientLogo} alt=" clientLogo" />
                <h4>Company Name</h4>
              </div>
            </Dashboard>
          </div>

          <form action="" className="grid form">
            <h2>Customer Information</h2>

            <div className="inputDiv">
              <div className="flex input">
                <FaUsersBetweenLines className="icon" />
                <input
                  type="text"
                  id="inputField"
                  placeholder="Full Name"
                  aria-placeholder="Full Name"
                  required
                />
                <label htmlFor="Full Name">Full Name</label>
              </div>
            </div>

            <div className="inputDiv">
              <div className="flex input">
                <FaUsersBetweenLines className="icon" />
                <input
                  type="text"
                  id="inputField"
                  placeholder="Address"
                  aria-placeholder="Address"
                  required
                />
                <label htmlFor="Address">Address</label>
              </div>
            </div>

            <div className="inputDiv">
              <div className="flex input">
                <SiAmazonsimpleemailservice className="icon" />
                <input
                  type="Email"
                  id="inputField"
                  placeholder="Company Email"
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
                  placeholder="Phone Number"
                  aria-placeholder="Phone Number"
                  required
                />
                <label htmlFor="Phone Number">Phone Number</label>
              </div>
            </div>

            <button type="submit" className="btn">
              <span>
                Next
                <FaDiagramNext />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
