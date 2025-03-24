import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../onboarding/authContext.jsx";
import HeroCarousel from '../components/carousel';
import HeroPage from '../components/hero';
import Collections from '../components/collection';
import {Slides} from '../components/data.js'
import IdealService from '../components/idealService.jsx';
import FeaturedProducts from '../components/featuredProduct.jsx';
import SomeCat from '../components/maincat.jsx';
import CustomerReview from '../components/review.jsx';
import Discover from '../components/discover.jsx';
// import Slider from 'react-slick';

const Home = () => {
  const { products, womenCat, menCat, getAllProducts } = useContext(AuthContext);

  return (
    <div >
     <HeroPage />
     <IdealService />
     <FeaturedProducts />
     <Collections name="Our Latest Collection" items={products}/>
     <Discover />
     <Collections name="Trending" items={products}/>
     <SomeCat />
     {/* <HeroCarousel slides={Slides} /> */}
     {/* <Collections name="Men's Collection" items={menCat}/> */}
     {/* <Collections name="Women's Collection" items={womenCat}/> */}
     <CustomerReview />
     
    </div>
  )
}

export default Home