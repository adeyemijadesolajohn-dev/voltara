import "./LineChart.scss";
import { BsCalendarEvent } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { RiLineChartFill } from "react-icons/ri";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "September",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "October",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "November",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "December",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={7}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const LineChartAnalytics = () => {
  return (
    <div className="lineChartContainer">
      <div className="gridTitle">
        <div className="gridLeftHeading">
          <div className="usageIcon">
            <BsCalendarEvent className="donut" />
            <RiLineChartFill className="bar" />
          </div>

          <h3 className="gridCTitleText">Payment Trend</h3>
        </div>

        <div className="gridRightHeading">
          <span className="barDate">Apr 20 - Apr 27</span>

          <div className="optionIcon">
            <SlOptionsVertical />
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={55} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartAnalytics;
