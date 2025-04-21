import "./AreaBarChart.scss";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
import "../Report.scss";

const data = [
  {
    index: "A",
    day: "Sun",
    used: 4000,
    remnant: 2400,
    purchased: 6400,
  },
  {
    index: "B",
    day: "Mon",
    used: 3000,
    remnant: 1398,
    purchased: 4398,
  },
  {
    index: "C",
    day: "Tues",
    used: 2000,
    remnant: 9800,
    purchased: 11800,
  },
  {
    index: "D",
    day: "Wed",
    used: 2780,
    remnant: 3908,
    purchased: 6688,
  },
  {
    index: "E",
    day: "Thurs",
    used: 1890,
    remnant: 4800,
    purchased: 6690,
  },
  {
    index: "F",
    day: "Fri",
    used: 2390,
    remnant: 3800,
    purchased: 6190,
  },
  {
    index: "G",
    day: "Sat",
    used: 3490,
    remnant: 4300,
    purchased: 7790,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 7;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")[1]}
      </text>
    </g>
  );
};

const AreaBarChart = () => {
  const formatTooltipValue = (value) => {
    return `${value}kWh`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}kWh`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="barChart">
      <div className="barChartInfo">
        <h5 className="barChartTitle">Total Voltage</h5>
        <div className="chartInfoData">
          <div className="infoDataValue">50.4k kWh</div>
          <div className="infoDataText">
            <FaArrowUpLong className="infoDataArrow" />
            <p>5% than last month</p>
          </div>
        </div>
      </div>

      <div className="barChartWrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={555}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              padding={{ left: 0, right: 0 }}
              dataKey="day"
              tickCount={7}
              tickSize={0}
              axisLine={false}
              tick={{
                fill: "var(--primaryColor)",
                fontSize: "7px",
                fontWeight: "bold",
              }}
            />
            <YAxis
              padding={{ bottom: 0, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={5}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: "var(--primaryColor)",
                fontSize: "7px",
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={12}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="used"
              fill="#475be8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              minPointSize={5}
              background={{ fill: "#eee" }}
              barSize={20}
              radius={[0, 0, 12, 12]}
              stackId="a"
            >
              {/* <LabelList dataKey="day" content={renderCustomizedLabel} /> */}
            </Bar>
            <Bar
              dataKey="remnant"
              fill="green"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              minPointSize={10}
              //   background={{ fill: "#eee" }}
              barSize={20}
              radius={[12, 12, 0, 0]}
              stackId="a"
            >
              <LabelList dataKey="index" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
