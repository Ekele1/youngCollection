import React from 'react'
import HeroCarousel from '../components/carousel';
// import Slider from 'react-slick';

const HeroPage = () => {
  const slides = [
    {
      title: 'Up to 10% discount if you pay online',
      subtitle: 'Save big as a first-time buyer',
      image: 'https://media.istockphoto.com/id/1369227756/photo/giggling-their-way-through-the-mall.webp?a=1&b=1&s=612x612&w=0&k=20&c=tUBJLeqoHjDWm2PZluKAzoMGbF3dY_Y02G9B0MUEVFQ=',
      bg: '#FFD09B',
      color: '#A66E38'
    },
    {
      title: 'Popular Collection',
      subtitle: 'Discover our latest collection',
      image: 'https://media.istockphoto.com/id/1179046996/photo/smiling-woman-at-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F-EpNLzSfCDfDVO-FeSpGuzMQntyNr-gvZ1gImbd1c=',
      bg: '#006BFF',
      color: '#BCF2F6'
    },
    {
      title: 'Customer Satisfaction',
      subtitle: 'We value your satisfaction',
      image: 'https://media.istockphoto.com/id/1502210696/photo/we-have-a-deal.webp?a=1&b=1&s=612x612&w=0&k=20&c=pLSOy0f912Y-nThnmx6Tj78T6dybwh6E-PmkaUyAcWk=',
      bg: '#72BF78',
      color: '#FEFF9F'
    },
  ];
  return (
    <>
     <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-full h-[500px] bg-gray-800 flex items-center justify-center bg-[url("./model.jpg")] bg-cover mb-10'>
          <div className='w-[95%] h-full flex flex-col justify-center'>
            <i className='text-[40px] text-white'>Every piece of</i>
            <i className='text-[45px] font-semibold text-white'>Fashion tells a story</i>
            <p className='text-[20px] text-[#FFAD60]'>Good fashion is timeless; it doesn't just follow trends, it sets them.</p>
          </div>
        </div>
        <HeroCarousel slides={slides} />
      </div>
    
    </>
  )
}

export default HeroPage