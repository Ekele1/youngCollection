import React from 'react'
import HeroCarousel from '../components/carousel';
import HeroPage from '../components/hero';
import Collections from '../components/collection';
import {Products,Slides} from '../components/data.js'
// import Slider from 'react-slick';

const Home = () => {

  return (
    <>
     <HeroPage />
     <Collections name="Our Latest Collection" items={Products}/>
     <Collections name="Men's Collection" items={Products}/>
     <Collections name="Women's Collection" items={Products}/>
     <HeroCarousel slides={Slides} />
     <Collections name="Trending" items={Products}/>
     {/* <MenCollection prop={"WOMEN'S COLLECTION"}/> */}
     
    </>
  )
}

export default Home