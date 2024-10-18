import React from 'react'
// import Slider from 'react-slick';
const HerorPage = ({title, subtitle, image,bg,color}) => {
  return (
    // <div className=''>
        <div className='lg:w-[95%] w-full h-[300px] flex flex-col-reverse lg:flex-row lg:rounded-[30px]'>
          <div 
          style={{backgroundColor: `${bg}`}}
          className='lg:w-[40%] w-fullh-full  pl-5 pr-5 flex flex-col items-center justify-center backdrop-blur-md bg-opacity-30 lg:rounded-s-[30px]'>
              <h1 className='lg:text-[25px] w-[50%] lg:w-full font-bold'
              style={{color:color}}
              >{title}</h1>
              <p className='text-[20px]'
              style={{color: color}}
              >{subtitle}</p>
          </div>
          <div className='lg:w-[60%] w-fullh-full bg-white lg:rounded-e-[30px]'>
              <img 
              className='w-full h-full lg:object-cover object-contain lg:rounded-e-[30px]'
              src={image} alt="" />
          </div>
      </div>
    // </div>
  )
}

export default HerorPage