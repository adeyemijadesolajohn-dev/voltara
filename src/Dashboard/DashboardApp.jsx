import "../App.scss";
import Content from "./Layout/Content/Content";
import Sidebar from "./Layout/Sidebar/Sidebar";
// import DashboardMain from "./DashboardMain";

const DashboardApp = () => {
  return (
    <>
      <div className="pageWrapper">
        <Sidebar />

        {/* <DashboardMain /> */}

        <Content />
      </div>
    </>
  );
};

export default DashboardApp;
