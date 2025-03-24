import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([1, 2]); // Example review data

  return (
    <div className='w-full flex items-center justify-center bg-[#f7f8fa] py-[100px]'>
      <div className='w-[90%] md:w-[80%] flex flex-col md:flex-row gap-8'>
        {/* Left Section - Header */}
        <div className='w-full md:w-[30%] flex flex-col gap-4'>
          <p className='text-xl font-semibold'>What customers say about us</p>
          <p className='text-sm text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae 
            commodi amet, animi quas eligendi officia suscipit ut voluptate possimus nobis.
          </p>
        </div>

        {/* Right Section - Reviews */}
        <div className='w-full md:w-[70%]'>
          <div className='flex flex-col md:flex-row items-center justify-end gap-6'>
            {reviews.map((review, index) => (
              <div key={index} className='w-full md:w-[45%] p-6 bg-white rounded-lg shadow-sm flex flex-col gap-4'>
                {/* Star Rating */}
                <div className='flex items-center justify-end gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className='text-orange-400' />
                  ))}
                </div>

                {/* Review Text */}
                <p className='text-sm text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium hic perspiciatis 
                  ducimus aliquam quo, debitis vero explicabo at cupiditate repudiandae ratione quia dolor 
                  dolorum tenetur similique sed! Sequi, expedita commodi.
                </p>

                {/* Reviewer Info */}
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden'>
                    <img
                      className='w-10 h-10 object-cover rounded-full'
                      src="./model.jpg"
                      alt="Reviewer"
                    />
                  </div>
                  <div>
                    <p className='text-sm font-medium'>John Jones</p>
                    <p className='text-xs text-gray-500'>Creative Director</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className='w-full flex items-center justify-center gap-2 mt-6'>
            <FaRegDotCircle className='text-gray-400' />
            <GoDotFill className='text-blue-500' />
            <GoDotFill className='text-blue-500' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;