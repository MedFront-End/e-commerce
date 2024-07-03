import React from "react";
import Slider from "react-slick";
import Button from "./Button";
import img1 from "../assets/man 2.png";
import img2 from "../assets/kid.png";
import img3 from "../assets/sale.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.css';  // Import custom CSS for additional styling

export default function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // 1s transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, // Disable arrows for a cleaner look
  };

  return (
    <div className="header-container bg-gray-100">
      <Slider {...settings}>
        <div className="slider-item">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 className="title">
                30% off on all Men's Wear
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
                voluptatum numquam.
              </p>
              <Button />
            </div>
            <div className="image-content">
              <img className="slider-image" src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="content-wrapper">
            <div className="text-content mb-32">
              <h1 className="title">
                Up to 60% off on all Kid's Wear
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
                voluptatum.
              </p>
              <Button />
            </div>
            <div className="image-content ">
              <img className="slider-image w-2/3" src={img2} alt="" />
            </div> 
          </div>
        </div>
        <div className="slider-item">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 className="title">
                70% off on all products sale
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
                voluptatum numquam.
              </p>
              <Button />
            </div>
            <div className="image-content">
              <img className="slider-image" src={img3} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

