import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon,SunIcon } from '@heroicons/react/24/solid'
// import {Link} from react-router-dom
import logo from '../img/logo.svg'
const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/" },
    { name: "Help", link: "/" },
    { name: "ABOUT", link: "/about" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="navbar shadow-md w-full  fixed z-50 top-0 left-0  "> 
      <div className="md:flex items-center justify-between bg-[#FFBB7A] py-4 md:px-10 px-7 ">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <span className="text-white">Purrfect Pawsitters</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-10 cursor-pointer md:hidden w-7 h-7 "
          style={{ zIndex: 100 }}
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link items */}
        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FFBB7A] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-out ${
            open ? "top-20 z-[-1]" : "top-[-490px]"
          }`}
          style={{ zIndex: 90 }}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <a
                href={link.link}
                className="text-white hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn bg-[#B95A00] hover:bg-[#ea9f59] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-300 md:static">
            Login/SignUp
          </button>
        </ul>
        
      </div>
    </div>
  );
};

export default Nav;
