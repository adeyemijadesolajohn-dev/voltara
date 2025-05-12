import React from "react";
import $ from "jquery";
import "./CustomerRegistration.scss";
import "../../../App.scss";
import loginBG from "../../../LoginAssets/Login placeholder BG.png";
import clientLogo from "../../../LoginAssets/pngegg.png";
import { Link } from "react-router";
import {
  FaRegUser,
  FaDiagramNext,
  FaRegIdCard,
  FaRegIdBadge,
  FaRegBuilding,
  FaBuildingUser,
} from "react-icons/fa6";
import { AiOutlinePhone } from "react-icons/ai";
import { GiPassport } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { RiGovernmentLine } from "react-icons/ri";
import { FaHouseUser } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";
import { LuMapPinHouse } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import checkMark from "../../../LoginAssets/green-tick.gif";

var next_click = document.querySelectorAll(".nextButton");
var main_form = document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progressBar li");
var num = document.querySelectorAll(".stepNumber");

let formnumber = 0;

next_click.forEach(function (nex_click_form) {
  nex_click_form.addEventListener("click", function () {
    formnumber++;
    updateform();
    progress_forward();
    contentchange();
  });
});

var back_click = document.querySelectorAll(".prevButton");
back_click.forEach(function (back_click_form) {
  back_click_form.addEventListener("click", function () {
    formnumber--;
    updateform();
    progress_backward();
    contentchange();
  });
});

var username = document.querySelectorAll("#userName");
var showname = document.querySelectorAll(".shownName");

var submit_click = document.querySelectorAll(".submitButton");

submit_click.forEach(function (submit_circle_form) {
  submit_circle_form.addEventListener("click", function () {
    showname.innerHTML = username.value;
    formnumber++;
    updateform();
  });
});

function updateform() {
  main_form.forEach(function (mainform_number) {
    mainform_number.classList.remove("active");
  });
  main_form[formnumber].classList.add("active");
}

function progress_forward() {
  num.innerHTML = formnumber + 1;
  step_list[formnumber].classList.add("active");
}

function progress_backward() {
  var form_num = formnumber + 1;
  step_list[form_num].classList.remove("active");
  num.innerHTML = form_num;
}

var step_num_content = document.querySelectorAll(".stepNumberContent");
function contentchange() {
  step_num_content.forEach(function (content) {
    content.classList.remove("active");
    content.classList.add("dNone");
  });
  step_num_content[formnumber].classList.add("active");
}

$("input:checkbox").on("click", function () {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

const CustomerRegistration = () => {
  return (
    <div className="flex customerRegistrationPage">
      <div className="flex container">
        <div className="loginBGDiv">
          <img src={loginBG} alt="Login Background" />

          <div className="leftHeading">
            <h2>Customer Registration</h2>
            <div className="stepContent">
              <h4>
                Step <span className="stepNumber">1</span>
              </h4>
              <p className="stepNumberContent active">
                Please insert your profile information here
              </p>
              <p className="stepNumberContent dNone">
                Please upload your identification documents here
              </p>
              <p className="stepNumberContent dNone">
                Select what type of customer you are
              </p>
              <p className="stepNumberContent dNone">
                Select what type of occupant you are
              </p>
            </div>

            <ul className="progressBar">
              <li className="active">Customer Information</li>
              <li>Identification Documents</li>
              <li>Customer Type</li>
              <li>Occupant Type</li>
            </ul>
          </div>
        </div>

        <div className="flex formDiv">
          <div className="headerDiv">
            <Link to="/Dashboard">
              <div className="logo">
                <img src={clientLogo} alt=" clientLogo" />
                <h4>Company Name</h4>
              </div>
            </Link>
          </div>

          <div className="grid main active">
            <div className="casing">
              <div className="text">
                <h2>Customer Information</h2>
                <p>Please insert your profile information here</p>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <FaRegUser className="icon" />
                  <input
                    type="text"
                    id="userName"
                    placeholder="John Doe"
                    aria-placeholder="Full Name"
                    required
                  />
                  <label htmlFor="Full Name">Full Name</label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <LuMapPinHouse className="icon" />
                  <input
                    type="text"
                    id="inputField"
                    placeholder="1, abc street, busstop, state"
                    aria-placeholder="Address"
                    required
                  />
                  <label htmlFor="Address">Full Address</label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <AiOutlinePhone className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="Phone Number"
                    aria-placeholder="Phone Number"
                    required
                  />
                  <label htmlFor="Address">Phone Number</label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <MdOutlineAttachEmail className="icon" />
                  <input
                    type="text"
                    id="inputField"
                    placeholder="Email"
                    aria-placeholder="Email"
                    required
                  />
                  <label htmlFor="Email">Email</label>
                </div>
              </div>

              <div className="progressBtns">
                <div className="prevNext">
                  <div className="prev"></div>

                  <div className="nextButton">
                    <div type="button" className="btn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Next</p>
                        <FaDiagramNext className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="text">
                <h2>Identification Documents</h2>
                <p>
                  Please select the document type you want to upload as a means
                  of identification below
                </p>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <GiPassport className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="1234567890"
                    aria-placeholder="Passport ID Number"
                    required
                  />
                  <label htmlFor="Passport ID Number">Passport ID Number</label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <FaRegIdCard className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="1234567890"
                    aria-placeholder="Driver's License Number"
                    required
                  />
                  <label htmlFor="Address">Driver's License Number</label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <FaRegIdBadge className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="1234567890"
                    aria-placeholder="National Identification Number (NIN)"
                    required
                  />
                  <label htmlFor="National Identification Number (NIN)">
                    National Identification Number (NIN)
                  </label>
                </div>
              </div>

              <div className="progressBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="btn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <FaDiagramNext className="icon" />
                        <p>Prev</p>
                      </span>
                    </div>
                  </div>

                  <div className="nextButton">
                    <div type="button" className="btn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Next</p>
                        <FaDiagramNext className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="text">
                <h2>Customer Type</h2>
                <p>
                  Please select the customer type you want to proceed with below
                </p>
              </div>

              <div className="inputText">
                <div className="flex formCheckBox">
                  <IoHome className="icon" />
                  <div className="label">
                    <h3>Residential Customer</h3>
                    <input
                      type="checkbox"
                      id="Customer"
                      name="Customer[1][]"
                      value="1"
                    />
                  </div>
                </div>
              </div>

              <div className="inputText">
                <div className="flex formCheckBox">
                  <FaRegBuilding className="icon" />
                  <div className="label">
                    <h3>Commercial Customer</h3>
                    <input
                      type="checkbox"
                      id="Customer"
                      name="Customer[1][]"
                      value="1"
                    />
                  </div>
                </div>
              </div>

              <div className="inputText">
                <div className="flex formCheckBox">
                  <LiaIndustrySolid className="icon" />
                  <div className="label">
                    <h3>Industrial Customer</h3>
                    <input
                      type="checkbox"
                      id="Customer"
                      name="Customer[1][]"
                      value="1"
                    />
                  </div>
                </div>
              </div>

              <div className="progressBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="btn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <FaDiagramNext className="icon" />
                        <p>Prev</p>
                      </span>
                    </div>
                  </div>

                  <div className="nextButton">
                    <div type="button" className="btn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Next</p>
                        <FaDiagramNext className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="text">
                <h2>Occupant Type</h2>
                <p>
                  Please select the occupant type you want to proceed with below
                </p>
              </div>

              <div className="inputText">
                <div className="flex formCheckBox">
                  <RiGovernmentLine className="icon" />
                  <div className="label">
                    <h3>Government Institution</h3>
                    <input
                      type="checkbox"
                      id="Customer"
                      name="Customer[2][]"
                      value="1"
                    />
                  </div>
                </div>
              </div>

              <div className="inputText">
                <div className="flex formCheckBox">
                  <FaBuildingUser className="icon" />
                  <div className="label">
                    <h3>Landlord</h3>
                    <input
                      type="checkbox"
                      id="Customer"
                      name="Customer[2][]"
                      value="1"
                    />
                  </div>
                </div>
              </div>

              <div className="inputText">
                <div className="flex formCheckBox">
                  <FaHouseUser className="icon" />
                  <div className="label">
                    <h3>Tenant</h3>
                    <input
                      type="checkbox"
                      id="Customer"
                      name="Customer[2][]"
                      value="1"
                    />
                  </div>
                </div>
              </div>

              <div className="progressBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="btn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <FaDiagramNext className="icon" />
                        <p>Prev</p>
                      </span>
                    </div>
                  </div>

                  <div className="submitButton">
                    <div type="button" className="btn">
                      <button type="button" className="submitButton"></button>
                      <span>
                        <p>Submit</p>
                        <ImCheckmark2 className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="checkMark">
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                </svg>

                <img src={checkMark} alt="checkMark" />
              </div>

              <div className="text congrats">
                <h2>Congratulations</h2>
                <p className="congratsText">
                  Thanks Mr./Mrs. <span className="shownName"></span>, your
                  information has been submitted successfully.
                </p>
              </div>

              <Link to="/SelectDashboard">
                {" "}
                <div type="button" className="btn">
                  <button></button>
                  <span>
                    <p>Finish</p>
                    <ImCheckmark2 className="icon" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
