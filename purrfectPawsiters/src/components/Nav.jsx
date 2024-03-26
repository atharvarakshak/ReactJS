import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon,SunIcon } from '@heroicons/react/24/solid'

import logo from '../img/logo.svg'
const Nav = () => {
  // State to manage the navbar's visibility
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICE",link:"/"},
    {name:"ABOUT",link:"/"},
    {name:"CONTACT",link:"/"},
  ];
  let [open, setOpen] =useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10 '>
           <div className='md:flex items-center justify-between bg-[#FFBB7A] py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
              <a href="/"><img src={logo} alt="" /></a>
                <span className='text-white'>Purrfect Pawsitters</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FFBB7A] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-[#B95A00] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login/SignUp</button>
            </ul>
            {/* button */}
           </div>
        </div>
  );
};

export default Nav;
