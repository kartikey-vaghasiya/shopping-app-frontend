import React from "react";

export default function Navbar() {
    return (
        <nav className="font-Mulish text-lg border-b-2 py-2 border-gray-200">
            {/* Navigation Bar */}
            <div className={`items-center flex flex-col lg:flex-row justify-between mx-[10rem] gap-10 py-21`}>
                {/* Logo */}
                <h1 className="cursor-pointer">
                    <img src="images/logo.png" className="w-[5rem]" alt="Logo" />
                </h1>

                {/* Navigation Links */}
                <ul className={`flex lg:flex-row gap-5`}>
                    <li className='cursor-pointer '>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact us</li>
                </ul>

                {/* Login and Signup Buttons */}
                <div className={`flex lg:flex-row gap-4`}>
                    <button className='px-6 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>
                        Login
                    </button>
                    <button className='px-6 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600'>
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
}
