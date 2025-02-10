import React, { useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp, IoLogoBuffer } from "react-icons/io";
import { PiDotOutline } from "react-icons/pi";
import { FaRegFileAlt, FaDiceD6 } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GrAnalytics } from "react-icons/gr";
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
    <div className='w-full pl-1 pr-1 dark:bg-[#1d283a] bg-white mt-[71px] lg:mt-0'>
        <div className='w-full h-[70px] flex items-center justify-between p-2 dark:bg-[#1d283a] bg-blue-500 text-white font-bold'>
            <h1 className='text-[17px]'>Young Collections</h1>
            <RiMenuUnfold3Line size={20} onClick={sendData}/>
        </div>
        <div className='w-full h-[550px] overflow-scroll scrollbar-none shadow-md dark:text-white'>
        <div onClick={()=>{nav("/admin"),sendData()}} className='w-full h-[70px] mt-1 hover:text-[#0A3981] dark:hover:text-blue-400 flex items-center justify-center'>
            <div className='w-[90%] h-[80%] rounded-md flex items-center cursor-pointer pl-2 gap-2'>
                <LuLayoutDashboard size={25}/>
                <h1 className='text-[14px] lg:text-[15px] font-bold font-'>Home</h1>
            </div>
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer flex flex-col items-center justify-center'>
            <div onClick={()=>setCommerce(!commerce)} className='w-[90%] h-[50px] rounded-md hover:text-[#0A3981] dark:hover:text-blue-400 cursor-pointer flex items-center pl-2 justify-between'>
                <div className='flex gap-2'>
                    <BsCart2 size={20}/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold font-'>Ecommerce</h1>
                </div>
                {
                    commerce? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            commerce &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div onClick={()=>{nav("/admin/addproduct") 
                    setCommerce(true)
                    }} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Add product</p>
                </div>
                <div onClick={()=>{nav("/admin/productlist")
                    setCommerce(true)
                }} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Product list</p>
                </div>
                <div onClick={()=>{nav("/admin/editproduct")
                    setCommerce(true)
                }} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Edit product</p>
                </div>
                <div className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Delete product</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer flex flex-col items-center justify-center'>
            <div onClick={()=>setCategory(!category)} className='w-[90%] h-[50px] rounded-md hover:text-[#0A3981] dark:hover:text-blue-400 flex items-center pl-2 justify-between'>
                <div className='flex gap-2'>
                    <IoLogoBuffer size={20}/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold font-'>Category</h1>
                </div>
                {
                    category? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            category &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div onClick={()=>nav("/admin/categorylist")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Category list</p>
                </div>
                <div onClick={()=>nav("/admin/newcategory")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>New category</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointe flex flex-col items-center justify-center'>
            <div onClick={()=>setAttribute(!attribute)} className='w-[90%] h-[50px] rounded-md hover:text-[#0A3981] dark:hover:text-blue-400 flex items-center pl-2 justify-between'>
                <div className='flex gap-2'>
                    <FaDiceD6 size={20}/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold font-'>Attributes</h1>
                </div>
                {
                    attribute? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            attribute &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Attributes</p>
                </div>
                <div className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Add attribute</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer flex flex-col items-center justify-center'>
            <div onClick={()=>setOrder(!order)} className='w-[90%] h-[50px] rounded-md dark:hover:text-blue-400 hover:text-[#0A3981] flex items-center pl-2 justify-between'>
                <div className='flex gap-2'>
                    <FaRegFileAlt size={20}/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold font-'>Order</h1>
                </div>
                {
                    order? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            order &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div onClick={()=>nav("/admin/orderlist")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Order list</p>
                </div>
                <div onClick={()=>nav("/admin/orderdetailoo123df")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Order detail</p>
                </div>
                <div className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Order tracking</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer flex flex-col items-center justify-center'>
            <div onClick={()=>setUser(!user)} className='w-[90%] h-[50px] rounded-md dark:hover:text-blue-400 hover:text-[#0A3981] flex items-center pl-1 justify-between'>
                <div className='flex gap-2'>
                    <FiUser size={20}/>
                    <h1 className='text-[14px] lg:text-[15px] font-bold font-'>User</h1>
                </div>
                {
                    user? <IoIosArrowUp />: <IoIosArrowDown />
                }
            </div>
           {
            user &&(
                <div className='w-full flex flex-col items-center gap-1'>
                <div onClick={()=>nav("/admin/allusers")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>All user</p>
                </div>
                <div onClick={()=>nav("/admin/addnewuser")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Add new user</p>
                </div>
                <div onClick={()=>nav("/admin/permissionacess")} className='w-[70%] font-bold text-[12px] lg:text-[15px] hover:text-blue-500 flex items-center h-[30px]'>
                    <PiDotOutline size={25}/>
                    <p>Permission</p>
                </div>
            </div>
            )
           }
        </div>
        <div className='w-full pb-1 mt-1 cursor-pointer flex flex-col items-center justify-center'>
            <div onClick={()=>setReport(!report)} className='w-[90%] h-[50px] rounded-md dark:hover:text-blue-400 hover:text-[#0A3981] flex items-center pl-1 gap-2'>
                <GrAnalytics size={20}/>
                <h1 className='text-[14px] lg:text-[15px] font-bold font-'>Report</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Adminheaderslide