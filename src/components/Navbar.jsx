// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//   return (

//     <header className="flex sm:flex-row justify-between items-center h-24 max-w-[1240px] text-yellow mx-auto px-4">
//     <img className="h-20 mx-auto sm:mx-0" src="src\assets\logo.png" />

//     <button 
//         className="sm:hidden text-2xl" 
//         onClick={() => setIsOpen(!isOpen)}
//     >
//         ☰
//     </button>

//     <ul className={`flex flex-col sm:flex-row mt-4 sm:mt-0 ${isOpen ? '' : 'hidden sm:flex'}`}>
//         <li className="p-4">Home</li>
//         <li className="p-4">Calender</li>
//         <li className="p-4">Clubs</li>
//     </ul>
// </header>
//   );
// }

// export default Header;

import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // const handleClickOutside = (event) => {
  //   if (navRef.current && !navRef.current.contains(event.target)) {
  //     setNav(false);
  //   }
  // };

  useEffect(() => {
    const handleEvent = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };
  
    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent);
  
    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, []);

// APPEND A SEARCH BAR TO THE NAVBAR ****************************************************

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white' ref={navRef}>
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <img className="h-16" src="src\assets\logo.png" />
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed right-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%] bottom-[-100%]' } >
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        {/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transform translate-x-0' : 'ease-in-out duration-500 fixed transform translate-x-full'}>        <img className="w-80" src="src\assets\logo.png" /> */}
        {/*  */}
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;