import "./Home.scss";
import "../../../App.scss";
import logo from "../../../LoginAssets/voltara placeholder logo.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/NavbarCustomer";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Charts/Chart";
import DateRangeHolder from "../../Components/DateRangerHolder/DateRangeHolder";
import HistoryTable from "../../Components/HistoryTable/HistoryTable";
import Cards from "../../Components/Cards/Cards";
import Report from "../../Components/Report/Report";

const Home = () => {
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
      <div className="homeContent pageWrapper">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="homeGrid">
            <Cards />
            <Report />
          </div>

          <div className="homeCharts">
            <Chart />
            <Featured />
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
          <div className="homeTable">
            <HistoryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
