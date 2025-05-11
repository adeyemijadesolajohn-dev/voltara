import "./Meter.scss";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavbarMeter from "../../Components/Navbar/NavbarMeter";
import Widget from "../../Components/Widgets/WidgetMeter";
import MeterMapHolder from "../../Components/Map/Map";

const Meter = () => {
  return (
    <div className="meter">
      <div className="meterTitle">
        <div className="meterLogo">
          <div className="meterLogoImg">
            <img src={logo} alt="logo" />
          </div>

          <div className="meterLogoName">
            <h4>Voltara</h4>
            <p>Energy Solutions</p>
          </div>
        </div>
      </div>
      <div className="meterContent">
        <Sidebar />
        <div className="meterContainer">
          <NavbarMeter />

          <div className="meterWidgets">
            <Widget type="status" />
            <Widget type="active" />
            <Widget type="inactive" />
            <Widget type="pending" />
          </div>

          {/* <div className="meterMapHolder"> */}
          <MeterMapHolder />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Meter;
