import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../onboarding/authContext.jsx";
// import HeroCarousel from '../components/carousel';
import HeroPage from '../components/hero';
import Collections from '../components/collection';
// import {Slides} from '../components/data.js'
import IdealService from '../components/idealService.jsx';
import FeaturedProducts from '../components/featuredProduct.jsx';
import SomeCat from '../components/maincat.jsx';
import CustomerReview from '../components/review.jsx';
import Discover from '../components/discover.jsx';
import Categorychoose from '../components/category.jsx';
// import Slider from 'react-slick';

const Home = () => {
  const { products, womenCat, menCat } = useContext(AuthContext);

  return (
    <div >
     <HeroPage />
     <IdealService />
     <Collections name="Latest Arivals" items={products}/>
     <Discover />
     <FeaturedProducts />
     <Collections name="Popular Products" items={products}/>
     <SomeCat />
     <Categorychoose />
     <CustomerReview />
     
    </div>
  )
}

export default Home