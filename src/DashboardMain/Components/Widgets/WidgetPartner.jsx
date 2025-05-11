import "./Widget.scss";
import { FaUsersRays } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { BsFillLightningFill } from "react-icons/bs";
import { MockDataCustomer } from "../../../MockData";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "Users",
        response: 1256,
        isMoney: true,
        link: "See all users",
        icon: <FaUsersRays />,
      };
      break;
    case "orders":
      data = {
        title: "Orders",
        response: 26,
        isMoney: true,
        link: "See all orders",
        icon: <BsFillLightningFill />,
      };
      break;
    case "revenue":
      data = {
        title: "Revenue",
        response: "₦ " + 50000000,
        isMoney: true,
        link: "See Transactions",
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
