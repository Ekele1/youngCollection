import React from 'react'
import { FiUser } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdSubject } from "react-icons/md";
import Header from '../components/header';
import Footercomp from '../components/footer';

const ContactUs = () => {
  return (
    <>
    {/* <Header /> */}
    <div className="w-full mt-[110px] flex lg:flex-row dark:bg-[#18181a] dark:text-white gap-5 lg:gap-0 flex-col lg:p-10 p-5">
      <div className='lg:w-[50%] dark:text-white w-full text-[#062134]'>
        <p className='text-[20px] '>Contact me</p>
        <h1 className='lg:text-[45px] text-[30px]font-bold lg:leading-[50px] leading-[40px]'>Have any question? Feel free to contact me</h1>
        <p className='mt-4'>
            I’d love to hear from you! Feel free to reach out via email or phone.
        </p>
        <p className='text-green-500'>
            Email: officiallyyoung01@gmail.com
        </p>
        <p className='text-green-500'>
            Phone: 09154382278
        </p>
      </div>
      <div className='lg:w-[50%] w-full lg:shadow-lg text-[#062134] lg:pl-10 lg:pb-10 lg:pr-10 flex flex-col items-center'>
        <p className='text-[20px] font-bold dark:text-white'>SEND A MESSAGE</p>
        <div className='w-full flex items-center justify-around h-[50px] dark:bg-black dark:text-white bg-[#f9f5f2] mt-7'>
          <input 
          className='w-[90%] outline-none border-none bg-transparent pl-2'
          placeholder='Full name'
          type="text" />
          <FiUser />
        </div>
        <div className='w-full flex items-center justify-around h-[50px] dark:bg-black dark:text-white bg-[#f9f5f2] mt-7'>
          <input 
          className='w-[90%] outline-none border-none bg-transparent pl-2'
          placeholder='Email'
          type="email" />
          <MdOutlineMailOutline />
        </div>
        <div className='w-full flex items-center justify-around h-[50px] dark:bg-black dark:text-white bg-[#f9f5f2] mt-7'>
          <input 
          className='w-[90%] outline-none border-none bg-transparent pl-2'
          placeholder='Subject'
          type="text" />
          <MdSubject />
        </div>
        <div className='w-full flex items-center justify-around dark:bg-black dark:text-white bg-[#f9f5f2] mt-7'>
          <textarea name="message" id="message" placeholder='Write your message here' className='w-full h-[150px] outline-none p-3 bg-transparent'></textarea>
        </div>
        <div className='w-full flex items-center mt-4'>
          <button
          className='w-full h-[50px] dark:bg-black dark:text-white bg-[#f9f5f2] text-[#062134] font-bold text-[20px]'
          >SEND</button>
        </div>
      </div>
    </div>
    {/* <Footercomp /> */}
    </>
  )
}

export default ContactUs