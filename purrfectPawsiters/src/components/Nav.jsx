import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../img/logo.svg'

const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Contact' },
   
  ];

  return (
    <div className='sticky z-10 top-0 bg-[#FFBB7A] flex justify-between items-center h-16 w-[100%] mx-auto px-2 text-white'>
      <div className='flex items-center '>

      <img className='h-10 w-10' src={logo} alt="" />
      <h1 className='w-full text-3xl font-bold text-white'>Purrfect Pawsitters</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden z-30 '>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-black  bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'><img src={logo} alt="" /></h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
          key={item.id}
          className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
      </div>
      <button className=' rounded-lg pl-2 pr-2  h-8 w-26 mr-4  bg-[#B95A00]'>Login/SignUp</button>
    </div>

  );
};

export default Nav;
// import React from 'react';
// import logo from '../img/logo.svg';
// import tag from '../img/PurrfectPawsitters.svg';

// function Nav() {
//   return (
//     <nav className="bg-[#FFBB7A] p-1 border-2 sticky top-0 ">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center justify-start w-full md:w-auto">
//           {/* Logo Image */}
//           <div className="mr-4">
//             <img className="h-full w-8" src={logo} alt="Logo" />
//           </div>

//           {/* Tag Image */}
//           <div className="mr-4 ">
//             <img src={tag} alt="Tag" />
//           </div>

//           {/* Navigation Links (Hidden on Small Screens) */}
//           <div className="space-x-4 hidden md:flex">
//             <a href="#" className="text-white">
//               Home
//             </a>
//             <a href="#" className="text-white">
//               About
//             </a>
//             <a href="#" className="text-white">
//               Services
//             </a>
//             <a href="#" className="text-white">
//               Contact
//             </a>
//           </div>
//         </div>

//         {/* Login/Sign up (Visible on All Screens) */}
//         <div className="bg-[#B95A00] rounded-lg text-white p-1 mr-4">
//           <div>Login/Sign up</div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
