import React from 'react';

const Discover = () => {
  return (
    <div className='w-full bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <div className='bg-[#ecf5f4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6 flex flex-col md:flex-row items-center justify-between h-full'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-sm text-gray-600'>Get 40% off</p>
              <p className='text-xl font-semibold text-gray-900'>Man's Latest Collections</p>
              <button className='text-sm text-blue-600 hover:underline'>Shop Now</button>
            </div>
            <div className='flex-1 flex justify-center'>
              <img className='h-48 object-cover' src="malefash.jpeg" alt="Male Fashion" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-[#ecf5f4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6 flex flex-col items-center justify-center h-full'>
            <div className='flex justify-center'>
              <img className='h-48 object-cover' src="shoe.jpeg" alt="Shoes" />
            </div>
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>New Arrival</p>
              <p className='text-xl font-semibold text-gray-900'>Exclusive Shoes Collection</p>
              <button className='text-sm text-blue-600 hover:underline'>Explore Now</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='bg-[#ecf5f4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6 flex flex-col items-center justify-center h-full'>
            <div className='flex justify-center'>
              <img className='h-48 object-cover' src="couple.jpeg" alt="Couple Fashion" />
            </div>
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>Couple Fashion</p>
              <p className='text-xl font-semibold text-gray-900'>Best Collection for Couples</p>
              <button className='text-sm text-blue-600 hover:underline'>Explore Now</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='bg-[#ecf5f4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6 flex flex-col md:flex-row items-center justify-between h-full'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-sm text-gray-600'>Get 40% off</p>
              <p className='text-xl font-semibold text-gray-900'>Latest Sunglass</p>
              <button className='text-sm text-blue-600 hover:underline'>Shop Now</button>
            </div>
            <div className='flex-1 flex justify-center'>
              <img className='h-48 object-cover' src="sunglass.jpeg" alt="Sunglasses" />
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className='bg-[#ecf5f4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6 flex flex-col md:flex-row items-center justify-between h-full'>
            <div className='flex-1 flex flex-col gap-3'>
              <p className='text-sm text-gray-600'>Be Stylish</p>
              <p className='text-xl font-semibold text-gray-900'>Girl's Latest Fashion</p>
              <button className='text-sm text-blue-600 hover:underline'>Shop Now</button>
            </div>
            <div className='flex-1 flex justify-center'>
              <img className='h-48 object-cover' src="women.jpeg" alt="Women's Fashion" />
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className='bg-[#ecf5f4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div className='p-6 flex flex-col items-center justify-center h-full'>
            <div className='flex justify-center'>
              <img className='h-48 object-cover' src="bag.jpeg" alt="Bags" />
            </div>
            <div className='mt-6 text-center'>
              <p className='text-sm text-gray-600'>New in 2025</p>
              <p className='text-xl font-semibold text-gray-900'>Discover New Bag Collection</p>
              <button className='text-sm text-blue-600 hover:underline'>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;