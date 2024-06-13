import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { BiTask } from "react-icons/bi";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            menu: 'home',
            url: '/'
        },
        {
            menu: 'about',
            url: '/about'
        },
        {
            menu: 'contact',
            url: '/contact'
        },
        {
            menu: 'signin',
            url: '/login'
        },
        {
            menu: 'signup',
            url: '/register'
        },

    ]
    return (
        <div className="sticky top-0 max-w-full">
      <div className='py-3 bg-emerald-600'>
        <nav className="flex justify-between items-center w-full">
          <div className='md:w-2/5 w-full md:mx-10 mx-5 transition-all duration-150 ease-linear delay-75 flex items-center'>
            <BiTask className='w-7 h-7 text-white'/>
            <h1 className='md:text-3xl text-white text-xl text-center block font-semibold text-dark font-style mx-2'>Task Management</h1>
          </div>

          <div className="md:w-[40%] w-[10%] md:mx-10 mx-0 ">

            <div className={`w-full flex md:flex-row flex-col md:justify-around justify-center items-center  md:z-auto z-[-1] md:shadow-none shadow-xl md:bg-transparent bg-emerald-600 md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
          ${open ? 'top-12' : '-top-80'}`}>
              {
                menuItems.map(item =>
                  <Link key={item.menu}
                    onClick={() => setOpen(!open)}
                    to={item.url}
                    className='relative h-7 text-center w-28 font-semibold origin-top transform rounded-lg capitalize text-md text-white before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-emerald-500'
                  >{item.menu}
                  </Link>
                )
              }
            </div>

          </div>
          <div className='md:hidden block mx-5'>
            <button onClick={() => setOpen(!open)}>
              {
                !open ? <HiOutlineMenu className='w-7 h-7 text-stone-300' /> : <HiOutlineX className='w-6 h-6 text-stone-300' />
              }
            </button>
          </div>
        </nav>
      </div>
    </div>
    )
}

export default NavBar
