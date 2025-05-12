import React from "react";
import $ from "jquery";
import "../../../App.scss";
import "./CreateAccount.scss";
import navLogo from "../../../LoginAssets/voltara placeholder logo.png";
import { AiOutlinePhone } from "react-icons/ai";
import {
  FaRegUser,
  FaDiagramNext,
  FaRegIdCard,
  FaBuildingUser,
  FaRegCreditCard,
  FaShirtsinbulk,
  FaHouseUser,
  FaRegMoneyBill1,
} from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
import { RiGovernmentLine } from "react-icons/ri";
import { ImCheckmark2 } from "react-icons/im";
import { MdOutlineAttachEmail, MdOutlineElectricMeter } from "react-icons/md";
import checkMark from "../../../LoginAssets/green-tick.gif";
import { iconIcon } from "../../../LoginAssets/LoginAssets";
import { Link } from "react-router";

const CreateAccount = () => {
  const prevBtns = document.querySelectorAll(".prevButton");
  const nextBtns = document.querySelectorAll(".nextButton");
  const progress = document.getElementById("progresss");
  const formSteps = document.querySelectorAll(".formStep");
  const progressSteps = document.querySelectorAll(".progressstep");

  let formStepNum = 0;

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepNum++;
      updateFormSteps();
      updateProgressbar();
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepNum--;
      updateFormSteps();
      updateProgressbar();
    });
  });

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("formStepActive") &&
        formStep.classList.remove("formStepActive");
    });

    formSteps[formStepNum].classList.add("formStepActive");
  }

  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepNum + 1) {
        progressStep.classList.add("progressstepactive");
      } else {
        progressStep.classList.remove("progressstepactive");
      }
    });

    const progressActive = document.querySelectorAll(".progressstepactive");

    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
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
  return (
    <div className="createContainer">
      <form action="#" className="form">
        <div className="progressbar">
          <div className="progresss" id="progresss"></div>
          <div
            className="progressstep progressstepactive"
            data-title="1: Contact Details"
          ></div>
          <div className="progressstep" data-title="2: Service Type"></div>
          <div className="progressstep" data-title="3: Tariff Type"></div>
          <div className="progressstep" data-title="4: Finish"></div>
        </div>

        <div className="formStep formStepActive">
          <div className="inputGroup">
            <div className="inputDivCA">
              <div className="flex inputCA">
                <FaRegUser className="iconCA" />
                <input
                  type="text"
                  id="userNameCA"
                  placeholder="Full Name"
                  aria-placeholder="Full Name"
                  required
                />
                <label htmlFor="Full Name">Full Name</label>
              </div>
            </div>

            <div className="inputDivCA">
              <div className="flex inputCA">
                <MdOutlineAttachEmail className="iconCA" />
                <input
                  type="Email"
                  id="inputFieldCA"
                  placeholder="abc123@email.com"
                  aria-placeholder="Email"
                  required
                />
                <label htmlFor="Email">Email Address</label>
              </div>
            </div>

            <div className="inputDivCA">
              <div className="flex inputCA">
                <AiOutlinePhone className="iconCA" />
                <input
                  type="number"
                  id="inputFieldCA"
                  placeholder="0800 000 0000"
                  aria-placeholder="Phone Number"
                  required
                />
                <label htmlFor="Phone Number">Phone Number</label>
              </div>
            </div>

            <div className="inputDivCA">
              <div className="flex inputCA">
                <FaRegIdCard className="iconCA" />
                <input
                  type="number"
                  id="inputFieldCA"
                  placeholder="0000000000"
                  aria-placeholder="customer id Number"
                  required
                />
                <label htmlFor="customer id Number">Customer ID Number</label>
              </div>
            </div>

            <div className="inputDivCA">
              <div className="flex inputCA">
                <MdOutlineElectricMeter className="iconCA" />
                <input
                  type="number"
                  id="inputFieldCA"
                  placeholder="0000000000000"
                  aria-placeholder="meter id Number"
                  required
                />
                <label htmlFor="meter id Number">Meter ID Number</label>
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
                      <FaDiagramNext className="iconCA" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formStep">
          <div className="inputGroup">
            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <FaRegCreditCard className="iconCA" />
                <div className="label">
                  <h3>Postpaid</h3>
                  <input
                    type="checkbox"
                    id="Customer"
                    name="Customer[1][]"
                    value="1"
                  />
                </div>
              </div>
            </div>

            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <FaRegMoneyBill1 className="iconCA" />
                <div className="label">
                  <h3>Prepaid</h3>
                  <input
                    type="checkbox"
                    id="Customer"
                    name="Customer[1][]"
                    value="1"
                  />
                </div>
              </div>
            </div>

            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <FaShirtsinbulk className="iconCA" />
                <div className="label">
                  <h3>Maximum Demand (MD)</h3>
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
                      <FaDiagramNext className="iconCA" />
                      <p>Prev</p>
                    </span>
                  </div>
                </div>

                <div className="nextButton">
                  <div type="button" className="btn">
                    <button type="button" className="nextButton"></button>
                    <span>
                      <p>Next</p>
                      <FaDiagramNext className="iconCA" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formStep">
          <div className="inputGroup">
            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <FaHouseUser className="iconCA" />
                <div className="label">
                  <h3>Residential</h3>
                  <input
                    type="checkbox"
                    id="Customer"
                    name="Customer[2][]"
                    value="1"
                  />
                </div>
              </div>
            </div>

            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <FaBuildingUser className="iconCA" />
                <div className="label">
                  <h3>Commercial</h3>
                  <input
                    type="checkbox"
                    id="Customer"
                    name="Customer[2][]"
                    value="1"
                  />
                </div>
              </div>
            </div>

            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <LiaIndustrySolid className="iconCA" />
                <div className="label">
                  <h3>Industrial</h3>
                  <input
                    type="checkbox"
                    id="Customer"
                    name="Customer[2][]"
                    value="1"
                  />
                </div>
              </div>
            </div>

            <div className="inputTextCA">
              <div className="flex createCheckBox">
                <RiGovernmentLine className="iconCA" />
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

            <div className="progressBtns">
              <div className="prevNext">
                <div className="prevButton">
                  <div type="button" className="btn">
                    <button type="button" className="prevButton"></button>
                    <span>
                      <FaDiagramNext className="iconCA" />
                      <p>Prev</p>
                    </span>
                  </div>
                </div>

                <div className="nextButton">
                  <div type="button" className="btn">
                    <button type="button" className="nextButton"></button>
                    <span>
                      <p>Submit</p>
                      <ImCheckmark2 className="iconCA" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formStep">
          <div className="inputGroup">
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

            <div className="progressBtns">
              {/* <Link to="/Dashboard/Account">
                <div type="button" className="progressBtn">
                  <button></button>
                  <span>
                    <p>Finish</p>
                    <ImCheckmark2 className="icon" />
                  </span>
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
