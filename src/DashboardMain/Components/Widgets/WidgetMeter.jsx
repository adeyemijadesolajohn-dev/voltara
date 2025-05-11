import "./Widget.scss";
import { MdElectricMeter } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { MdPending } from "react-icons/md";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "status":
      data = {
        title: (
          <span style={{ color: "white", fontSize: "22px" }}>
            <span style={{ color: "red", fontSize: "22px" }}>●</span>{" "}
            Disconnected
          </span>
        ),
        response: (
          <span style={{ color: "white", fontSize: "22px" }}>
            <span style={{ color: "yellowgreen", fontSize: "22px" }}>●</span>{" "}
            Connected
          </span>
        ),
        isMoney: false,
        link: "See all Meters",
        icon: <MdElectricMeter />,
      };
      break;
    case "active":
      data = {
        title: "Active Meters",
        response: (
          <span>
            <span
              style={{
                color: "yellowgreen",
                marginRight: "12px",
                fontSize: "22px",
              }}
            >
              <FaCircleCheck />
            </span>
            12456
          </span>
        ),
        isMoney: true,
        link: "See all Active Meters",
        icon: <MdElectricMeter style={{ color: "yellowgreen" }} />,
      };
      break;
    case "inactive":
      data = {
        title: "Inactive Meters",
        response: (
          <span>
            <span
              style={{
                color: "red",
                marginRight: "12px",
                fontSize: "22px",
              }}
            >
              <FaCircleXmark />
            </span>
            86
          </span>
        ),
        isMoney: true,
        link: "See all Inactive Meters",
        icon: <MdElectricMeter style={{ color: "red" }} />,
      };
      break;
    case "pending":
      data = {
        title: "Pending Installations",
        response: (
          <span>
            <span
              style={{
                color: "orange",
                marginRight: "12px",
                fontSize: "22px",
              }}
            >
              <MdPending />
            </span>
            112
          </span>
        ),
        isMoney: true,
        link: "See details",
        icon: <MdElectricMeter style={{ color: "orange" }} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widgetContainer">
      <div className="widgetTop">
        <span className="widgetTitle">{data.title}</span>
      </div>
      <div className="widgetDown">
        <span className="widgetResponse">
          {data.isMoney}
          {data.response}
        </span>
      </div>

      <a href="#" className="widgetBottom">
        <span className="widgetLink">{data.link}</span>
        <div className="widgetIconContainer">{data.icon}</div>
      </a>
    </div>
  );
};

export default Widget;
