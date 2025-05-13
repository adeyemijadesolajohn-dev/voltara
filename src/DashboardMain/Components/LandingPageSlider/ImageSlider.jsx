import "./ImageSlider.scss";
import { iconImages } from "../../../LoginAssets/LoginAssets";

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

const ImageSlider = () => {
  return (
    <div id="Carousel-slider">
      <section>
        <div className="Carousel-slider">
          {imageArray.map((image, index) => (
            <figure key={index}>
              <img src={image} alt="image" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;
