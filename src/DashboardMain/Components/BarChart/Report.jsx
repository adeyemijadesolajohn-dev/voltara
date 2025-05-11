import "./Report.scss";
import { RiBarChartBoxLine } from "react-icons/ri";
import { BsCalendarEvent } from "react-icons/bs";
import AreaBarChart from "./AreaBarChart/AreaBarChart";
import { SlOptionsVertical } from "react-icons/sl";

const Report = () => {
  return (
    <div className="barChartAnalytics">
      <div className="gridTitle">
        <div className="gridLeftHeading">
          <div className="usageIcon">
            <BsCalendarEvent className="donut" />
            <RiBarChartBoxLine className="bar" />
          </div>
          <h3 className="gridCTitleText">Weekly Overview</h3>
        </div>

        <div className="gridRightHeading">
          <span className="barDate">Apr 20 - Apr 27</span>

          <div className="optionIcon">
            <SlOptionsVertical />
          </div>
        </div>
      </div>

      <AreaBarChart />
    </div>
  );
};

export default Report;
