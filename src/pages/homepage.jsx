import React, { useContext } from 'react'
import { AuthContext } from "../onboarding/authContext.jsx";
import HeroCarousel from '../components/carousel';
import HeroPage from '../components/hero';
import Collections from '../components/collection';
import {Slides} from '../components/data.js'
// import Slider from 'react-slick';

const Home = () => {
  const { products } = useContext(AuthContext);

  // console.log("products",products)
  return (
    <>
     <HeroPage />
     <Collections name="Our Latest Collection" items={products}/>
     <Collections name="Men's Collection" items={products}/>
     <Collections name="Women's Collection" items={products}/>
     <HeroCarousel slides={Slides} />
     <Collections name="Trending" items={products}/>
     {/* <MenCollection prop={"WOMEN'S COLLECTION"}/> */}
     
    </>
  )
}

export default Home