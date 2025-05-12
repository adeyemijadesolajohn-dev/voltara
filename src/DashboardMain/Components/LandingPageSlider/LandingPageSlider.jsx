import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./LandingPageSlider.scss";
import { iconImages } from "../../../LoginAssets/LoginAssets";

const slidesData = [
  {
    imgSrc: iconImages.image1,
    title: "Lorem: Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, arcu at sollicitudin pellentesque, mauris enim semper lectus, non ullamcorper velit arcu non velit. Donec eget felis sed neque gravida pulvinar. Nulla facilisi.",
    categories: ["Category 1", "Category 2"],
  },
  {
    imgSrc: iconImages.image2,
    title: "Lorem: Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, arcu at sollicitudin pellentesque, mauris enim semper lectus, non ullamcorper velit arcu non velit. Donec eget felis sed neque gravida pulvinar. Nulla facilisi.",
    categories: ["Category 1", "Category 2"],
  },
  {
    imgSrc: iconImages.image3,
    title: "Lorem: Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, arcu at sollicitudin pellentesque, mauris enim semper lectus, non ullamcorper velit arcu non velit. Donec eget felis sed neque gravida pulvinar. Nulla facilisi.",
    categories: ["Category 1", "Category 2"],
  },
  {
    imgSrc: iconImages.image4,
    title: "Lorem: Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, arcu at sollicitudin pellentesque, mauris enim semper lectus, non ullamcorper velit arcu non velit. Donec eget felis sed neque gravida pulvinar. Nulla facilisi.",
    categories: ["Category 1", "Category 2"],
  },
  {
    imgSrc: iconImages.image5,
    title: "Lorem: Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, arcu at sollicitudin pellentesque, mauris enim semper lectus, non ullamcorper velit arcu non velit. Donec eget felis sed neque gravida pulvinar. Nulla facilisi.",
    categories: ["Category 1", "Category 2"],
  },
];

export default function Slider() {
  const swiperWrappedRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <main>
      <div className="Container">
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {slidesData.map((slide, index) => {
            <SwiperSlide key={index}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className="title">
                <h1>{slide.title}</h1>
              </div>
              <div className="content">
                <div className="text-box">
                  <p>{slide.description}</p>
                </div>
                <div className="footer">
                  <div className="category">
                    {slide.categories.map((category, idx) => (
                      <span key={idx} style={{ "--i": idx + 1 }}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <button>
                    <span className="label">Read More...</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </main>
  );
}
