import "./BillPay.scss";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavbarBillPay from "../../Components/Navbar/NavbarBillPay";
import Widget from "../../Components/Widgets/WidgetBillPay";
import DateRangeHolder from "../../Components/DateRangerHolder/DateRangeHolder";
import AccountHistoryTable from "../../Components/AccountHistoryTable/HistoryTable";

const BillPay = () => {
  return (
    <div className="home">
      <div className="homeTitle">
        <div className="homeLogo">
          <div className="homeLogoImg">
            <img src={logo} alt="logo" />
          </div>

          <div className="homeLogoName">
            <h4>Voltara</h4>
            <p>Energy Solutions</p>
          </div>
        </div>
      </div>
      <div className="billContent">
        <Sidebar />
        <div className="billContainer">
          <NavbarBillPay />

          <div className="billWidgets">
            <Widget type="name" />
            <Widget type="account" />
            <Widget type="currentBalance" />
          </div>

          <div className="midContent">
            <div className="midContentHolder">
              <div className="midContentHeader gridCommon">
                <h3 className="midContentTitle">Account History</h3>
              </div>

              <div className="midContentHeader gridCommon">
                <DateRangeHolder />
              </div>
            </div>
          </div>
          <div className="billTable">
            <AccountHistoryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPay;
