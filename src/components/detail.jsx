import React from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';

const DetailPage = () => {
    const otherPictures = [1,2,3,4,5,6,7]
  return (
    <div className='w-full flex bg-gray-200 justify-center  pt-2 pb-10'>
        <div className='w-[95%] lg:w-[70%]'>
            <div className='w-full h-[60px] flex items-center justify-center text-[25px] font-semibold'>Product Details</div>
            {/* <div className='w-full flex lg:flex-row bg-fuchsia-70 flex-col gap-2 justify-between '>
                <div className='lg:w-[70%] w-full h-[400px]  rounded-[10px] bg-white'>
                    <img className='w-full h-full rounded-[10px] object-contain' src="./model.jpg" alt="" />
                </div>
                <div className='lg:w-[20%] w-max lg:h-[400px] h-[110px] lg:pt-2 flex flex-row lg:flex-col gap-3 overflow-auto bg-[#f2f2f2] lg:rounded-[10px]'>
                    {
                        otherPictures.map((e,i)=>(
                        <div className='lg:w-[100%] w-[100px] lg:h-[150px] h-[100px]' key={i}>
                            <img className='w-full h-full object-contain' src="./cloth.jpg" alt="" />
                        </div>
                        ))
                    }
                </div>
            </div> */}
            <div className='lg:w-[70%] w-full'>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop interval={3000}>
                    {
                        otherPictures.map((e,i)=>(
                        <div className='w-[100%] lg:h-[400px] h-[500px] bg-gray-300' key={i}>
                            <img className='w-full h-full object-contain' src="./cloth.jpg" alt="" />
                        </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[50%] flex flex-col gap-2 mt-10'>
                    <div className='w-full h-[60px] flex items-center text-[30px] font-semibold'>
                        <p>Key Attributes</p>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-400 text-[20px] font-semibold'>Name</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[15px] font-semibold'>Quality men round neck</div>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-400 text-[20px] font-semibold'>Material</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>Linen</div>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-400 text-[20px] font-semibold'>Available colors</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>Blue, Green, White</div>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-400 text-[20px] font-semibold'>Available sizes</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>All</div>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-400 text-[20px] font-semibold'>Price</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                            <FaNairaSign />5000
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] mt-10'>
                    <div className='w-full h-[60px] flex items-center justify-center text-[30px] font-semibold'>
                        <p>place your order here</p>
                    </div>
                    <div className='w-ful pl-[50px]'>
                        <div className='w-full  flex border pb-5 border-b-gray-400'>
                            <div className='w-[70%] flex items-center pl-2 h-full text-[20px] font-[400]'>select variation from above</div>
                            <div className='w-[30%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                                <img className='w-[80px] h-[100px]' src="./outfit.jpg" alt="" />
                            </div>
                        </div>
                        <div className='w-full  flex border pb-5 pt-5 border-b-gray-400'>
                            <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-[400]'>select color</div>
                            <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                                <select name="" id="" className='w-full outline-none'>
                                    <option value="blue">Select</option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="white">White</option>
                                </select>
                            </div>
                        </div>
                        {/* <div className='w-full  flex border pb-5 pt-5 border-b-gray-400'>
                            <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-[400]'>shipping address</div>
                            <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                                <input type="text" />
                            </div>
                        </div> */}
                        <div className='w-full flex items-center justify-center mt-6'>
                            <button className='w-[50%] h-[50px] rounded font-semibold hover:bg-blue-600 hover:text-white flex items-center justify-center gap-2 bg-blue-400'>
                                Add to cart
                                <FaCartPlus />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPage