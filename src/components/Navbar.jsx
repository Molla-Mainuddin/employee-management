import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed w-full h-auto flex items-center justify-between bg-teal-500 py-2 px-5 lg:px-32">
            <div className="flex items-center flex-shrink-0 text-white">
                <NavLink to="/">
                    <img src='assets/employee_m-logo.jpg' alt='broken' className='h-10 w-10 rounded-full cursor-pointer lg:h-12 lg:w-12 ' />
                </NavLink>
                {/* <span className="font-semibold text-xl tracking-tight">Employee</span> */}
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full hidden lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow">
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar