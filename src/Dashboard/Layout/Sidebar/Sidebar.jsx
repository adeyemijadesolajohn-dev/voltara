import "./Sidebar.scss";
import { navigationLinks } from "../../../Data";
import { navigationLowerLinks } from "../../../Data";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../Context/sidebarContext";
import logo from "../../../LoginAssets/voltara placeholder logo.png";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebarChange");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="sidebarFixed">
        <div className="userInfo">
          <div className="logoSide">
            <div className="clientLogo">
              <img src={logo} alt="logo" />
            </div>

            <div className="clientName">
              <h4>Voltara</h4>
              <p>Energy Solutions</p>
            </div>
          </div>

          <span className="infoName">
            <h4>John Doe</h4>
            <p>
              Meter: #<span>00000000000000</span>
            </p>
          </span>
        </div>

        <nav className="navigation">
          <ul className="navList">
            {navigationLinks.map((navigationLink) => (
              <li className="navItem" key={navigationLink.id}>
                <a
                  href="#"
                  className={`navLink ${
                    navigationLink.id === activeLinkIdx ? "active" : null
                  }`}
                >
                  <img
                    src={navigationLink.image}
                    className="navLinkIcon"
                    alt={navigationLink.title}
                  />
                  <span className="navLinkText">{navigationLink.title}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="navLowerList">
            {navigationLowerLinks.map((navigationLowerLink) => (
              <li className="navItem" key={navigationLowerLink.id}>
                <a
                  href="#"
                  className={`navLink ${
                    navigationLowerLink.id === activeLinkIdx ? "active" : null
                  }`}
                >
                  <img
                    src={navigationLowerLink.image}
                    className="navLinkIcon"
                    alt={navigationLowerLink.title}
                  />
                  <span className="navLinkText">
                    {navigationLowerLink.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
