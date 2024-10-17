import React from 'react'
import HeroCarousel from '../components/carousel';
import HeroPage from '../components/hero';
import Collections from '../components/collection';
import MenCollectionHome from '../components/menHome';
// import Slider from 'react-slick';

const Home = () => {

  return (
    <>
     <HeroPage />
     <MenCollectionHome prop={"MEN'S COLLECTION"}/>
     {/* <MenCollection prop={"WOMEN'S COLLECTION"}/> */}
     <Collections prop={"WOMEN'S COLLECTION"}/>
    </>
  )
}

export default Home