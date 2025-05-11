import "./Widget.scss";
import { FaUsersRays } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { BsFillLightningFill } from "react-icons/bs";
import { MockDataCustomer } from "../../../MockData";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "serviceType":
      data = {
        title: "Service Type",
        response: "Prepaid",
        isMoney: false,
        link: "See all users",
        icon: <FaUsersRays />,
      };
      break;
    case "statusService":
      data = {
        title: "Status Service",
        response: 120 + " kWh",
        isMoney: false,
        link: "See all packages",
        icon: <BsFillLightningFill />,
      };
      break;
    case "tariffClass":
      data = {
        title: "Tariff Class",
        response: "Residential",
        isMoney: false,
        link: "See all users",
        icon: <FaUsersRays />,
      };
      break;
    case "currentBalance":
      data = {
        title: "Current Balance",
        response: 50000,
        isMoney: true,
        link: "See details",
        icon: <GiWallet />,
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
          {data.isMoney && "₦ "}
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
