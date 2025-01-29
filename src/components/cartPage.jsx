import React, { useState } from 'react'
import { FaNairaSign } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const nav = useNavigate()
    const cartItems = [1,2,3,4]
    const [address, setAdress] = useState("")
    const [show, setShow] = useState("")

    const handleEdit =()=>{
        setShow(!show)
    }
  return (
    <div className='w-full flex justify-center mt-[110px]'>
        <div className='w-[95%] '>
            <div className='w-full h-[70px] text-blue-500 mb-10 text-[30px] font-semibold flex items-center justify-center'>
                <p>Shopping Cart (4items)</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row pb-10'>
                <div className='w-[6-100%] lg:w-[60%]  flex flex-col gap-4'>
                    {
                        cartItems.map((e,i)=>(
                            <div className='w-full h-[90px] p-3 flex bg-[#f4f4f4] rounded-[10px]' key={i}>
                                <div className='w-[20%] h-full flex items-center'>
                                    <img className='object-contain h-full' src="./cloth.jpg" alt="" />
                                </div>
                                <div className='w-[75%] flex'>
                                    <div className='w-[50%] flex flex-col justify-center'>
                                        <p>Quality women round neck</p>
                                        <div className='flex items-center'>
                                            <p className='font-bold'>price:</p>
                                            <FaNairaSign />
                                            5000
                                        </div>
                                    </div>
                                    <div className='w-[40%] flex items-center justify-center'>
                                        <div className='w-full h-full border flex items-center justify-around lg:border-gray-400 rounded-[20px]'>
                                            <GrAdd className='cursor-pointer font-bold'/>
                                            <div className='w-[50px] flex items-center justify-center font-bold h-[50px] rounded-[50%] border border-gray-500'>
                                                6
                                            </div>
                                            <FaMinus className='cursor-pointer font-bold' />
                                        </div>
                                    </div>
                                    <div className='w-[10%] flex items-center justify-center text-[25px]'>
                                        <RiDeleteBin6Line className='cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[100%] lg:w-[40%] mt-10 lg:mt-0 flex justify-center'>
                    <div className='w-[100%] lg:w-[90%]'>
                        <div className='w-full shadow-lg pl-5 pr-5'>
                            <p className='text-[20px] font-bold text-blue-500'>Order summary </p>
                            <div className='w-full h-[60px] flex items-center justify-between'>
                                <p className='font-bold'>Item subtotal</p>
                                <div className='flex items-center text-[20px] font-semibold'>
                                    <FaNairaSign />
                                    <p>100,000</p>
                                </div>
                            </div>
                            {/* <div className='w-full h-[60px] flex flex-col gap-[8px] lg:flex-row lg:items-center lg:justify-between'>
                                <p className='font-bold'>Shipping adress</p>
                                <div className='flex items-center gap-[15px] text-[15px]'>
                                    <div className='lg:w-[200px] w-[250px] h-full border border-gray-500'>
                                        {
                                            show? <input className='w-full h-full outline-none pl-1' placeholder='Enter adress' value={address} onChange={(e)=>setAdress(e.target.value)} type="text" />:
                                            <p>{address}</p>
                                        }
                                    </div>
                                    {
                                        show? <button onClick={()=>setShow(false)} className='flex items-center gap-3 p-2 border hover:text-white bg-blue-500 border-blue-500 rounded-md'>Done</button>:
                                        <button onClick={()=>setShow(true)} className='flex items-center gap-3 p-2 border hover:text-white bg-blue-500 border-blue-500 rounded-md'>Edit <CiEdit /></button>
                                    }
                                </div>
                            </div> */}
                            <div className='w-full h-[60px] flex items-center justify-between'>
                                <p className='font-bold'>Shipping fee</p>
                                <div className='flex items-center text-[20px] font-semibold'>
                                    <FaNairaSign />
                                    <p>3000</p>
                                </div>
                            </div>
                            <div className='w-full h-[60px] flex items-center justify-between'>
                                <p className='font-bold'>Total</p>
                                <div className='flex items-center text-[20px] font-semibold'>
                                    <FaNairaSign />
                                    <p>103,000</p>
                                </div>
                            </div>
                            <div className='w-full pb-10 pt-10'>
                                <button onClick={()=>nav("/order")} className='w-full h-[50px] hover:text-white hover:bg-blue-500 text-[20px] rounded-[10px] flex items-center justify-center gap-2 bg-blue-400'>
                                    <IoShieldCheckmarkOutline />
                                    checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart