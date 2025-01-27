import React from 'react'
import HeroCarousel from '../components/carousel';
// import Slider from 'react-slick';

const HeroPage = () => {

  return (
    <>
     <div className='w-full'>
        <div className='w-full lg:static relative bg-gray-800 flex justify-around'>
          <div className='w-[100%] lg:w-[50%] absolute bottom-0 lg:static flex flex-col justify-center'>
            <i className='text-[40px] text-white'>Every piece of</i>
            <i className='text-[45px] font-semibold text-white'>Fashion tells a story</i>
            <p className='text-[20px] text-white'>Good fashion is timeless; it doesn't just follow trends, it sets them.</p>
          </div>
          <div className='w-[100%] lg:w-[40%] flex items-center justify-around'>
            <div className='hidden lg:flex'>
              <img src="https://i.pinimg.com/236x/ab/e2/b4/abe2b43a8c3726b633e9ef59c3a12dd1.jpg" alt="" />
            </div>
            <div className='w-[100%] lg:w-max'>
              <img className='object-cover w-full h-full' src="https://i.pinimg.com/236x/fb/2d/53/fb2d53c569df9d5266d65a94d7aa5478.jpg" alt="" />
            </div>
          </div>
        </div>
        
      </div>
    
    </>
  )
}

export default HeroPage