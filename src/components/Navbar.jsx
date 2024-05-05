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
import HomeIcon from '@mui/icons-material/Home';
import FestivalIcon from '@mui/icons-material/Festival';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import imageSrc from "../assets/logo.png";
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
      if (nav && navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };
  
    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent);
  
    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [nav]);

// APPEND A SEARCH BAR TO THE NAVBAR ****************************************************

  return (
    <div className='flex justify-between 
    items-center h-24 max-w-[1240px] 
    mx-auto px-4 
    text-sakry font-kanit font-semibold' 
    ref={navRef}>
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <img className="h-16" src={imageSrc} />
      <ul className='hidden md:flex'>
      <a  href = '#home' onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('home').offsetTop)}}>
          <li className='p-4 hover:text-SGreenLight '>Home</li>
        </a>
        <a  href = '#events' onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('events').offsetTop)}}>
          <li className='p-4 hover:text-SGreenLight' hover:text-SGreenLight>Events</li>
        </a>
        <a  href = '#clubs' onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('clubs').offsetTop)}}>
          <li className='p-4 hover:text-SGreenLight' hover:text-SGreenLight>Clubs</li>
        </a>
        <a href="#about" onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('about').offsetTop)}}>
          <li className='p-4 hover:text-SGreenLight' hover:text-SGreenLight>About</li>
        </a>
        <a href="sign in">
          <li className='p-4 hover:text-SGreenLight' hover:text-SGreenLight>Sign in</li>
        </a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      {nav && <div onClick={() => setNav(false)} className='fixed inset-0 bg-black opacity-50 z-40'></div>}
      <ul className={nav ? 'fixed right-0 top-0 w-[50%] h-full border-r border-r-gray-900 z-50 navbar ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[-100%] bottom-[-100%]' } >
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        {/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transform translate-x-0' : 'ease-in-out duration-500 fixed transform translate-x-full'}>        <img className="w-80" src="src\assets\logo.png" /> */}
        {/*  */}
        <a  onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('home').offsetTop)}}>
            <li className='p-4 border-b border-gray-600 flex flex-row space-x-2'><HomeIcon/><h2>Home</h2></li>
          </a>
          <a  onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('events').offsetTop)}}>
          <li className='p-4 border-b border-gray-600 flex flex-row space-x-2'><FestivalIcon/><h2>Events</h2></li>
          </a>
          <a  onClick={(event) => {event.preventDefault(); window.scrollTo(0, document.getElementById('clubs').offsetTop)}}>
          <li className='p-4 border-b border-gray-600 flex flex-row space-x-2'><GroupsIcon/><h2>Clubs</h2></li>
          </a>
          <a href="">
          <li className='p-4 border-b border-gray-600 flex flex-row space-x-2'><InfoIcon/><h2>About</h2></li>
          </a>
          <a href="">
          <li className='p-4 border-b border-gray-600 flex flex-row space-x-2'><LoginIcon/><h2>Sign in</h2></li>
          </a>
      </ul>
    </div>
  );
};

export default Navbar;