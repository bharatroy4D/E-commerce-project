import React, { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { FiChevronDown, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GiConcentrationOrb } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle dropdown on click
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Toggle Mobile Menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-blue-800 pt-2 pb-3 px-6 md:px-10 shadow-2xl fixed top-0 left-0 z-[99999] w-full">
            {/* Desktop Navbar */}
            <nav className="hidden lg:flex justify-end gap-7 text-sm text-white">
                <ul className="flex gap-7">
                    <li>
                        <Link to="/" className="flex items-center gap-1 hover:text-green-400">
                            <AiOutlineProduct className="text-green-400 " />
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/become" className="hover:text-green-400">
                            Become a Seller
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="flex items-center gap-1 hover:text-green-400">
                            <IoCallOutline className="text-green-400 " />
                            Help & Support
                        </Link>
                    </li>

                    {/* Language Dropdown */}
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-1 text-white hover:text-green-400 focus:outline-none"
                        >
                            <TfiWorld className="text-green-400" />
                            <span>Language</span>
                            <FiChevronDown className={`transition-all duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isDropdownOpen && (
                            <ul className="absolute bg-white mt-2 text-black p-2 shadow-md rounded w-32">
                                <li className="hover:text-green-400 cursor-pointer px-3 py-1">English</li>
                                <li className="hover:text-green-400 cursor-pointer px-3 py-1">Bangla</li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link to="/sign" className="hover:text-green-400">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center lg:hidden">
                <div className="flex gap-2 items-center">
                    <GiConcentrationOrb className="text-green-400 text-3xl" />
                    <h1 className="text-3xl text-white font-bold">T-Shop</h1>
                </div>

                <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <ul className="lg:hidden flex flex-col items-start bg-blue-900 p-4 rounded mt-2 text-white">
                    <li className="py-2"><Link to="/">Products</Link></li>
                    <li className="py-2"><Link to="/become">Become a Seller</Link></li>
                    <li className="py-2"><Link to="/help">Help & Support</Link></li>
                    <li className="py-2 flex items-center gap-2">
                        <TfiWorld className="text-green-400" />
                        <span>Language</span>
                    </li>
                    <li className="py-2"><Link to="/sign">Sign Up</Link></li>
                </ul>
            )}

            {/* Search & Cart Section */}
            <div className="mt-3 flex justify-between items-center w-full lg:w-[70%]">
                <div className="hidden lg:flex gap-2 items-center">
                    <GiConcentrationOrb className="text-green-400 text-3xl" />
                    <h1 className="text-3xl text-white font-bold">T-Shop</h1>
                </div>

                <div className="flex gap-5 items-center w-full lg:w-auto">
                    <div className="flex items-center relative w-full lg:w-auto">
                        <input
                            type="text"
                            className="border-none text-black font-medium bg-amber-50 py-2 pl-4 pr-10 w-full lg:w-72 rounded-full outline-0"
                            placeholder="Search"
                        />
                        <FiSearch className="text-2xl absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                    <div className="flex gap-4 text-white">
                        <RiAccountCircleLine className="text-2xl cursor-pointer" />
                        <FiShoppingCart className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
