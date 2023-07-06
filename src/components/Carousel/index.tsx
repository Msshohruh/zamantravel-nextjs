"use client";
import React from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: 0,
        zIndex: 1000,
      }}
      onClick={onClick}
    >
      <GrNext className="w-[50px] h-[50px] slider-arrow" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: 0,
        zIndex: 1000,
      }}
      onClick={onClick}
    >
      <GrPrevious className="w-[50px] h-[50px] slider-arrow" />
    </div>
  );
}

function Carousel({ data, images }: any) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="carousel">
      <Slider {...settings} className="w-90 h-[80vh] ">
        {data.map(({ title, link }: any, ind: any) => {
          return (
            <div key={title}>
              <img
                className="w-full h-[80vh] object-cover brightness-75"
                src={images[ind]}
                alt=""
              />
              <div className="absolute w-full top-1/3 left-0 right-0">
                <div className="container text-center">
                  <h1 className="slider-title text-[#fff] text-5xl capitalize mb-3">
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
