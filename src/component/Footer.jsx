import React from "react";
import footerImage from "../assets/footer.jpg";
import logo from '../assets/logo.png';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <div className="relative pt-2">
      <img className="absolute inset-0 w-full h-full object-cover" src={footerImage} alt="Footer background" />

      <div className="relative z-10 mt-8 md:mt-12 lg:mt-20 flex flex-col items-center justify-center text-white">
        {/* Shopsy logo and description */}
        <div className="flex flex-col items-center mb-8">
          <img className="w-16 md:w-20 mr-2 mb-2 md:mb-0" src={logo} alt="Shopsy logo" />
          <div className="text-center">
            <h1 className="text-sm md:text-lg lg:text-xl font-bold">Shopsy</h1>
            <p className="text-xs md:text-sm">Lorem ipsum  adipisicing elit. Repudiandae ipsa harum beatae.</p>
          </div>
        </div>

        {/* Important links */}
        <div className="flex flex-wrap justify-center md:justify-start mb-8">
          <a className="mr-4 mb-2 text-xs md:text-sm text-white hover:text-orange-400" href="###">Home</a>
          <a className="mr-4 mb-2 text-xs md:text-sm text-white hover:text-orange-400" href="###">About</a>
          <a className="mr-4 mb-2 text-xs md:text-sm text-white hover:text-orange-400" href="###">Contact</a>
          <a className="text-xs md:text-sm text-white hover:text-orange-400" href="###">Blog</a>
        </div>

        {/* Social media icons */}
        <div className="flex mb-8">
          <a href="#"><AiFillInstagram className="text-lg md:text-xl mr-4" /></a>  
          <a href="#"><AiFillFacebook className="text-lg md:text-xl mr-4" /></a>  
          <a href="#"><AiFillLinkedin className="text-lg md:text-xl" /></a> 
        </div>

        {/* Location and phone number */}
        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="flex items-center mr-4 mb-2 md:mb-0">
            <RiMapPin2Line className="text-base md:text-lg mr-2" />
            <span className="text-xs md:text-sm">New York, 155</span>
          </div>
          <div className="flex items-center">
            <MdPhone className="text-base md:text-lg mr-2" />
            <span className="text-xs md:text-sm">+91 23525785488</span>
          </div>
        </div>
      </div>
    </div>
  );
}
