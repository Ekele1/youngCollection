import React, { useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp, IoLogoBuffer } from "react-icons/io";
import { PiDotOutline } from "react-icons/pi";
import { FaRegFileAlt, FaDiceD6 } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const Adminheaderslide = ({onsend}) => {
    const sendData =()=>{
        onsend(false)
    }
    const nav = useNavigate()

    const [commerce, setCommerce] = useState(false)
    const [category, setCategory] = useState(false)
    const [order, setOrder] = useState(false)
    const [user, setUser] = useState(false)
    const [report, setReport] = useState(false)
    const [attribute, setAttribute] = useState(false)
  return (
    <div className='w-full h-full pl-1 pr-1 bg-white'>
        <div className='w-full h-[70px] flex items-center justify-between p-2 bg-blue-500 text-[25px] text-white font-bold'>
            <h1 className='text-[17px]'>Young Collections</h1>
            <RiMenuUnfold3Line onClick={sendData}/>
        </div>
        <div className='w-full h-[600px] overflow-scroll shadow-md'>
        <div onClick={()=>nav("/admin")} className='w-full h-[70px] mt-1 cursor-pointer text-blue-600 hover:text-[#0A3981] border-b-4 border-b-white flex items-center justify-center'>
            <div className='w-[90%] h-[80%] rounded-md bg-[#D4EBF8] flex items-center pl-2 gap-2'>
                <LuLayoutDashboard size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Home</h1>
            </div>
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer border-b-4 border-b-white flex flex-col items-center justify-center'>
            <div onClick={()=>setCommerce(!commerce)} className='w-[90%] h-[50px] rounded-md text-blue-600 hover:text-[#0A3981] bg-[#D4EBF8] flex items-center pl-2 gap-2'>
                <BsCart2 size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Ecommerce</h1>
                {
                    commerce? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            commerce &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div onClick={()=>nav("/admin/addproduct")} className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Add product</p>
                </div>
                <div onClick={()=>nav("/admin/productlist")} className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Product list</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Edit product</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Delete product</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer border-b-4 border-b-white flex flex-col items-center justify-center'>
            <div onClick={()=>setCategory(!category)} className='w-[90%] h-[50px] rounded-md text-blue-600 hover:text-[#0A3981] bg-[#D4EBF8] flex items-center pl-2 gap-2'>
                <IoLogoBuffer size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Category</h1>
                {
                    category? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            category &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Category list</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>New category</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer border-b-4 border-b-white flex flex-col items-center justify-center'>
            <div onClick={()=>setAttribute(!attribute)} className='w-[90%] h-[50px] rounded-md text-blue-600 hover:text-[#0A3981] bg-[#D4EBF8] flex items-center pl-2 gap-2'>
                <FaDiceD6 size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Attributes</h1>
                {
                    attribute? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            attribute &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Attributes</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Add attribute</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer border-b-4 border-b-white flex flex-col items-center justify-center'>
            <div onClick={()=>setOrder(!order)} className='w-[90%] h-[50px] rounded-md text-blue-600 hover:text-[#0A3981] bg-[#D4EBF8] flex items-center pl-2 gap-2'>
                <FaRegFileAlt size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Order</h1>
                {
                    order? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            order &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Order list</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Order tracking</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer border-b-4 border-b-white flex flex-col items-center justify-center'>
            <div onClick={()=>setUser(!user)} className='w-[90%] h-[50px] rounded-md text-blue-600 hover:text-[#0A3981] bg-[#D4EBF8] flex items-center pl-1 gap-2'>
                <FiUser size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>User</h1>
                {
                    user? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            user &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>All user</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Add new user</p>
                </div>
                <div className='w-[70%] font-bold text-[18px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Permission</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer border-b-4 border-b-white flex flex-col items-center justify-center'>
            <div onClick={()=>setReport(!report)} className='w-[90%] h-[50px] rounded-md text-blue-600 hover:text-[#0A3981] bg-[#D4EBF8] flex items-center pl-1 gap-2'>
                <FiUser size={25}/>
                <h1 className='text-[15px] lg:text-[22px] font-bold font-'>Report</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Adminheaderslide