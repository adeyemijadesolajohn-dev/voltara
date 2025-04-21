import "./ContentMain.scss";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Usage from "../Usage/Usage";
import DateRangeHolder from "./DateRangeHolder";

const ContentMain = () => {
  return (
    <div className="mainContentHolder">
      <div className="contentGridOne">
        <Cards />
        <Usage />
        <Report />
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

      <div className="contentGridTwo">
        <Transactions />
      </div>
    </div>
  );
};

export default ContentMain;
