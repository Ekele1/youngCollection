import React, { useState } from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';

const DetailPage = ({items}) => {
    const {id} = useParams()
    const product = items.find((item)=> item.id === parseInt(id))
    if(!product){
        return <p>Product not found</p>
    }

    const [fullImg, setFullImg]= useState(product.image)
  return (
    <div className='w-full flex bg-gray-200 justify-center  pt-2 pb-10'>
        <div className='w-[95%] lg:w-[70%]'>
            <div className='w-full h-[60px] flex items-center text-[25px] font-semibold'>Product Details</div>
            <div className='lg:w-[70%] flex flex-col lg:flex-row w-full'>
                {/* <Carousel showThumbs={false} showStatus={false} infiniteLoop interval={3000}> */}
                    <div className='w-[100%] lg:w-[80%] lg:h-[400px] h-[300px] lg:bg-gray-300'>
                        <img className='w-full h-full object-contain' src={fullImg} alt="" />
                    </div>
                    <div className='w-[100%] lg:w-[20%] lg:h-[400px] lg:gap-7 flex-shrink-0 lg:bg-gray-300 flex lg:flex-col flex-row overflow-scroll'>
                        {
                            product.otherImg?.map((e,i)=>(
                                <div onClick={()=>{
                                    setFullImg(e)
                                }} className='w-[100px] h-[110px] cursor-pointer flex items-center justify-center bg-yellow-400'>
                                    <img className='object-contain hover:object-cover' src={e} alt="" />
                                </div>
                            ))
                         }
                        
                    </div>

                {/* </Carousel> */}
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[50%] flex flex-col gap-2 mt-10'>
                    <div className='w-full lg:h-[60px] h-[50px] flex items-center text-[25px] lg:text-[30px] font-semibold'>
                        <p>Key Attributes</p>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-300 text-[20px] font-semibold'>Name</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>{product.name}</div>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-300 text-[20px] font-semibold'>Material</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>{product.material}</div>
                    </div>
                    <div className='w-full h-[60px] flex border border-gray-400'>
                        <div className='w-[50%] flex items-center pl-2 h-full bg-gray-300 text-[20px] font-semibold'>Price</div>
                        <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                            <FaNairaSign />{product.price}
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] mt-10'>
                    <div className='w-full h-[60px] flex items-center justify-center text-[25px] lg:text-[30px] font-semibold'>
                        <p>place your order here</p>
                    </div>
                    <div className='w-ful pl-[50px]'>
                        <div className='w-full  flex border pb-5 border-b-gray-400'>
                            <div className='w-[70%] flex items-center pl-2 h-full text-[20px] font-[400]'>select variation from above</div>
                            <div className='w-[30%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                                <img className='w-[80px] h-[100px]' src={fullImg} alt="" />
                            </div>
                        </div>
                        <div className='w-full  flex border pb-5 pt-5 border-b-gray-400'>
                            <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-[400]'>select size</div>
                            <div className='w-[50%] flex items-center pl-2 h-full text-[20px] font-semibold'>
                                <select name="" id="" className='w-full outline-none'>
                                    <option value="blue">small</option>
                                    <option value="blue">large</option>
                                    <option value="green">x-large</option>
                                    <option value="white">2x-large</option>
                                    <option value="white">3x-large</option>
                                    <option value="white">4x-large</option>
                                </select>
                            </div>
                        </div>
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