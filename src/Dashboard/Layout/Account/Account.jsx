import "./Account.scss";
import AccountTop from "../../DashboardComponents/AccountTop/AccountTop";
import AccountMain from "../../DashboardComponents/AccountMain/AccountMain";
import Sidebar from "../Sidebar/Sidebar";
import "../Content/Content.scss";

const Account = () => {
  return (
    <div className="mainContent">
      <Sidebar />
      <AccountTop />
      <AccountMain />
    </div>
  );
};

export default Account;
