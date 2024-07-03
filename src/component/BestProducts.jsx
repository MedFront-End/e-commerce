import React from "react";
import shirt1 from '../assets/shirt.png';
import shirt2 from '../assets/shirt2.png';

import { FaStar } from "react-icons/fa";
import Button from "./Button";

export default function BestProducts() {
  return (
    <div className="pt-20 pb-20 px-5 md:px-20">

      {/* title */}
      <div className="text-center pb-10">
        <span className="text-orange-400 block pb-3">
          Top Rated Products for you
        </span>
        <h1 className="font-bold text-2xl md:text-4xl pb-2">Best Products</h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laudantium.
        </p>
      </div>
      {/* title */}

      {/* Boxes */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'>
        <div className='box bg-gray-100 p-4 rounded-3xl shadow-xl w-full sm:w-3/4 lg:w-2/3 text-center hover:bg-gray-300 transition-transform transform hover:scale-105'>
          <div className="overflow-hidden rounded-md mb-6">
            <img className='transition-transform transform hover:scale-110 w-full' src={shirt1} alt="" />
          </div>
          <div className='flex gap-2 pb-4 justify-center'>
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
          </div>
          <h2 className='font-semibold text-lg'>Shirt</h2>
          <p className='text-sm text-gray-600 pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum incidunt ipsa.</p>
          <Button />
        </div>

        <div className='box bg-gray-100 p-4 rounded-3xl shadow-xl w-full sm:w-3/4 lg:w-2/3 text-center hover:bg-gray-300 transition-transform transform hover:scale-105'>
          <div className="overflow-hidden rounded-md mb-6">
            <img className='transition-transform transform hover:scale-110 w-full' src={shirt2} alt="" />
          </div>
          <div className='flex gap-2 pb-4 justify-center'>
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
          </div>
          <h2 className='font-semibold text-lg'>Shirt</h2>
          <p className='text-sm text-gray-600 pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum incidunt ipsa.</p>
          <Button />
        </div>

        <div className='box bg-gray-100 p-4 rounded-3xl shadow-xl w-full sm:w-3/4 lg:w-2/3 text-center hover:bg-gray-300 transition-transform transform hover:scale-105'>
          <div className="overflow-hidden rounded-md mb-6">
            <img className='transition-transform transform hover:scale-110 w-full' src={shirt1} alt="" />
          </div>
          <div className='flex gap-2 pb-4 justify-center'>
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
            <FaStar className='text-yellow-300 text-xl' />
          </div>
          <h2 className='font-semibold text-lg'>Shirt</h2>
          <p className='text-sm text-gray-600 pb-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum incidunt ipsa.</p>
          <Button />
        </div>
      </div>
      {/* Boxes */}
    </div>
  );
}

