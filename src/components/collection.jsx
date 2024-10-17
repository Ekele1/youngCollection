import React from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Collections = ({prop}) => {
    const nav = useNavigate()
    const all = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className='w-full pl-2 pr-2 pb-20'>
        <div className='w-full h-[80px] text-[30px] font-bold flex items-center justify-center'>
            {prop}
        </div>
        <div className='w-full flex justify-around gap-2 lg:gap-0 flex-wrap bg-[#f8f8f8] pb-10'>
            {
                all.map((e,i)=>(
                <div onClick={()=>nav("/detail")} className='w-[47%] lg:w-[18%] cursor-pointer hover:bg-gray-300 p-2 rounded' key={i}>
                    <div className='w-full relative'>
                        <img className='object-contain w-full rounded-[10px] h-full' src="./outfit.jpg" alt="" />
                    </div>
                    <div className='w-full'>
                        <p className='font-medium'>Quality women round neck and polo giving you the best</p>
                        <div className='flex items-center gap-1'>
                            <FaNairaSign /> <p className='font-bold'>5000</p>
                        </div>
                        {/* <p>Min.order: 1</p> */}
                    </div>
                </div>
                ))
            }
            
        </div>
        <div className='w-full flex items-center justify-center pt-10'>
            <button className='w-[70%] lg:w-[20%] h-[60px] lg:h-[40px] flex items-center justify-center gap-3 bg-blue-100'>
                view More <FaLongArrowAltDown />
            </button>
        </div>
    </div>
  )
}

export default Collections