import "./BulletChart.scss";

const data = [
  {
    id: 1,
    month: "April",
    Energy_Consumption: 55,
    Late_Fees: 35,
    Previous_Balance: 70,
    Total_Fees: 100,
  },
];

const BulletChart = () => {
  return (
    <div className="progressChart">
      <div className="progressChartInfo">
        <h5 className="progressChartTitle">Output Fees</h5>
      </div>

      <div className="progressChartList">
        {data?.map((progressbar) => {
          return (
            <div className="progressChartItem" key={progressbar.id}>
              <div className="barItemInfo">
                <p className="barItemInfoName">{progressbar.month}</p>

                <div className="barItemInfoLegend">
                  <div className="legendItem">
                    <div
                      className="legendColor"
                      style={{ backgroundColor: "green" }}
                    ></div>
                    <p>Late Fees</p>
                  </div>

                  <div className="legendItem">
                    <div
                      className="legendColor"
                      style={{ backgroundColor: "red" }}
                    ></div>
                    <p>Energy Consumption</p>
                  </div>

                  <div className="legendItem">
                    <div
                      className="legendColor"
                      style={{ backgroundColor: "yellow" }}
                    ></div>
                    <p>Previous Balance</p>
                  </div>
                </div>

                <p className="barItemInfoValue">85</p>
              </div>

              <div className="barItemFull">
                <div
                  className="barItemFilled"
                  style={{
                    width: `${progressbar.Energy_Consumption}%`,
                    backgroundColor: "red",
                    zIndex: 2,
                  }}
                ></div>
                <div
                  className="barItemFilled"
                  style={{
                    width: `${progressbar.Late_Fees}%`,
                    backgroundColor: "green",
                    zIndex: 3,
                  }}
                ></div>
                <div
                  className="barItemFilled"
                  style={{
                    width: `${progressbar.Previous_Balance}%`,
                    backgroundColor: "yellow",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BulletChart;
