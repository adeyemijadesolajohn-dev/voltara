import "./Partner.scss";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavbarPartner from "../../Components/Navbar/NavbarPartner";
import Widget from "../../Components/Widgets/WidgetPartner";
import DateRangeHolder from "../../Components/DateRangerHolder/DateRangeHolder";
import PartnerManagement from "../../Components/PartnerManagement/HistoryTable";

const Partner = () => {
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
          <NavbarPartner />

          <div className="billWidgets">
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="revenue" />
          </div>

          <div className="midContent">
            <div className="midContentHolder">
              <div className="midContentHeader gridCommon">
                <h3 className="midContentTitle">History</h3>
              </div>

              <div className="midContentHeader gridCommon">
                <DateRangeHolder />
              </div>
            </div>
          </div>
          <div className="billTable">
            <PartnerManagement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
