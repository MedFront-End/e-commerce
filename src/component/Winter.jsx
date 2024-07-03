import React from "react";
import man from '../assets/man 2.png';
import { HiCheckCircle } from "react-icons/hi";

export default function Winter() {
  return (
    <div className='w-full px-5 md:px-20 flex flex-col lg:flex-row gap-10 lg:gap-20 pb-20 lg:pb-40 pt-12 lg:pt-24'>

      <div className='w-full lg:w-2/3 bg-orange-400 rounded-sm shadow-2xl flex justify-center'>
        <img className='w-3/4 lg:w-full' src={man} alt="" />
      </div>

      <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start'>
        <div className='text-center lg:text-left'>
          <h2 className='font-bold text-2xl md:text-4xl pb-4 lg:pb-6'>Winter Sale Up to 50% Off</h2>
          <p className='text-gray-600 text-sm md:text-base pb-6 lg:pb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis
            beatae totam repellat corrupti fugit.
          </p>
        </div>

        <div className='pl-0 lg:pl-6'>
          <div className='flex items-center pb-4 lg:pb-6 gap-2 lg:gap-4'>
            <HiCheckCircle className='text-xl lg:text-2xl text-green-300' />
            <p className='text-sm md:text-base'>Quality Products</p>
          </div>
          <div className='flex items-center pb-4 lg:pb-6 gap-2 lg:gap-4'>
            <HiCheckCircle className='text-xl lg:text-2xl text-green-300' />
            <p className='text-sm md:text-base'>Fast Delivery</p>
          </div>
          <div className='flex items-center pb-4 lg:pb-6 gap-2 lg:gap-4'>
            <HiCheckCircle className='text-xl lg:text-2xl text-green-300' />
            <p className='text-sm md:text-base'>Easy Payment Method</p>
          </div>
          <div className='flex items-center pb-4 lg:pb-6 gap-2 lg:gap-4'>
            <HiCheckCircle className='text-xl lg:text-2xl text-green-300' />
            <p className='text-sm md:text-base'>Get Offers</p>
          </div>
        </div>
      </div>

    </div>
  );
}
