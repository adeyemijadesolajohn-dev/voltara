import React from "react";
import "./DebitSummary.scss";
import "../../../App.scss";
import loginBG from "../../../LoginAssets/Login placeholder BG.png";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import { Link } from "react-router";
import { TbArrowAutofitContent } from "react-icons/tb";
import { TbCurrencyNaira } from "react-icons/tb";
import BulletChart from "../../Components/BulletChart/BulletChart";

const DebitSummary = () => {
  return (
    <div className="flex loginPage">
      <div className="flex container">
        <div className="loginBGDiv">
          <img src={loginBG} alt="Login Background" />

          <div className="leftHeading">
            <h2>Debit Summary</h2>
            <div className="stepContent">
              <p className="stepNumberContent active">Steps</p>
              <p className="stepNumberContent dNone">Step 2</p>
              <p className="stepNumberContent dNone">Step 3</p>
              <p className="stepNumberContent dNone">Step 4</p>
            </div>

            <ul className="progressBar">
              <li>Bill Order</li>
              <li>Review Order</li>
              <li>Payment</li>
              <li>Complete Order</li>
            </ul>
          </div>
        </div>

        <div className="flex formDiv">
          <div className="headerdiv">
            <Link to="/Dashboard/Billing">
              <div className="logoHeader">
                <div className="logoText">
                  <h4>John Doe</h4>
                  <p>
                    Meter: #<span>00000000000000</span>
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/Dashboard/Billing">
              <div className="logoside">
                <div className="clientname">
                  <h4>Voltara</h4>
                  <p>Energy Solutions</p>
                </div>

                <div className="clientlogo">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </Link>
          </div>

          <div>
            <BulletChart />
          </div>

          <form action="" className="grid form">
            <div className="debitReceipt">
              <div className="receiptHeading">
                <div className="totalOutstanding">
                  <h4>Total Outstanding</h4>
                  <h2>&#8358; 000.00</h2>
                </div>
              </div>

              <div className="receiptTable">
                <div className="receiptTableBody">
                  <div className="leftMid">
                    <h4>Energy Charges</h4>
                    <h4>Owed</h4>
                  </div>
                  <div className="rightAmount">
                    <h4>Amount</h4>
                  </div>
                </div>

                <div className="receiptTableBody">
                  <div className="leftMid">
                    <p>Late Fees</p>
                    <p>&#8358; 000.00</p>
                  </div>
                  <div className="rightAmount">
                    <div className="tableText">
                      <div className="flex inputDiv">
                        <TbCurrencyNaira className="icon" />
                        <input
                          type="number"
                          id="tableField"
                          placeholder="&#8358; 000.00"
                          aria-placeholder="amount"
                          required
                        />
                        <label htmlFor="expires">Amount</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="receiptTableBody">
                  <div className="leftMid">
                    <p>Others</p>
                    <p>&#8358; 000.00</p>
                  </div>
                  <div className="rightAmount">
                    <div className="tableText">
                      <div className="flex inputDiv">
                        <TbCurrencyNaira className="icon" />
                        <input
                          type="number"
                          id="tableField"
                          placeholder="&#8358; 000.00"
                          aria-placeholder="amount"
                          required
                        />
                        <label htmlFor="expires">Amount</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="allocateBtn">
                <div className="allocateBar"></div>
                <div type="button" className="btn">
                  <button></button>
                  <span>
                    <p>Auto Allocate</p>
                    <TbArrowAutofitContent className="icon" />
                  </span>
                </div>
                <div className="allocateBar"></div>
              </div>

              <div className="receiptHeading">
                <div className="totalOutstanding">
                  <h4>Total Payment</h4>
                </div>
              </div>

              <div className="receiptTable">
                <div className="receiptTableBody">
                  <div className="leftMid">
                    <div className="lowerDiv">
                      <p>&#8358; 000.00</p>
                      <p>Remaining Balance</p>
                    </div>

                    <div className="lowerDiv">
                      <p>&#8358; 000.00</p>
                      <p>&#8358; 000.00</p>
                    </div>
                  </div>
                  <div className="rightAmount">
                    <div className="tableText">
                      <div className="flex inputDiv">
                        <TbCurrencyNaira className="icon" />
                        <input
                          type="number"
                          id="tableField"
                          placeholder="&#8358; 000.00"
                          aria-placeholder="amount"
                          required
                        />
                        <label htmlFor="expires">Amount</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to="/ElectricBill">
                <div type="submit" className="progressBtn">
                  <button></button>
                  <span>Proceed to Payment</span>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DebitSummary;
