import React, { useEffect, useState } from 'react';
import { MdOutlineMenuOpen, MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Adminheaderslide from './adminheaderslide';
import AdminSlide from './adminslide';

const AdminBoard = ({prop}) => {
  const [show, setShow] = useState(false);
  const [slide, setSlide] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleShow = (data) => {
    setShow(data);
  };

  useEffect(() => {
    if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
    setIsDarkMode(true);
    } else if (localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark');
    setIsDarkMode(false);
    }
}, []);

const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setIsDarkMode(false);
    } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDarkMode(true);
    }
};

  return (
    <div className={`w-full flex`}>
        {
            show?
                <div className='w-[20%] h-[300px]'></div>: null
        }
      {show && (
        <div className={`w-[65%] lg:w-[20%] transition-all fixed duration-300 ease-in-out transform ${show ? "translate-x-0" : "-translate-x-full"}`}>
          <Adminheaderslide onsend={handleShow} />
        </div>
      )}
      {
        slide &&(
          <div className={`w-[150px] h-[200px] dark:bg-[#1d283a] bg-white shadow-xl p-3 rounded-lg fixed top-[3px] mt-[70px] ${show ?"left-[79%]" : "left-[75%]" }`}>
            <AdminSlide />
          </div>
        )
      }
      <div className={`w-full lg:${show ? "w-[80%]" : "w-full"} flex flex-col transition-all duration-300 ease-in-out`}>
      <div className={`w-full lg:${show ? "w-[80%]" : "w-full"}  h-[70px] pl-2 pr-1 lg:p-0 dark:bg-[#1d283a] bg-blue-500 flex fixed justify-between`}>
        <div onClick={() => setShow(!show)} className="lg:w-[5%] w-[10%] h-full cursor-pointer flex items-center justify-center text-[40px] text-white">
          {
            show? null : <MdOutlineMenuOpen />
          }
        </div>
        <div className="w-[50%] h-full hidden lg:flex items-center justify-center">
          <div className="w-full h-[50px] border rounded-md dark:bg-[#1d283a] bg-white border-gray-500 flex items-center justify-around">
            <input className="w-[90%] dark:bg-[#1d283a] dark:text-white h-full outline-none border-none pl-2" placeholder="search here" type="text" />
            <IoSearchSharp size={25} className='dark:text-white' />
          </div>
        </div>
        <div className=" h-full hidden lg:flex items-center gap-2">
          <div className="w-[40px] h-[40px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <IoMdNotificationsOutline size={25} />
          </div>
          <div className="w-[40px] h-[40px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <FiMessageSquare size={25} />
          </div>
          <div onClick={toggleTheme} className="w-[40px] cursor-pointer h-[40px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            {
              isDarkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight size={25} />
            }
            
          </div>
        </div>
        <div onClick={()=>setSlide(!slide)} className="h-full hidden cursor-pointer lg:flex items-center justify-center gap-1">
          <div className="w-[40px] h-[40px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <FaRegUser size={25} />
          </div>
          <div className="h-[50px] text-white text-[13px]">
            <p className="">Ekele Jeremiah</p>
            <p>Admin</p>
          </div>
        </div>
        <div className="w-[10%] h-full flex text-white items-center justify-center">
          <IoSettingsOutline className="animate-spin" size={25} />
        </div>
      </div>
      <div className='w-full h-[50px]'></div>
      <div className={`w-full min-h-screen bg-[#f2f7fb] dark:bg-[#0f172a] p-1 lg:p-5 pt-3 lg:pt-0`}>{prop}</div>
      </div>
    </div>
  );
};

export default AdminBoard;
