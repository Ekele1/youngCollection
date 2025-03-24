import React, { useState } from 'react';

const Categorychoose = () => {
  const [categories, setCategories] = useState([1, 2, 3, 4, 5,]);

  return (
    <div className='w-full flex items-center justify-center py-10 bg-gray-50'>
      <div className='w-full max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='mb-8 text-center'>
          <p className='text-2xl font-semibold text-gray-900'>Shop by Category</p>
        </div>

        {/* Category Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-4 cursor-pointer transform transition-transform duration-300 hover:scale-105'
            >
              {/* Image */}
              <div className='w-full overflow-hidden rounded-2xl shadow-lg'>
                <img
                  className='w-full h-48 object-cover'
                  src="./couple.jpeg"
                  alt={`Category ${category}`}
                />
              </div>

              {/* Category Details */}
              <div className='text-center'>
                <p className='text-lg font-medium text-gray-900'>Clothes</p>
                <p className='text-sm text-gray-500'>90 items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorychoose;