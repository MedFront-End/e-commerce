import React from "react";
import orange from '../assets/orange.jpg';

export default function Email() {
  return (
    <div className='w-full relative flex justify-center items-center h-44'>
      <img className='w-full h-full object-cover' src={orange} alt="" />
      <div className='absolute flex flex-col items-center'>
        <h2 className='text-white text-lg md:text-2xl lg:text-3xl mb-4'>Get Notified About New Products</h2>
        <input 
          type="text" 
          placeholder='Enter your email' 
          className='p-2 rounded-md outline-none w-full max-w-2xl'
        />
      </div>
    </div>
  );
}
