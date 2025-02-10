import React from 'react'
import { RiUser3Line } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

const AdminSlide = () => {
  return (
    <div className='w-full h-full dark:text-gray-500'>
        <div className='w-full h-[40px] flex items-center gap-3 hover:text-blue-500 cursor-pointer'>
            <RiUser3Line size={20}/>
            <p className='font-bold text-[14px]'>User</p>
        </div>
        <div className='w-full h-[40px] flex items-center gap-3 hover:text-blue-500 cursor-pointer'>
            <MdMailOutline size={20}/>
            <p className='font-bold text-[14px]'>Inbox</p>
        </div>
        <div className='w-full h-[40px] flex items-center gap-3 hover:text-blue-500 cursor-pointer'>
            <IoSettingsOutline size={20}/>
            <p className='font-bold text-[14px]'>Settings</p>
        </div>
        <div className='w-full h-[40px] flex items-center gap-3 hover:text-blue-500 cursor-pointer'>
            <MdOutlineLogout size={20}/>
            <p className='font-bold text-[14px]'>Logout</p>
        </div>
    </div>
  )
}

export default AdminSlide