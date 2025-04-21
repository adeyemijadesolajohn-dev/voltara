import "./Content.scss";
import ContentTop from "../../DashboardComponents/ContentTop/ContentTop";
import ContentMain from "../../DashboardComponents/ContentMain/ContentMain";

const Content = () => {
  return (
    <div className="mainContent">
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
