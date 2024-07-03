import React from "react";
import img1 from '../assets/products/f1.jpg';
import img2 from '../assets/products/f4.jpg';
import img3 from '../assets/products/f5.jpg';
import img4 from '../assets/products/f6.jpg';
import img5 from '../assets/products/n4.jpg';
import img6 from '../assets/products/n5.jpg';
import { FaStar } from "react-icons/fa";

export default function Products() {
    return (
        <div className='pt-20 pb-20 px-5 md:px-20'>
            {/* title */}
            <div className='text-center pb-10'>
                <span className='text-orange-400 block pb-3'>Top Selling Products for you</span>
                <h1 className='font-bold text-2xl md:text-4xl pb-2'>Products</h1>
                <p className='text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laudantium.
                </p>
            </div>
            {/* title */}

            {/* images */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                <div className='bg-gray-100 p-4 rounded-md'>
                    <img className='rounded-md pb-6 w-full' src={img1} alt="" />
                    <h2 className='font-semibold text-lg'>Shirt</h2>
                    <span>Yellow</span>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-300 text-xl' />
                        <span className='mt-1'>5</span>
                    </div>
                </div>

                <div className='bg-gray-100 p-4 rounded-md'>
                    <img className='rounded-md pb-6 w-full' src={img2} alt="" />
                    <h2 className='font-semibold text-lg'>Shirt</h2>
                    <span>White</span>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-300 text-xl' />
                        <span className='mt-1'>4.7</span>
                    </div>
                </div>

                <div className='bg-gray-100 p-4 rounded-md'>
                    <img className='rounded-md pb-6 w-full' src={img3} alt="" />
                    <h2 className='font-semibold text-lg'>Shirt</h2>
                    <span>Black</span>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-300 text-xl' />
                        <span className='mt-1'>4.8</span>
                    </div>
                </div>

                <div className='bg-gray-100 p-4 rounded-md'>
                    <img className='rounded-md pb-6 w-full' src={img4} alt="" />
                    <h2 className='font-semibold text-lg'>Shirt</h2>
                    <span>Orange/Blue</span>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-300 text-xl' />
                        <span className='mt-1'>5</span>
                    </div>
                </div>

              
                <div className='bg-gray-100 p-4 rounded-md'>
                    <img className='rounded-md pb-6 w-full' src={img6} alt="" />
                    <h2 className='font-semibold text-lg'>Shirt</h2>
                    <span>Blue</span>
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-300 text-xl' />
                        <span className='mt-1'>4.9</span>
                    </div>
                </div>
            </div>
            {/* images */}
            
            <div className='text-center pt-12'>
                <a className='p-2 px-8 rounded-3xl text-sm bg-orange-500 text-white' href="####">All Products</a>
            </div>
        </div>
    );
}
