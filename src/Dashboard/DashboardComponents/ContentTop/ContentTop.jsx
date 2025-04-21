import { useContext } from "react";
import "./ContentTop.scss";
import { SidebarContext } from "../../Context/sidebarContext";
import { iconImgs } from "../../../LoginAssets/LoginAssets";
import { IoIosArrowDown } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  const onKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter" || event.key === " ") {
      toggleSidebar();
    }
  };
  return (
    <div className="mainContentTop">
      <div className="contentTopLeft">
        <div
          type="button"
          role="button"
          tabIndex={0}
          aria-pressed="false"
          className="sidebarToggler"
          onKeyDown={onKeyDown}
          onClick={() => toggleSidebar()}
        >
          <button onClick={() => toggleSidebar()}></button>
          <span>
            <img className="topIcon" src={iconImgs.menu} alt="menu" />
          </span>
        </div>
        <div>
          <h3 className="contentTopTitle">Customer Dashboard</h3>
          <p className="contentTopSubTitle">/ Overview</p>
        </div>
      </div>

      <div className="contentTopMenu">
        <ul className="menuBar">
          <li>
            <a href="#">Overview</a>
            <div className="chevronDown">
              <IoIosArrowDown className="arrowDown" />
            </div>
          </li>
          <li>
            <a href="#">Customer Type</a>
            <div className="chevronDown">
              <IoIosArrowDown className="arrowDown" />
            </div>
          </li>
          <li>
            <a href="#">Occupant Type</a>
            <div className="chevronDown">
              <IoIosArrowDown className="arrowDown" />
            </div>
          </li>
          <li>
            <a href="#">Quick Actions</a>
            <div className="chevronDown">
              <IoIosArrowDown className="arrowDown" />
            </div>
          </li>
        </ul>
      </div>

      <div className="contentTopBtns">
        <div class="searchBtn">
          <div class="search">
            <input type="checkbox" id="trigger" class="search__checkbox" />

            <label class="search__label-init" for="trigger"></label>

            <label class="search__label-active" for="trigger"></label>

            <div class="search__border"></div>

            <div
              type="button"
              role="button"
              tabIndex={0}
              aria-pressed="false"
              className="searchIcon"
            >
              <span>
                <MdPersonSearch />
              </span>
            </div>

            <input type="text" class="search__input" placeholder="Search" />

            <div class="search__close"></div>
          </div>
        </div>

        <div
          type="button"
          role="button"
          tabIndex={0}
          aria-pressed="false"
          className="notificationBtn contentTopBtn"
        >
          <button></button>
          <span>
            <img className="topIcon" src={iconImgs.bell} alt="bell" />
            <span className="notificationBtnDot"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
