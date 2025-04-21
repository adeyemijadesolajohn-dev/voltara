import "./Report.scss";
import { iconImgs } from "../../../LoginAssets/LoginAssets";
import AreaBarChart from "./AreaBarChart/AreaBarChart";

const Report = () => {
  return (
    <div className="gridOneItem gridCommon gridC3">
      <div className="gridCTitle">
        <div className="gridC3LeftHeading">
          <img src={iconImgs.weeklyOverview} alt="report" />
          <h3 className="gridCTitleText">Weekly Overview</h3>
        </div>

        <p className="barDate">Apr 20 - Apr 27</p>
      </div>

      {/* <div className="gridC3Content"> */}
      <AreaBarChart />
      {/* </div> */}
    </div>
  );
};

export default Report;
