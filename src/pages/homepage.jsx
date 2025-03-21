import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../onboarding/authContext.jsx";
import HeroCarousel from '../components/carousel';
import HeroPage from '../components/hero';
import Collections from '../components/collection';
import {Slides} from '../components/data.js'
// import Slider from 'react-slick';

const Home = () => {
  const { products, womenCat, menCat, getAllProducts } = useContext(AuthContext);

  return (
    <div style={{ backgroundImage: "url('./city.jpg')" }}>
     <HeroPage />
     <Collections name="Our Latest Collection" items={products}/>
     <Collections name="Trending" items={products}/>
     <HeroCarousel slides={Slides} />
     <Collections name="Men's Collection" items={menCat}/>
     <Collections name="Women's Collection" items={womenCat}/>
     <HeroCarousel slides={Slides} />
     
    </div>
  )
}

export default Home