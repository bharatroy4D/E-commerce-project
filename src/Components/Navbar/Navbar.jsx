import React, { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { FiChevronDown, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GiConcentrationOrb } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown on click
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-blue-900  pt-2 pb-3 px-10 shadow-2xl fixed top-0 left-0 z-[99999] w-full">
            <nav>
                <ul className="list-none flex gap-7 justify-end text-sm">
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
            <div className="pb-2 mt-3 flex justify-between items-center w-[70%] ">
                <div className="flex gap-2 items-center ">
                    <GiConcentrationOrb className="text-green-400 text-3xl" />
                    <h1 className="text-3xl shadow-2xl font-bold ">T-Shop</h1>
                </div>
                <div className="flex gap-5 items-center ">
                    <div className="flex items-center relative">
                        <input type="text" name="name" id="" className="border-none text-black font-medium bg-amber-50 py-2 pl-4 pr-72 rounded-full outline-0" placeholder="Search " /><FiSearch className="text-2xl absolute right-5"/>
                    </div>
                    <div className="flex gap-4">
                        <RiAccountCircleLine className="text-2xl cursor-pointer" />
                        <FiShoppingCart className="text-2xl cursor-pointer" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
