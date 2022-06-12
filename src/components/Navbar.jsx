import React from 'react'

const Navbar = () => {
    return (
        <nav class="h-auto flex items-center justify-between bg-teal-500 py-2 px-32">
            <div class="flex items-center flex-shrink-0 text-white">
                <img src='assets/employee_m-logo.jpg' alt='broken' className='h-12 w-12 rounded-full cursor-pointer' />
                {/* <span class="font-semibold text-xl tracking-tight">Employee</span> */}
            </div>
            {/* <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div> */}
            <div class="w-full block lg:flex lg:items-center lg:w-auto">
                <div class="text-lg lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar