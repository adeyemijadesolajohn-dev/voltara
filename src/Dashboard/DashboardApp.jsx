import "../App.scss";
import Content from "./Layout/Content/Content";
import Sidebar from "./Layout/Sidebar/Sidebar";

const DashboardApp = () => {
  return (
    <>
      <div className="pageWrapper">
        {/* <div className="sideBar"> */}
        <Sidebar />
        {/* </div> */}

        {/* <div className="contentWrapper"> */}
        <Content />
        {/* </div> */}
      </div>
    </>
  );
};

export default DashboardApp;
