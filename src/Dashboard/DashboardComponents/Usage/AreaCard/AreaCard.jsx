import "./AreaCard.scss";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AreaCard = ({ colors, percentFillValue, cardInfo }) => {
  const filledValue = (percentFillValue / 100) * 360;
  const remainedValue = 360 - filledValue;

  const data = [
    { name: "Remained", value: remainedValue },
    { name: "Used", value: filledValue },
  ];

  const renderTooltipContent = (value) => {
    return `${(value / 360) * 100}%`;
  };

  return (
    <div className="areaCard">
      <div className="areaCardInfo">
        <h5 className="infoTitle">{cardInfo.title}</h5>

        <div className="infoValue">{cardInfo.value}</div>

        <p className="infoText">{cardInfo.text}</p>
      </div>

      <div className="areaCardChart">
        <PieChart width={135} height={135}>
          <Pie
            data={data}
            cx={50}
            cy={45}
            innerRadius={22}
            fill="#bdbdbd"
            paddingAngle={0}
            dataKey="value"
            startAngle={-270}
            endAngle={150}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Tooltip formatter={renderTooltipContent} />
        </PieChart>
      </div>
    </div>
  );
};

export default AreaCard;

AreaCard.propTypes = {
  colors: PropTypes.array.isRequired,
  percentFillValue: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
};
