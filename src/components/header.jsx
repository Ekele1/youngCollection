import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import MobileHeader from './headerMobile';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate()
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className='w-full flex flex-col items-center relative bg-[#111828] mb-[110px]'>
            {
                show && (
                    <div 
                        className={`w-[85%] h-[700px] fixed z-10 mt-[110px] bg-white top-0 left-0 transform transition-transform duration-500 ease-in-out 
                            ${show ? 'translate-x-0' : '-translate-x-full'}
                        `}
                    >
                        <MobileHeader prop={handleShow} />
                    </div>
                )
            }
            <div className='w-full fixed z-20 top-0'>
                <div className='w-full'></div>
                <div className='w-full pl-7 pr-7 h-[40px] bg-[#111828] font-bold text-white flex items-center justify-end gap-5'>
                    <p className='cursor-pointer'>Sign in</p>
                    <p className='cursor-pointer'>Create an account</p>
                </div>
                <div className='w-full pl-7 pr-7 h-[70px] flex justify-between bg-[#424242]'>
                    <div className='h-full flex items-center gap-5'>
                        <img className='hidden lg:block' src="./vite.svg" alt="Logo" />
                        <FiMenu onClick={handleShow} className='lg:hidden' size={25} color='white' />
                        <FiSearch className='lg:hidden' size={25} color='white' />
                    </div>
                    <div className='lg:flex hidden h-full items-center gap-5 text-white'>
                        <p className='cursor-pointer' onClick={()=>nav("/")}>LATEST</p>
                        <p className='cursor-pointer' onClick={()=>nav("/men")}>MEN</p>
                        <p className='cursor-pointer' onClick={()=>nav("/women")}>WOMEN</p>
                        {/* <p className='cursor-pointer'>Company</p> */}
                        <p className='cursor-pointer' onClick={()=>nav("/contact")}>TRENDING</p>
                    </div>
                    <div className='flex h-full items-center gap-5 text-white'>
                        <p className='cursor-pointer hidden lg:block'>Search</p>
                        <p className='cursor-pointer hidden lg:block'>Help</p>
                        <GoQuestion size={25} className='lg:hidden' />
                        <div onClick={()=>nav("/cart")} className='flex items-center h-full gap-2 cursor-pointer'>
                            <BsCart4 size={25} />
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
