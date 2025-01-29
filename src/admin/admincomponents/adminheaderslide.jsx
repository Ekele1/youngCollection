import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Adminheaderslide = ({onsend}) => {
    const sendData =()=>{
        onsend(false)
    }
  return (
    <div className='w-full h-full pl-1 pr-1 bg-blue-600'>
        <div className='w-full h-[70px] flex items-center justify-between p-2 bg-blue-500 text-[25px] text-white font-bold'>
            <h1 className='text-[17px]'>Young Collections</h1>
            <RiMenuUnfold3Line onClick={sendData}/>
        </div>
        <div className='w-full h-[70px] mt-1 cursor-pointer text-blue-600 hover:text-[#0A3981] border-b-4 border-b-white flex items-center justify-center'>
            <div className='w-[90%] h-[80%] rounded-md bg-[#D4EBF8] flex items-center justify-center gap-2'>
                <LuLayoutDashboard size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Home</h1>
            </div>
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer text-blue-600 hover:text-[#0A3981] border-b-4 border-b-white flex items-center justify-center'>
            <div className='w-[90%] h-[50px] rounded-md bg-[#D4EBF8] flex items-center justify-center gap-2'>
                <BsCart2 size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Ecommerce</h1>
                <IoIosArrowDown />
            </div>
        </div>
    </div>
  )
}

export default Adminheaderslide