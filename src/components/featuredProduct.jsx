import React from 'react';
import { FaNairaSign } from "react-icons/fa6";

const FeaturedProducts = () => {
  return (
    <div className='w-full flex items-center justify-center py-10 bg-[#f7f8fa]'>
      <div className='w-[90%] md:w-[80%] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-10'>
        {/* Left Section - Product Details */}
        <div className='w-full md:w-[50%] flex flex-col gap-4'>
          <p className='text-sm font-medium text-gray-600'>Featured Product</p>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Young Fashionable Jeans</h1>
          <p className='text-sm text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='text-sm text-gray-500'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Price Section */}
          <div className='flex items-center gap-4 text-blue-500'>
            <div className='flex items-center'>
              <FaNairaSign className='text-lg' />
              <p className='text-xl font-semibold'>9,000</p>
            </div>
            <div className='flex items-center line-through text-gray-400'>
              <FaNairaSign className='text-lg' />
              <p className='text-xl'>15,000</p>
            </div>
          </div>

          {/* Buy Now Button */}
          <button className='w-fit px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-300'>
            Buy Now
          </button>
        </div>

        {/* Product Image - Placed between Buy Now Button and Timer on Mobile */}
        <div className='w-full md:w-[50%] flex items-center justify-center order-1 md:order-2'>
          <div className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-[#ddebeb] rounded-full relative overflow-hidden shadow-lg'>
            <img
              className='absolute h-full w-full object-contain transform -translate-y-8'
              src="./sample.jpeg"
              alt="Young fashionable jeans"
            />
          </div>
        </div>

        {/* Timer Section - Placed below the Image on Mobile */}
        <div className='w-full md:w-[50%] flex flex-col gap-4 order-2 md:order-3'>
          <p className='text-sm text-gray-600'>Ends in</p>
          <div className='flex items-center gap-3'>
            {['2', '17', '15', '32'].map((time, index) => (
              <div
                key={index}
                className='h-10 w-10 bg-white rounded-full flex items-center justify-center text-sm font-semibold shadow-sm'
              >
                {time}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-7 text-xs text-gray-500'>
            <p>Days</p>
            <p>HRS</p>
            <p>MINS</p>
            <p>SECS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;