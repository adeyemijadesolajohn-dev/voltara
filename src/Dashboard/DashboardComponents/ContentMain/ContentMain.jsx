import { useState, useRef, useEffect } from "react";
import "./ContentMain.scss";
import Cards from "../Cards/Cards";
import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
import Usage from "../Usage/Usage";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";

const ContentMain = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleOutsideClick = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
            <div className="dateRangeHolder">
              <div
                ref={dateRangeRef}
                className={`dateRangeWrapper ${
                  showDatePicker ? "hide-date-range" : ""
                }`}
                onClick={handleInputClick}
              >
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  showMonthAndYearPickers={false}
                />
              </div>
            </div>
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
