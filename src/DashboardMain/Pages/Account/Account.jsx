import "./Account.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/NavbarAccount";
import Widget from "../../Components/Widgets/WidgetAccount";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import DateRangeHolder from "../../Components/DateRangerHolder/DateRangeHolder";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

const Account = () => {
  return (
    <div className="account">
      <div className="accountTitle">
        <div className="accountLogo">
          <div className="accountLogoImg">
            <img src={logo} alt="logo" />
          </div>

          <div className="accountLogoName">
            <h4>Voltara</h4>
            <p>Energy Solutions</p>
          </div>
        </div>
      </div>

      <div className="accountContent">
        <Sidebar />

        <div className="accountContainer">
          <Navbar />

          <div className="accountWidgets">
            <Widget type="serviceType" />
            <Widget type="statusService" />
            <Widget type="tariffClass" />
            <Widget type="currentBalance" />
          </div>

          <div className="midAccount">
            <div className="midAccountHolder">
              <div className="midAccountHeader gridCommon">
                <h3 className="midAccountTitle">
                  Daily Meter Recharge Expenditure
                </h3>
              </div>

              <div className="midAccountHeader gridCommon">
                <DateRangeHolder />
              </div>
            </div>
          </div>

          <div className="accountChart">
            <ProgressBar type="sunday" />
            <ProgressBar type="monday" />
            <ProgressBar type="tuesday" />
            <ProgressBar type="wednesday" />
            <ProgressBar type="thursday" />
            <ProgressBar type="friday" />
            <ProgressBar type="saturday" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
