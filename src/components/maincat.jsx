import React from 'react';

const SomeCat = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#f7f8fa] py-10'>
      <div className='w-[90%] md:w-[80%] flex flex-col md:flex-row gap-6'>
        {/* Women's Collection Card */}
        <div className='w-full md:w-[50%] flex items-center justify-between rounded-lg bg-[#e3e3e5] p-6 relative overflow-hidden'>
          <div className='w-[50%] flex flex-col items-start gap-2'>
            <p className='text-sm text-gray-600'>Get 40% off</p>
            <p className='text-xl font-bold text-gray-900'>Women's New Collection</p>
            <button className='px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition duration-300'>
              Shop Now
            </button>
          </div>
          <img
            className='h-[250px] md:h-[300px] object-cover transform -translate-y-4'
            src="download.jpeg"
            alt="Women's New Collection"
          />
        </div>

        {/* Men's Fashion Card */}
        <div className='w-full md:w-[50%] flex flex-row-reverse lg:flex-row items-center justify-between rounded-lg bg-[#e3e3e5] p-6 relative overflow-hidden'>
          <div className='w-[50%] flex flex-col items-start gap-2'>
            <p className='text-sm text-gray-600'>Stay up to date</p>
            <p className='text-xl font-bold text-gray-900'>Men's Trendy Fashion</p>
            <button className='px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition duration-300'>
              Shop Now
            </button>
          </div>
          <img
            className='h-[250px] md:h-[300px] object-cover transform -translate-y-4'
            src="malefash.jpeg"
            alt="Men's Trendy Fashion"
          />
        </div>
      </div>
    </div>
  );
};

export default SomeCat;