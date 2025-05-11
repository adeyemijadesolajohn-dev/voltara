import "./Widget.scss";
import { FaUsersRays } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { MdAccountBalance } from "react-icons/md";
import { MockDataCustomer } from "../../../MockData";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "name":
      data = {
        title: "Welcome",
        response: "John Doe",
        isMoney: false,
        link: "See all users",
        icon: <FaUsersRays />,
      };
      break;
    case "account":
      data = {
        title: "Account ID",
        response: "#" + 1234567890,
        isMoney: true,
        link: "See all packages",
        icon: <MdAccountBalance />,
      };
      break;
    case "currentBalance":
      data = {
        title: "Current Balance",
        response: "₦ " + 50000,
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
