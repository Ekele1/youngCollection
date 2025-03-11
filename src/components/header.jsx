import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../onboarding/authContext";
import { BsCart4 } from "react-icons/bs";
import { GoQuestion } from "react-icons/go";
import { FiSearch, FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import MobileHeader from "./headerMobile";
import { useNavigate } from "react-router-dom";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
    const { user, logout, cart } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu((prev) => !prev);
    };

    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (cart) {
            setCartCount(cart.length);
        }
    }, [cart]);

    const toggleTheme = () => {
        const isDark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setIsDarkMode(isDark);
    };

    return (
        <header className="w-full flex flex-col items-center relative bg-[#111828] mb-[110px]">
            {/* Mobile Menu */}
            {showMobileMenu && (
                <div
                    className="fixed z-10 w-full h-screen bg-black bg-opacity-50 top-0 left-0"
                    onClick={toggleMobileMenu}
                />
            )}
            <div
                className={`fixed z-10 w-[85%] h-screen bg-white dark:bg-[#111828] dark:text-gray-500 top-0 left-0 transition-transform duration-500 ease-in-out 
                ${showMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <MobileHeader prop={toggleMobileMenu} />
            </div>

            {/* Header Fixed Section */}
            <div className="w-full fixed z-20 top-0">
                {/* Top Bar */}
                <div className="w-full pl-7 pr-7 h-[40px] bg-[#111828] text-white flex items-center justify-end gap-5">
                    {user ? (
                        <>
                            <p onClick={() => navigate("/userprofile")} className="cursor-pointer hover:underline">{user.fullName}</p>
                            <p
                                className="cursor-pointer hover:underline"
                                onClick={() => logout()}
                            >
                                Logout
                            </p>
                        </>
                    ) : (
                        <>
                            <p
                                className="cursor-pointer hover:underline"
                                onClick={() => navigate("/onboarding/login")}
                            >
                                Sign in
                            </p>
                            <p
                                className="cursor-pointer hover:underline"
                                onClick={() => navigate("/onboarding/signup")}
                            >
                                Create an account
                            </p>
                        </>
                    )}
                </div>

                {/* Main Header */}
                <nav className="w-full pl-7 pr-7 h-[70px] flex justify-between bg-[#424242] items-center">
                    {/* Left Section (Logo & Mobile Menu) */}
                    <div className="flex items-center gap-5">
                        <img
                            className="hidden lg:block w-12 cursor-pointer"
                            src="./vite.svg"
                            alt="Company Logo"
                            onClick={() => navigate("/")}
                        />
                        <button
                            aria-label="Toggle Menu"
                            onClick={toggleMobileMenu}
                            className="lg:hidden"
                        >
                            <FiMenu size={25} color="white" />
                        </button>
                        <button aria-label="Search" className="lg:hidden">
                            <FiSearch size={25} color="white" />
                        </button>
                    </div>

                    {/* Center Section (Desktop Links) */}
                    <div className="hidden lg:flex gap-5 text-white">
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => navigate("/")}
                        >
                            LATEST
                        </p>
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => navigate("/men")}
                        >
                            MEN
                        </p>
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => navigate("/women")}
                        >
                            WOMEN
                        </p>
                        <p
                            className="cursor-pointer hover:underline"
                            // onClick={() => navigate("/trending")}
                        >
                            TRENDING
                        </p>
                    </div>

                    {/* Right Section (Search, Help, Cart) */}
                    <div className="flex items-center gap-5 text-white">
                        <p className="hidden lg:block cursor-pointer hover:underline">Search</p>
                        <p className="hidden lg:block cursor-pointer hover:underline">Help</p>
                        <div
                            onClick={() => navigate("/cart")}
                            className="flex items-center gap-1 bg-blue-500 p-2 rounded-lg cursor-pointer"
                        >
                            <p>cart</p>
                            <BsCart4 size={25} />
                            <p className="text-orange-300">{cartCount}</p>
                        </div>
                        <div onClick={toggleTheme} className="w-[40px] cursor-pointer h-[40px] bg-gray-500 rounded-[50px] flex items-center justify-center">
                            {isDarkMode ? <MdOutlineLightMode size={25} /> : <MdOutlineNightlight size={25} />}
                        </div>
                        <div onClick={() => navigate("/usernotification")} className="w-[40px] cursor-pointer h-[40px] bg-gray-500 rounded-[50px] flex items-center justify-center">
                            <IoMdNotificationsOutline size={25} />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;