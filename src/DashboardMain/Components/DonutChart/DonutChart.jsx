import "./DonutChart.scss";
import { iconIcon } from "../../../LoginAssets/LoginAssets";
import AreaCard from "./AreaCard";
import { SlOptionsVertical } from "react-icons/sl";

const DonutChart = () => {
  return (
    <div className="donutChart">
      <div className="gridTitle">
        <div className="gridLeftHeading">
          <div className="usageIcon">
            <iconIcon.donutChartIcon className="donut" />
            <iconIcon.voltageIcon className="voltage" />
          </div>

          <h3 className="gridCTitleText">Watt Usage</h3>
        </div>

        <div className="gridRightHeading">
          <span className="barDate">Apr 20 - Apr 27</span>

          <div className="optionIcon">
            <SlOptionsVertical />
          </div>
        </div>
      </div>

      <div className="donutContent">
        <div className="progressBar">
          <div className="percent">
            <section className="contentAreaCards">
              <AreaCard
                colors={["#bdbdbd", "#003b6d"]}
                percentFillValue={80}
                cardInfo={{
                  title: "Power Usage",
                  value: "80%",
                  text: "Last 24 hours",
                  icon: iconIcon.powerUsageIcon,
                }}
              />
            </section>
          </div>
        </div>
        <ul className="dataList">
          <li className="dataItem textSilverV1">
            <span className="dataItemText">Average</span>
            <span className="dataItemValue">50kWh</span>
          </li>

          <li className="dataItem textSilverV1">
            <span className="dataItemText">Today</span>
            <span className="dataItemValue">25kWh</span>
          </li>

          <li className="dataItem textSilverV1">
            <span className="dataItemText">Target</span>
            <span className="dataItemValue">22kWh</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DonutChart;
