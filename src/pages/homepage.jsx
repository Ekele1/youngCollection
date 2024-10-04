import React from 'react'
import Header from '../components/header';
import Footercomp from '../components/footer';
import WomenCollection from '../components/women';
import AllCollection from '../components/allCat';
import MenCollection from '../components/men';
import DetailPage from '../components/detail';
import Cart from '../components/cartPage';
import StartOrderPage from '../components/startOrder';
import CheckoutPage from '../components/checkout';
import CategorySort from '../components/sortCategory';

const Home = () => {
  return (
    <>
    <Header />
    <div className='w-full h-screen mt-[110px] flex items-center justify-center bg-[url("./cloth.jpg")] bg-cover'>
        <div className='w-full lg:p-10 p-3 flex flex-col items-center backdrop-blur-sm lg:backdrop-blur-md'>
            <p className='text-[35px] lg:text-[50px] text-white font-bold'>
                Step into Trendsetting Fashion with Young Collection!
            </p>
            <p className='w-full lg:w-[70%] text-[25px] lg:text-[20px] font-semibold text-white'>
                At Young Collection, we pride ourselves on offering fashion crafted from the highest quality materials, ensuring every piece is as durable as it is stylish.
            </p>

            <button className='w-[80%] lg:w-[20%] rounded-[10px] mt-5 h-[50px] border-none text-white bg-blue-700'>
                Shop now
            </button>
        </div>
    </div>
    {/* <div>
        <CategorySort />
    </div> */}
    <div>
        <AllCollection />
    </div>
    <div>
        <WomenCollection />
    </div>
    <div>
        <MenCollection />
    </div>
    <div>
        <DetailPage />
    </div>
    <div>
        <Cart />
    </div>
    <div>
        <StartOrderPage />
    </div>
    <div>
        <CheckoutPage />
    </div>
    </>
  )
}

export default Home