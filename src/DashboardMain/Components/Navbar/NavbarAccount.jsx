import { useContext, useState } from "react";
import "./Navbar.scss";
import Model from "react-modal";
import { SidebarContext } from "../Sidebar/SidebarContext";
import { iconIcon } from "../../../LoginAssets/LoginAssets";
import { IoIosArrowDown } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";
import CreateAccount from "../CreateAccount/CreateAccount";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  const onKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter" || event.key === " ") {
      toggleSidebar();
    }
  };

  const [visible, setVisible] = useState(false);

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
            <iconIcon.menuIcon className="topIcon" />
          </span>
        </div>
        <div>
          <h3 className="contentTopTitle">Account Dashboard</h3>
          <p className="contentTopSubTitle">/ Overview</p>
        </div>
      </div>

      <div className="contentTopMenu">
        <ul className="menuBar">
          <li onClick={() => setVisible(true)}>
            <a>Create Account</a>
          </li>
          <Model
            className="modal"
            isOpen={visible}
            style={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              content: { width: "800px" },
            }}
          >
            <div className="formHeadingDiv">
              <div className="formHeading">
                <h1>Create Account</h1>
              </div>

              <div className="closeIcon" onClick={() => setVisible(false)}>
                <iconIcon.closeIcon />
              </div>
            </div>
            <CreateAccount />
          </Model>

          <li>
            <a href="#">Edit Account</a>
            <div className="chevronDown">
              <IoIosArrowDown className="arrowDown" />
            </div>
          </li>
          <li>
            <a href="#">Account Summary</a>
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
      </div>
    </div>
  );
};

export default Navbar;
