import React from "react";
import $ from "jquery";
import "./ElectricBill.scss";
import "../../../../App.scss";
import loginBG from "../../../../LoginAssets/Login placeholder BG.png";
import clientLogo from "../../../../LoginAssets/pngegg.png";
import mastercard from "../../../../LoginAssets/pngimg.com - mastercard_PNG16.png";
import visa from "../../../../LoginAssets/[CITYPNG.COM]HD Visa Payment Logo PNG - 2000x2000.png";
import verve from "../../../../LoginAssets/verve.1024x355.png";
import NewLocation from "./Location/NewLocation";
import { Link } from "react-router";
import { FaRegCreditCard, FaDiagramNext } from "react-icons/fa6";

import { ImCheckmark2 } from "react-icons/im";
import checkMark from "../../../../LoginAssets/green-tick.gif";
import { GiMeshNetwork } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineElectricMeter, MdOutlinePayments } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { IoCardOutline } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
import { MdOutlinePin } from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
// import { PiUpload } from "react-icons/pi";
// import customerDP from "../../../../LoginAssets/vecteezy_user-icon-on-transparent-background_19879198.png";

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

const ElectricBill = () => {
  return (
    <div className="flex customerRegistrationPage">
      <div className="flex container">
        <div className="loginBGDiv">
          <img src={loginBG} alt="Login Background" />

          <div className="leftHeading">
            <h2>Electric Bill</h2>
            <div className="stepContent">
              <p className="stepNumberContent active">Step 1</p>
              <p className="stepNumberContent dNone">Step 2</p>
              <p className="stepNumberContent dNone">Step 3</p>
              <p className="stepNumberContent dNone">Step 4</p>
            </div>

            <ul className="progressBar">
              <li className="active">Bill Order</li>
              <li>Review Order</li>
              <li>Payment</li>
              <li>Complete Order</li>
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
                <h2>Bill Order</h2>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <FaRegCreditCard className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="Meter/Account Number"
                    aria-placeholder="Meter/Account Number"
                    required
                  />
                  <label htmlFor="Meter/Account Number">
                    Meter/Account Number
                  </label>
                </div>
              </div>

              <div className="inputText">
                <div className="inputBorder">
                  <NewLocation />
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <GiMeshNetwork className="icon" />
                  <input
                    type="text"
                    name="selectProviders"
                    list="providers"
                    placeholder="Select Providers"
                    id="inputField"
                  />
                  <datalist id="providers">
                    <option>Select Provider</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </datalist>
                  <label htmlFor="Service Provider">
                    Select your Service Provider
                  </label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <TbCurrencyNaira className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="000.00"
                    aria-placeholder="000.00"
                    required
                  />
                  <label htmlFor="Budget">
                    How much Electricity do you want to Purchase?
                  </label>
                </div>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <MdOutlineElectricMeter className="icon" />
                  <input
                    type="text"
                    name="meterType"
                    list="meter"
                    placeholder="Meter Type"
                    id="inputField"
                  />
                  <datalist id="meter">
                    <option>Select Provider</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </datalist>
                  <label htmlFor="Meter Type">Meter Type</label>
                </div>
              </div>

              <div className="progressBtns">
                <div className="nextButton">
                  <div type="button" className="btn">
                    <button type="button" className="nextButton"></button>
                    <span>
                      <p>Submit Payment Information</p>
                      <MdOutlinePayments className="icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="reviewHead">
                <div className="bar"></div>
                <p className="reviewHeading">REVIEW YOUR ORDER</p>
                <div className="bar"></div>
              </div>

              <div className="reviewTable">
                <table>
                  <tr>
                    <td>Meter Number</td>
                    <td>0000000000</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>Select Location</td>
                  </tr>
                  <tr>
                    <td>Customer Name</td>
                    <td>Your Name</td>
                  </tr>
                  <tr>
                    <td>Meter Type</td>
                    <td>Prepaid</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>0800-000-0000</td>
                  </tr>
                  <tr>
                    <td>Outstanding Amount</td>
                    <td>&#8358; 000.00</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>0, Abc Street, Def Busstop</td>
                  </tr>
                </table>
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <TbRosetteDiscount className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="Have a Discount?"
                    aria-placeholder="Discount"
                    required
                  />
                  <label htmlFor="Discount">Discount</label>

                  <div className="applyButton">
                    <div type="button" className="btn">
                      <button type="button" className="applyButton"></button>
                      <span>
                        <p>Apply</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lowerContainer">
                <h4>Payment Summary</h4>
                <table>
                  <tr>
                    <td>Vend Amount</td>
                    <td>&#8358; 000.00</td>
                  </tr>
                  <tr>
                    <td>Service Charge</td>
                    <td>&#8358; 000.00</td>
                  </tr>
                  <tr>
                    <td>Gate Charge</td>
                    <td>&#8358; 000.00</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td>&#8358; 000.00</td>
                  </tr>
                </table>
              </div>

              <div className="totalContainer">
                <table>
                  <tr>
                    <td>
                      <h4>Total</h4>
                    </td>
                    <td>
                      <p>&#8358; 000.00</p>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="progressBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="btn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <VscPreview className="icon" />
                        <p>Back</p>
                      </span>
                    </div>
                  </div>

                  <div className="nextButton">
                    <div type="button" className="btn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Pay with card</p>
                        <IoCardOutline className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="changePayment">
                <a href="#" className="link">
                  Change Payment Method
                </a>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="reviewHead">
                <div className="bar"></div>
                <p className="reviewHeading">SELECT CARD</p>
                <div className="bar"></div>
              </div>

              <div className="paymentCard">
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={verve} alt="verve" />
              </div>

              <div className="inputText">
                <div className="flex inputDiv">
                  <input
                    type="text"
                    id="inputField"
                    placeholder="0000 0000 0000 0000"
                    aria-placeholder="card number"
                    required
                  />
                  <label htmlFor="card number">Card Number</label>
                </div>
              </div>

              <div className="inputText cardInputDiv">
                <div className="flex inputDiv">
                  <input
                    type="text"
                    id="cardInput"
                    placeholder="MM/YY"
                    aria-placeholder="expires"
                    required
                  />
                  <label htmlFor="expires">Expires</label>
                </div>

                <div className="flex inputDiv">
                  <input
                    type="text"
                    id="cardInput"
                    placeholder="123"
                    aria-placeholder="cvc"
                    required
                  />
                  <label htmlFor="cvc">CVC</label>
                </div>
              </div>

              <div className="flex futureTransaction">
                <label>
                  <input type="checkbox" />
                  <span>Use this card for future transactions</span>
                </label>
              </div>

              <div className="payBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="btn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <VscPreview className="icon" />
                        <p>Back</p>
                      </span>
                    </div>
                  </div>

                  <div className="nextButton">
                    <div type="button" className="progressBtn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Pay &#8358; 000.00</p>
                        <IoCardOutline className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cancelTransaction">
                <div className="cancelButton">
                  <div type="button" className="cancelBtn">
                    <span>
                      <p>Cancel Transaction</p>
                      <MdCancelPresentation className="icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="text">
                <h2>Complete Order</h2>
              </div>

              <div className="inputText pininput">
                <div className="flex inputDiv">
                  <MdOutlinePin className="icon" />
                  <input
                    type="number"
                    id="inputField"
                    placeholder="012345"
                    aria-placeholder="pin"
                    required
                  />
                  <label htmlFor="pin">Pin</label>
                </div>
              </div>

              <div className="lastBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="btn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <VscPreview className="icon" />
                        <p>Back</p>
                      </span>
                    </div>
                  </div>

                  <div className="nextButton">
                    <div type="button" className="progressBtn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Submit</p>
                        <ImCheckmark2 className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cancelTransaction">
                <div className="cancelButton">
                  <div type="button" className="cancelBtn">
                    <span>
                      <p>Cancel Transaction</p>
                      <MdCancelPresentation className="icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid main">
            <div className="casing">
              <div className="receipt">
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
                    {/* <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.217.1 7.2 16.7-16.8"
                  /> */}
                  </svg>

                  <img src={checkMark} alt="checkMark" />
                </div>

                <div className="congrats">
                  <h2>Payment Successful!</h2>
                  <p className="congratsText">Token:</p>
                  <h3>34587905721861864583</h3>
                </div>

                <div className="lowerContainer">
                  <table>
                    <tr>
                      <td>Reference Number</td>
                      <td>0000000000000</td>
                    </tr>
                    <tr>
                      <td>Payment Time</td>
                      <td>
                        <p>0000-00-00 / 00:00 pm</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Payment Method</td>
                      <td>Bank Transfer</td>
                    </tr>
                  </table>
                </div>

                <div className="totalContainer">
                  <table>
                    <tr>
                      <td>
                        <h4>Amount</h4>
                      </td>
                      <td>
                        <p>&#8358; 000.00</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="lastBtns">
                <div className="prevNext">
                  <div className="prevButton">
                    <div type="button" className="progressBtn">
                      <button type="button" className="prevButton"></button>
                      <span>
                        <VscFilePdf className="icon" />
                        <p>Download PDF</p>
                      </span>
                    </div>
                  </div>

                  <div className="nextButton">
                    <div type="button" className="btn">
                      <button type="button" className="nextButton"></button>
                      <span>
                        <p>Finish</p>
                        <ImCheckmark2 className="icon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricBill;
