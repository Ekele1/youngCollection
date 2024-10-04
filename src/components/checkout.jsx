import React from 'react'
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { FaRegCreditCard } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const CheckoutPage = () => {
  return (
    <div className='w-full flex justify-center bg-[#f7f8fa] mt-[110px]'>
        <div className='w-[90%] pb-10'>
            <div className='w-full pt-10 p-10 text-[25px] font-bold'>
                <p>Trade assurance</p>
            </div>
            <div className='w-full flex'>
                <div className='w-[60%] flex flex-col gap-5'>
                    <div className='w-full pt-10 pl-5 pr-5 pb-10 bg-white rounded-[10px] shadow-lg'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex items-center gap-5 text-[20px]'>
                                <input type="radio" />
                                <p>credit/debit card</p>
                                <RiVisaLine size={30}/>
                                <SiMastercard color='orangered' size={30}/>
                            </div>
                            <FaRegCreditCard size={30}/>
                        </div>
                    </div>
                    <div className='w-full pt-10 pl-5 pr-5 pb-10 bg-white rounded-[10px] shadow-lg'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex items-center gap-5 text-[20px]'>
                                <input type="radio" />
                                <p>Transfer</p>
                            </div>
                            <IoIosPhonePortrait size={30}/>
                        </div>
                    </div>
                </div>
                <div className='w-[40%]'></div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage