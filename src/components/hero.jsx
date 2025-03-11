import React from 'react';
import { FaShoppingBag, FaUser } from 'react-icons/fa';

const HeroPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <iframe
      // src='./hoodies.mp4'
        src="https://www.youtube.com/embed/c1JKmJ8PQj4?autoplay=1&mute=1&loop=1&playlist=c1JKmJ8PQj4&controls=0&modestbranding=1&showinfo=0"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube Background"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Elegance Redefined</h1>
          <p className="text-xl mb-8">Discover Timeless Styles for Every Occasion</p>
          <button className="px-6 py-3 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;