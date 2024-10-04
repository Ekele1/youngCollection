import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const MobileHeader = ({prop}) => {
    const nav = useNavigate()
    // const [show, setShow] = useState()
    const handleClick = ()=> {
        const data = false
        prop(data)
    }
  return (
    <div className='w-full p-4'>
        <div className='w-full flex items-center justify-between pt-3 pb-3'>
            <img src="./vite.svg" alt="" />
            <MdOutlineCancel onClick={handleClick} size={30}/>
        </div>
        <div onClick={()=>nav("/")} className='w-full h-[50px] pl-3 text-[18px] font-medium flex items-center'> HOME</div>
        <div onClick={()=>nav("/men")} className='w-full h-[50px] pl-3 text-[18px] font-medium flex items-center'> MEN</div>
        <div onClick={()=>nav("/women")} className='w-full h-[50px] pl-3 text-[18px] font-medium flex items-center'> WOMEN</div>
        <div className='w-full h-[50px] pl-3 text-[18px] font-medium flex items-center'> COMPANY</div>
        <div onClick={()=>nav("/contact")} className='w-full h-[50px] pl-3 text-[18px] font-medium flex items-center'> CONTACT</div>
        <div className='w-full h-[50px] pl-3 text-[18px] font-medium flex items-center border-b-2'></div>
        <div className='w-ful pt-4 pl-3 text-[18px] font-medium flex items-center'>
            <button className='w-full h-[40px] text-white rounded bg-blue-500'>Sign up</button>
        </div>
        <div className='w-ful pt-4 pl-3 text-[18px] font-medium flex items-center'>
            <button className='w-full h-[40px] rounded border-2 border-blue-300'>Log in</button>
        </div>
    </div>
  )
}

export default MobileHeader