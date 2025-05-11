import "./Analytics.scss";
import "../../../App.scss";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavbarAnalytics from "../../Components/Navbar/NavbarAnalytics";
import DonutChart from "../../Components/DonutChart/DonutChart";
import DateRangeHolder from "../../Components/DateRangerHolder/DateRangeHolder";
import BarChart from "../../Components/BarChart/Report";
import AnalyticsChart from "../../Components/AnalyticsCharts/Chart";
import LineChart from "../../Components/LineChart/LineChart";

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="analyticsTitle">
        <div className="analyticsLogo">
          <div className="analyticsLogoImg">
            <img src={logo} alt="logo" />
          </div>

          <div className="analyticsLogoName">
            <h4>Voltara</h4>
            <p>Energy Solutions</p>
          </div>
        </div>
      </div>
      <div className="analyticsContent pageWrapper">
        <Sidebar />
        <div className="analyticsContainer">
          <NavbarAnalytics />

          <div className="midContent">
            <div className="midContentHolder">
              <div className="midContentHeader "></div>

              <div className="midContentHeader gridCommon">
                <DateRangeHolder />
              </div>
            </div>
          </div>

          <div className="analyticsGrid">
            <DonutChart />
            <BarChart />
          </div>

          <div className="analyticsCharts">
            <AnalyticsChart />
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
