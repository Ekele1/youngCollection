import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { IoIosArrowRoundForward } from "react-icons/io";

const CategorySort = () => {
    const [image, setImage] = useState([{
        name: "MEN",
        url: './cloth.jpg'
    },
    {
        name: "WOMEN",
        url: './cloth.jpg'
    },
    {
        name: "HOODIES",
        url: './cloth.jpg'
    },
    {
        name: "JEAN",
        url : './cloth.jpg'
    },
    
])
  return (
    <div className='w-full'>
        <div className='w-full h-[100px] pl-10 pr-10 flex items-center justify-between'>
            <h1 className='text-[25px] font-bold'>Shop by category</h1>
            <div className='flex items-center text-blue-700 font-semibold cursor-pointer'>
                <p>Browse all category</p>
                <IoIosArrowRoundForward />
            </div>
        </div>
        <div className='w-full h-[400px] overflow-x-scroll'>
            <div className='h-full flex gap-3 justify-around pl-10 pr-10 pt-5 pb-5'>
                {
                    image.map((e,i)=>(
                        <div 
                        key={i}
                        style={{backgroundImage: `url(${e.url})`}} 
                        className='w-[700px] h-[300px] rounded-[20px] bg-cover flex items-end justify-center'>
                            <p className='text-[25px] text-white font-bold'>{e.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CategorySort