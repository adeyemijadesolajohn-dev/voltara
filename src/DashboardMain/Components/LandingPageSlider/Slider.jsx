import { useEffect, useState } from "react";
import "./Slider.scss";
import { iconImages } from "../../../LoginAssets/LoginAssets";
import {
  BiSolidLeftArrow as LeftArrow,
  BiSolidRightArrow as RightArrow,
} from "react-icons/bi";
import gsap from "gsap";

const image1 = iconImages.image1;
const image2 = iconImages.image2;
const image3 = iconImages.image3;
const image4 = iconImages.image4;
const image5 = iconImages.image5;
const image6 = iconImages.image6;
const image7 = iconImages.image7;
const image8 = iconImages.image8;
const image9 = iconImages.image9;
const image10 = iconImages.image10;
const image11 = iconImages.image11;
const image12 = iconImages.image12;
const image13 = iconImages.image13;
const image14 = iconImages.image14;
const image15 = iconImages.image15;
const image16 = iconImages.image16;
const image17 = iconImages.image17;
const image18 = iconImages.image18;
const image19 = iconImages.image19;
const image20 = iconImages.image20;
const image21 = iconImages.image21;

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

const Slider = () => {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [farRightImage, setFarRightImage] = useState(2);
  const [farLeftImage, setFarLeftImage] = useState(imageArray.length - 2);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);

  useEffect(() => {
    if (midImage == 0) {
      setLeftImage(imageArray.length - 1);
      setFarLeftImage(imageArray.length - 2);
      setFarRightImage(2);
      setRightImage(1);
    } else if (midImage == imageArray.length - 1) {
      setRightImage(0);
      setFarRightImage(1);
      setFarLeftImage(midImage - 2);
      setLeftImage(midImage - 1);
    } else {
      setFarRightImage(midImage + 2);
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
      setFarLeftImage(midImage - 2);
    }
  }, [midImage]);

  const Increment = () => {
    if (midImage == imageArray.length - 1) {
      setMidImage(0);
    } else {
      setMidImage(midImage + 1);
    }
  };

  const Decrement = () => {
    if (midImage == 0) {
      setMidImage(imageArray.length - 1);
    } else {
      setMidImage(midImage - 1);
    }
  };

  return (
    <div className="imageSlider">
      <div className="imageSliderContainer">
        <div className="imageSliderHolder">
          <img src={imageArray[farRightImage]} className="farRightImage" />
          <img src={imageArray[rightImage]} className="rightImage" />
          <img src={imageArray[midImage]} className="centerImage" />
          <img src={imageArray[leftImage]} className="leftImage" />
          <img src={imageArray[farLeftImage]} className="farLeftImage" />
        </div>
      </div>
      <div className="sliderButtons">
        <button className="leftButton" onClick={() => Decrement()}>
          <LeftArrow />
        </button>
        <button className="rightButton" onClick={() => Increment()}>
          <RightArrow />
        </button>
      </div>

      <div className="dotsPlace">
        {imageArray.map((_, index) => (
          <div
            className={`sliderDots ${
              index === midImage ? "active" : "passive"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
