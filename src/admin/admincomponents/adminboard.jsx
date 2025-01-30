import React, { useState } from 'react';
import { MdOutlineMenuOpen, MdOutlineNightlight } from "react-icons/md";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Adminheaderslide from './adminheaderslide';

const AdminBoard = ({prop}) => {
  const [show, setShow] = useState(true);

  const handleShow = (data) => {
    setShow(data);
  };

  return (
    <div className={`w-full relative flex`}>
        {
            show?
                <div className='w-[20%] h-[600px]'></div>: null
        }
      {show && (
        <div className={`w-[65%] lg:w-[20%] absolute h-screen bg-white transition-all duration-300 ease-in-out transform ${show ? "translate-x-0" : "-translate-x-full"}`}>
          <Adminheaderslide onsend={handleShow} />
        </div>
      )}
      <div className={`w-full lg:${show ? "w-[80%]" : "w-full"} flex flex-col transition-all duration-300 ease-in-out`}>
      <div className={`w-full  h-[70px] pl-2 pr-1 lg:p-0 bg-blue-500 flex justify-between`}>
        <div onClick={() => setShow(!show)} className="lg:w-[5%] w-[10%] h-full cursor-pointer flex items-center justify-center text-[40px] text-white">
          {
            show? null : <MdOutlineMenuOpen />
          }
        </div>
        <div className="w-[50%] h-full hidden lg:flex items-center justify-center">
          <div className="w-full h-[50px] border rounded-md bg-white border-gray-500 flex items-center justify-around">
            <input className="w-[90%] h-full outline-none border-none pl-2" placeholder="search here" type="text" />
            <IoSearchSharp size={25} />
          </div>
        </div>
        <div className="w-[20%] h-full hidden lg:flex items-center justify-around">
          {/* <div className="w-[50px] h-[50px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <MdOutlineNightlight size={25} />
          </div> */}
          <div className="w-[50px] h-[50px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <IoMdNotificationsOutline size={25} />
          </div>
          <div className="w-[50px] h-[50px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <FiMessageSquare size={25} />
          </div>
        </div>
        <div className="w-[15%] h-full hidden lg:flex items-center justify-center gap-1">
          <div className="w-[50px] h-[50px] bg-[#D4EBF8] rounded-[50px] flex items-center justify-center">
            <FaRegUser size={25} />
          </div>
          <div className="h-[50px] text-white">
            <p className="font-bold">Ekele Jeremiah</p>
            <p>Admin</p>
          </div>
        </div>
        <div className="w-[10%] h-full flex text-white items-center justify-center">
          <IoSettingsOutline className="animate-spin" size={25} />
        </div>
      </div>
      <div className={`w-full h-[600px] bg-[#f2f7fb] p-5`}>{prop}</div>
      </div>
    </div>
  );
};

export default AdminBoard;
