import React, { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown on click
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-900">
            <ul className="list-none flex gap-7 pt-2 pb-6 px-10 justify-end">
                <li>
                    <Link to="/" className="flex items-center gap-1 hover:text-green-400">
                        <AiOutlineProduct className="text-green-400 text-xl" />
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
                        <IoCallOutline className="text-green-400 text-xl" />
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
    );
};

export default Navbar;
