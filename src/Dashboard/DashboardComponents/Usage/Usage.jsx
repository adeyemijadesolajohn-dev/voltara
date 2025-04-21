import "./Usage.scss";
import { iconImgs } from "../../../LoginAssets/LoginAssets";
import AreaCard from "./AreaCard/AreaCard";

const Usage = () => {
  return (
    <div className="gridOneItem gridCommon gridC2">
      <div className="gridCTitle">
        <div className="gridC3LeftHeading">
          <div className="usageIcon">
            <img src={iconImgs.donutChart} alt="report" className="donut" />
            <img src={iconImgs.voltage} alt="report" className="voltage" />
          </div>

          <h3 className="gridCTitleText">Watt Usage</h3>
        </div>

        <p className="barDate">Apr 20 - Apr 27</p>
      </div>

      {/* <section className="contentAreaCards">
        <AreaCard
          colors={["#bdbdbd", "#003b6d"]}
          percentFillValue={80}
          cardInfo={{
            title: "Power Usage",
            value: "80%",
            text: "Last 24 hours",
            icon: iconImgs.powerUsage,
          }}
        />
      </section> */}

      <div className="gridC2Content">
        <div className="progressBar">
          <div className="percent">
            {/* <svg>
              <circle cx="105" cy="105" r="50"></circle>

              <circle
                cx="105"
                cy="105"
                r="50"
                style={{ "--percent": "50" }}
              ></circle>
            </svg> */}

            <section className="contentAreaCards">
              <AreaCard
                colors={["#bdbdbd", "#003b6d"]}
                percentFillValue={80}
                cardInfo={{
                  title: "Power Usage",
                  value: "80%",
                  text: "Last 24 hours",
                  icon: iconImgs.powerUsage,
                }}
              />
            </section>

            <div className="number">
              <h3>
                80<span>%</span>
              </h3>
            </div>
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

export default Usage;
