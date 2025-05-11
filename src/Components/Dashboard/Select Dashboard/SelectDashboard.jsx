import React from "react";
import "./SelectDashboard.scss";
import "../../../App.scss";
import loginBG from "../../../LoginAssets/Login placeholder BG.png";
import customer from "../../../LoginAssets/streamline_information-desk-customer.png";
import account from "../../../LoginAssets/ion_analytics-outline.png";
import billpay from "../../../LoginAssets/Frame.png";
import meter from "../../../LoginAssets/Vector.png";
import partner from "../../../LoginAssets/garden_customer-lists-fill-26.png";
import analytics from "../../../LoginAssets/carbon_analytics.png";
import { Link } from "react-router-dom";

const SelectDashboard = () => {
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
            <h3 className="header">Select your Dashboard</h3>
            <p className="subHeader">
              Choose the dashboard that suits your needs
            </p>
          </div>
          <div className="selectDashboardOptions">
            <Link to="/Dashboard">
              <div className="selectDashboardCard">
                <img src={customer} alt="customer" />
                <h3 className="selectDashboardCardHeader">Customer</h3>
              </div>
            </Link>

            <Link to="/Dashboard/Account">
              <div className="selectDashboardCard">
                <img src={account} alt="account" />
                <h3 className="selectDashboardCardHeader">Account</h3>
              </div>
            </Link>

            <div className="selectDashboardCard">
              <img src={billpay} alt="bill & payment" />
              <h3 className="selectDashboardCardHeader">Bill & Payment</h3>
            </div>

            <div className="selectDashboardCard">
              <img src={meter} alt="meter" />
              <h3 className="selectDashboardCardHeader">Meter</h3>
            </div>

            <div className="selectDashboardCard">
              <img src={partner} alt="partner" />
              <h3 className="selectDashboardCardHeader">Partner</h3>
            </div>

            <div className="selectDashboardCard">
              <img src={analytics} alt="analytics" />
              <h3 className="selectDashboardCardHeader">Analytics</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDashboard;
