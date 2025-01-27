import React from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Collections = ({prop}) => {
    const nav = useNavigate()
    const all = [1,2,3,4,5,6,7,8,9,0,2,4]
  return (
    <div className='w-full pl-2 pr-2 pb-20'>
        <div className='w-full h-[80px] text-[30px] font-bold flex items-center justify-center'>
            {prop}
        </div>
        <div className='w-full flex justify-around gap-2 lg:gap-0 flex-wrap bg-[#f8f8f8] pb-10'>
            {
                all.map((e,i)=>(
                <div onClick={()=>nav("/detail")} className='w-[47%] lg:w-[25%] hover:border-2 border-black cursor-pointer p-2 rounded' key={i}>
                    <div className='w-full h-[200px] lg:h-[300px] bg-gray-300 relative'>
                        <img className='object-contain hover:object-cover w-full rounded-[10px] h-full' src="https://i.pinimg.com/236x/3e/5d/56/3e5d56f2fcc94e772918438f8e182de0.jpg" alt="" />
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center gap-1'>
                            <FaNairaSign /> <p className='font-bold'>5000</p>
                        </div>
                        <p className=''>Quality women round neck and polo giving you the best</p>
                        <div>
                            <p>5 colors</p>
                        </div>
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