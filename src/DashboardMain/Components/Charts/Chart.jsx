import "./Chart.scss";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaChartArea } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";


const data = [
  {
    day: "Sunday",
    uv: 4000,
    pv: 2400,
    total: 2400,
  },
  {
    day: "Monday",
    uv: 3000,
    pv: 1398,
    total: 2210,
  },
  {
    day: "Tuesday",
    uv: 2000,
    pv: 9800,
    total: 2290,
  },
  {
    day: "Wednesday",
    uv: 2780,
    pv: 3908,
    total: 2000,
  },
  {
    day: "Thursday",
    uv: 1890,
    pv: 4800,
    total: 2181,
  },
  {
    day: "Friday",
    uv: 2390,
    pv: 3800,
    total: 2500,
  },
  {
    day: "Saturday",
    uv: 3490,
    pv: 4300,
    total: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chartContainer">
      <div className="gridTitle">
        <div className="gridLeftHeading">
          <div className="usageIcon">
            <BsCalendarEvent className="donut" />
            <FaChartArea className="voltage" />
          </div>

          <h3 className="gridCTitleText">Daily Usage</h3>
        </div>

        <div className="gridRightHeading">
          <span className="barDate">Apr 20 - Apr 27</span>

          <div className="optionIcon">
            <SlOptionsVertical />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#003b6d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#003b6d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="day" stroke="#003b6d" />
          <YAxis stroke="#003b6d" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#003b6d"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
