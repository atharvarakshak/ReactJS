import React from 'react';
import logo from '../img/logo.svg';
import tag from '../img/PurrfectPawsitters.svg';

function Nav() {
  return (
    <nav className="bg-[#FFBB7A] p-1 border-2 sticky top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-start w-full md:w-auto">
          {/* Logo Image */}
          <div className="mr-4">
            <img className="h-full w-8" src={logo} alt="Logo" />
          </div>

          {/* Tag Image */}
          <div className="mr-4 ">
            <img src={tag} alt="Tag" />
          </div>

          {/* Navigation Links (Hidden on Small Screens) */}
          <div className="space-x-4 hidden md:flex">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Login/Sign up (Visible on All Screens) */}
        <div className="bg-[#B95A00] rounded-lg text-white p-1 mr-4">
          <div>Login/Sign up</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
