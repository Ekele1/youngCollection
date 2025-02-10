import React, { useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
import { FiSearch, FiMenu } from "react-icons/fi";
import MobileHeader from './headerMobile';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [cartCount, setCartCount] = useState(0); // For dynamic cart updates

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <header className="w-full flex flex-col items-center relative bg-[#111828] mb-[110px]">
            {/* Mobile Menu */}
            {showMobileMenu && (
                <div
                    className={`w-[85%] h-screen fixed z-10 mt-[110px] bg-white top-0 left-0 transform transition-transform duration-500 ease-in-out 
                        ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <MobileHeader prop={toggleMobileMenu} />
                </div>
            )}

            {/* Header Fixed Section */}
            <div className="w-full fixed z-20 top-0">
                {/* Top Bar */}
                <div className="w-full pl-7 pr-7 h-[40px] bg-[#111828] text-white flex items-center justify-end gap-5">
                    <p className="cursor-pointer hover:underline" onClick={() => navigate("/onboarding/login")}>Sign in</p>
                    <p className="cursor-pointer hover:underline" onClick={() => navigate("/onboarding/signup")}>Create an account</p>
                </div>

                {/* Main Header */}
                <nav className="w-full pl-7 pr-7 h-[70px] flex justify-between bg-[#424242] items-center">
                    {/* Left Section (Logo & Mobile Menu) */}
                    <div className="flex items-center gap-5">
                        <img 
                            className="hidden lg:block w-12" 
                            src="./vite.svg" 
                            alt="Logo" 
                            onClick={() => navigate("/")}
                        />
                        <button 
                            aria-label="Toggle Menu" 
                            onClick={toggleMobileMenu} 
                            className="lg:hidden"
                        >
                            <FiMenu size={25} color="white" />
                        </button>
                        <button 
                            aria-label="Search" 
                            className="lg:hidden"
                        >
                            <FiSearch size={25} color="white" />
                        </button>
                    </div>

                    {/* Center Section (Desktop Links) */}
                    <div className="hidden lg:flex gap-5 text-white">
                        <p className="cursor-pointer hover:underline" onClick={() => navigate("/")}>LATEST</p>
                        <p className="cursor-pointer hover:underline" onClick={() => navigate("/men")}>MEN</p>
                        <p className="cursor-pointer hover:underline" onClick={() => navigate("/women")}>WOMEN</p>
                        <p className="cursor-pointer hover:underline" onClick={() => navigate("/trending")}>TRENDING</p>
                    </div>

                    {/* Right Section (Search, Help, Cart) */}
                    <div className="flex items-center gap-5 text-white">
                        <p className="hidden lg:block cursor-pointer hover:underline">Search</p>
                        <p className="hidden lg:block cursor-pointer hover:underline">Help</p>
                        <button 
                            aria-label="Help" 
                            className="lg:hidden"
                        >
                            <GoQuestion size={25} />
                        </button>
                        <div 
                            onClick={() => navigate("/cart")} 
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <BsCart4 size={25} />
                            <p>{cartCount}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
