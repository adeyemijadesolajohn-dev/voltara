import "./Sidebar.scss";
import placeholder from "../../../LoginAssets/placeholder.png";
import { FaUpload } from "react-icons/fa6";
import { useRef, useState } from "react";
import { event } from "jquery";
import { navigationLinks } from "../../../Data";
import { navigationLowerLinks } from "../../../Data";
import { useContext, useEffect } from "react";
import { SidebarContext } from "./SidebarContext";
import { iconIcon } from "../../../LoginAssets/LoginAssets";

const Sidebar = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]).name;
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });
            console.log(file);
            setImage(file);
            handleUploadButtonClick(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = () => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", image);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebarDown");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  const [selected, setSelected] = useState(0);

  return (
    <div className={`sideBarContainer ${sidebarClass}`}>
      <div className="sideBarContent">
        <div className="sideBarTop">
          <div className="clientLogoImg">
            {image ? (
              <img src={URL.createObjectURL(image)} id="clientLogoPhotoAfter" />
            ) : (
              <img src={placeholder} id="clientLogoPhotoBefore" />
            )}
            <input
              type="file"
              id="clientLogoFile"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label form="file" id="uploadBtn" onClick={handleImageClick}>
              <span form="file" onClick={handleUploadButtonClick}>
                <FaUpload className="uploadIcon" />
              </span>
            </label>
          </div>

          <div className="clientName"></div>
          <h2>Company Name</h2>
        </div>

        <hr />
        <hr />
        <hr />

        <div className="sideBarCenter">
          <a href="#" className="navTitle">
            <span className="navSpan">
              <iconIcon.overviewIcon className="navIcon" />
              <p>Overview</p>
            </span>
          </a>

          <hr />

          <nav className="navContainer">
            <ul className="navContent">
              {navigationLinks.map((navigationLink, index) => (
                <li
                  className={
                    selected === index ? "navObject active" : "navObject"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <a
                    href={navigationLink.link}
                    className={`navPath ${
                      navigationLink.id === activeLinkIdx ? "active" : null
                    }`}
                  >
                    <navigationLink.icon className="navIcon" />

                    <span className="navText">{navigationLink.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr />
        <hr />
        <hr />

        <div className="sideBarBottom">
          <ul className="navContent">
            {navigationLowerLinks.map((navigationLowerLink, index) => (
              <li
                className={
                  selected === index ? "navObject active" : "navObject"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <a
                  href="#"
                  className={`navPath ${
                    navigationLowerLink.id === activeLinkIdx ? "active" : null
                  }`}
                >
                  <navigationLowerLink.icon className="navIcon" />

                  <span className="navText">{navigationLowerLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
