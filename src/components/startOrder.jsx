import React, { useEffect, useState } from 'react'
import { IoLocation } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { FaNairaSign } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiReceiptRefund } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const StartOrderPage = () => {
    const nav = useNavigate()
    const [deliveryDate,setDeliveryDate] = useState("")

    useEffect(()=>{
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 7);
        const day = String(currentDate.getDate()).padStart(2, '0'); 
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        setDeliveryDate(formattedDate)
    },[])

    const [address, setAddress] = useState("Lagos Nigeria")
    const [show, setShow] = useState(false)

  return (
    <div className='w-full flex justify-center'>
        <div className='w-[95%] pb-10'>
            <div className='w-full h-[50px] lg:h-[100px] border-b border-b-gray-400 flex items-center text-blue-500 justify-center text-[30px] font-semibold'>
                <p>Start Order</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-[100%] lg:w-[60%]'>
                    <div className='w-full pt-10 pb-3 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between'>
                        <div className='flex items-center gap-6 text-[25px] text-blue-500 font-semibold'>
                            <IoLocation />
                            <p>Shipping address</p>
                        </div>
                        {
                            show? <button 
                            onClick={()=>setShow(false)}
                            className='w-[40%] lg:w-[20%] h-[40px] rounded-lg hover:bg-blue-500 hover:text-white bg-blue-400'>
                                Done
                            </button>:
                            <button 
                            onClick={()=>setShow(true)}
                            className='w-[40%] lg:w-[20%] h-[40px] rounded-lg hover:bg-blue-500 hover:text-white bg-blue-400'>
                                Change address
                            </button>
                        }
                    </div>
                    <div className='w-full pb-5 border-b border-b-gray-400'>
                        <p className='font-bold'>Ekele Jeremiah</p>
                        {
                            show? <input
                            placeholder='enter address'
                            onChange={(e)=>setAddress(e.target.value)}
                             className='border border-gray-500 w-[300px] outline-none pl-1 h-[30px] rounded-md' type="text" />:
                            <p>{address}</p>
                        }
                        <p>09154382278</p>
                    </div>
                    <div className='w-full pt-10'>
                        <div className='flex items-center gap-6 text-[25px] font-semibold'>
                            <RiSecurePaymentFill className='text-blue-400'/>
                            <p>Payment Method</p>
                        </div>
                        <div className='w-full pt-5 items-center flex gap-3 text-[20px] cursor-pointer'>
                            <GrAdd size={30}/>
                            <MdOutlinePayment size={30}/>
                            <p className='text-blue-400'>Add new card</p>
                            <RiVisaLine size={30}/>
                            <SiMastercard color='orangered' size={30}/>
                        </div>
                        <div className='w-full pt-10'>
                            <p>Other payment options</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[40%] flex justify-center'>
                    <div className='w-[100%] lg:w-[90%] pt-10'>
                        <div className='w-full lg:shadow-lg shadow-none pl-5 pr-5 pb-10'>
                            <p className='text-[20px] font-bold text-blue-500'>Order summary </p>
                            <div className='w-full h-[60px] flex items-center justify-between'>
                                <p className='font-bold'>Item subtotal</p>
                                <div className='flex items-center text-[20px] font-semibold'>
                                    <FaNairaSign />
                                    <p>100,000</p>
                                </div>
                            </div>
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
                                <button onClick={()=>nav("/checkout")} className='w-full h-[50px] hover:text-white hover:bg-blue-500 text-[20px] rounded-[10px] flex items-center justify-center gap-2 bg-blue-400'>
                                    <IoShieldCheckmarkOutline />
                                    proceed to pay
                                </button>
                            </div>
                            <div className='w-full pb-3 pt-3'>
                                <p>by clicking the above, you agree to YoungCollection's terms of use and privacy policy</p>
                            </div>
                            <div className='w-full pb-3 pt-3 text-[20px] font-semibold'>
                                <p>Protections for this order</p>
                            </div>
                            <div className='w-full pt-2 pb-3 flex'>
                                <div className='w-[10%]'>
                                    <CiDeliveryTruck size={30}/>
                                </div>
                                <div className='w-[90%]'>
                                    <p className='font-semibold'>Delivery arranged by us</p>
                                    <p>Expect your order to be delivered on or before {deliveryDate}</p>
                                </div>
                            </div>
                            <div className='w-full pb-3 pt-3 text-[20px] font-semibold'>
                                <p>Secure payments</p>
                            </div>
                            <div className='w-full pt-2 pb-3 flex'>
                                <div className='w-[10%]'>
                                    <IoShieldCheckmarkOutline size={30}/>
                                </div>
                                <div className='w-[90%]'>
                                    <p className='font-semibold'>Delivery arranged by us</p>
                                    <p>Every payments you make on YoungCollection is safe and secure with kora</p>
                                </div>
                            </div>
                            <div className='w-full pb-3 pt-3 text-[20px] font-semibold'>
                                <p>Refund policy</p>
                            </div>
                            <div className='w-full pt-2 pb-3 flex'>
                                <div className='w-[10%]'>
                                    <HiReceiptRefund size={30}/>
                                </div>
                                <div className='w-[90%]'>
                                    <p className='font-semibold'>Delivery arranged by us</p>
                                    <p>Claim a refund if your order doesn't ship, is missing or yet to arrive after 24hrs of expected delivery date</p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <p>YoungCollection protects all your orders placed and paid on the platform </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartOrderPage