import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HerorPage from './heropage';

const HeroCarousel = ({ slides }) => {
  return (
    <div className='mt-10 pb-10'>
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        autoPlay 
        infiniteLoop 
        interval={3000}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className='w-full dark:bg-[#111828] mt-10 flex items-center justify-center'>
            <HerorPage title={slide.title} subtitle={slide.subtitle} image={slide.image} bg={slide.bg} color={slide.color}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
