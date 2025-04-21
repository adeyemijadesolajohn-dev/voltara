import { customerSummary } from "../../../Data";
import { iconImgs } from "../../../LoginAssets/LoginAssets";
import "./Cards.scss";
import { MdOutlineSummarize } from "react-icons/md";
const Cards = () => {
  return (
    <div className="gridOneItem gridCommon gridC1">
      <div className="contentGridHeader">
        <div className="gridCTitleText">
          <img src={iconImgs.summary} alt="summary" />
          <h3>Customer Summary</h3>
        </div>

        <div
          type="button"
          role="button"
          tabIndex={0}
          aria-pressed="false"
          className="gridCTitleIcon"
        >
          <button></button>
          <span>
            <img src={iconImgs.edit} alt="edit" />
          </span>
        </div>
      </div>
      <div className="gridC1Content">
        {/* <div className="gridItems">
          {customerSummary.map((summary) => {
            <div className="gridItem" key={summary.id}>
              <div className="gridItemL">
                <div className="iconAvatar imgFitCover">
                  <img src={summary.icon} />
                </div>
                <p className="text">{summary.text}</p>
              </div>
              <div className="gridItemR">
                <p className="number">{summary.data}</p>
              </div>
            </div>;
          })}
        </div> */}

        <div className="gridItems">
          <div className="gridItemL">
            <div className="iconAvatar imgFitCover">
              <img src={iconImgs.clientProfile} />
            </div>
            <p className="text">Name:</p>
          </div>

          <div className="gridItemR">
            <p className="number">John Doe</p>
          </div>
        </div>

        <div className="gridItems">
          <div className="gridItemL">
            <div className="iconAvatar imgFitCover">
              <img src={iconImgs.customerType} />
            </div>
            <p className="text">Customer Type:</p>
          </div>

          <div className="gridItemR">
            <p className="number">Residential</p>
          </div>
        </div>

        <div className="gridItems">
          <div className="gridItemL">
            <div className="iconAvatar imgFitCover">
              <img src={iconImgs.occupantType} />
            </div>
            <p className="text">Occupant Type:</p>
          </div>

          <div className="gridItemR">
            <p className="number">Tenant</p>
          </div>
        </div>

        <div className="gridItems">
          <div className="gridItemL">
            <div className="iconAvatar imgFitCover">
              <img src={iconImgs.status} />
            </div>
            <p className="text">Status:</p>
          </div>

          <div className="gridItemR">
            <p className="number">Active</p>
          </div>
        </div>

        <div className="gridItems">
          <div className="gridItemL">
            <div className="iconAvatar imgFitCover">
              <img src={iconImgs.contactInfo} />
            </div>
            <p className="text">Contact Info:</p>
          </div>

          <div className="gridItemR">
            <p className="number">+234 901 234 5678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
