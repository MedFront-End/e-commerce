import React from "react";
import Slider from "react-slick";
import pro1 from "../assets/profil/1.jpg";
import pro2 from "../assets/profil/2.jpg";
import pro3 from "../assets/profil/3.jpg";
import pro4 from "../assets/profil/4.jpg";
import coma from "../assets/coma.png";

export default function Cus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 3, // Scroll three slides at a time
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="pt-32 px-4 md:px-20">
      {/* title */}
      <div className="text-center pb-10">
        <span className="text-orange-400 block pb-3">
          What our customers are saying
        </span>
        <h1 className="font-bold text-2xl md:text-4xl pb-2">Testimonials</h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          laudantium.
        </p>
      </div>
      {/* title */}

      {/* testimonials slider */}
      <Slider {...settings} className="container mx-auto">
        <div className="p-4">
          <TestimonialBox img={pro1} name="Sarah" />
        </div>

        <div className="p-4">
          <TestimonialBox img={pro2} name="Victor" />
        </div>

        <div className="p-4">
          <TestimonialBox img={pro3} name="Sacha" />
        </div>

        <div className="p-4">
          <TestimonialBox img={pro4} name="John" />
        </div>
      </Slider>
      {/* testimonials slider */}
    </div>
  );
}

// Component for each testimonial box
const TestimonialBox = ({ img, name }) => (
  <div className="bg-amber-200 p-6 rounded-md shadow-md flex flex-col items-center text-center">
    <div className="flex justify-center pb-4">
      <img className="rounded-full w-20 h-20" src={img} alt="Profile" />
    </div>
    <div className="relative">
      <img className="absolute top-0 right-0 w-6 h-6" src={coma} alt="Coma" />
      <p className="text-sm md:text-base py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        temporibus consequuntur voluptas recusandae.
      </p>
    </div>
    <span className="block font-bold">{name}</span>
  </div>
);
