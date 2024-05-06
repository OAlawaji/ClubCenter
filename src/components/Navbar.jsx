
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import FestivalIcon from "@mui/icons-material/Festival";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import imageSrc from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleEvent = (event) => {
      if (nav && navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [nav]);

  // APPEND A SEARCH BAR TO THE NAVBAR ****************************************************

  return (
    <div
      className="flex justify-between 
    items-center h-24 max-w-[1240px] 
    mx-auto px-4 
    text-sakry font-kanit font-semibold"
      ref={navRef}
    >
      <img className="h-16" src={imageSrc} />
      <ul className="hidden md:flex">
      <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("home");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <li className="p-4 hover:text-SGreenLight ">Home</li>
        </a>
        <a
          href="#events"
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("events");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <li className="p-4 hover:text-SGreenLight">Events</li>
        </a>
        <a
          href="#clubs"
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("clubs");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          <li className="p-4 hover:text-SGreenLight">Clubs</li>
        </a>
        <a
          href="#about"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo(0, document.getElementById("about").offsetTop);
          }}
        >
          <li className="p-4 hover:text-SGreenLight" hover:text-SGreenLight>
            About
          </li>
        </a>
        <a href="sign in">
          <li className="p-4 hover:text-SGreenLight" hover:text-SGreenLight>
            Sign in
          </li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav && (
        <div
          onClick={() => setNav(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
      <ul
        className={
          nav
            ? "fixed right-0 top-0 w-[50%] h-full border-r border-r-gray-900 z-50 navbar ease-in-out duration-500"
            : "ease-in-out duration-500 fixed right-[-100%] bottom-[-100%]"
        }
      >
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
        {/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 transform translate-x-0' : 'ease-in-out duration-500 fixed transform translate-x-full'}>        <img className="w-80" src="src\assets\logo.png" /> */}
        {/*  */}
        <a
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("home");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
            handleNav();
          }}
        >
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <HomeIcon />
            <h2>Home</h2>
          </li>
        </a>
        <a
          href="#events"
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("events");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
            handleNav();
          }}
        >
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <FestivalIcon />
            <h2>Events</h2>
          </li>
        </a>
        <a
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById("clubs");
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
            handleNav();
          }}
        >
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <GroupsIcon />
            <h2>Clubs</h2>
          </li>
        </a>
        <a href="">
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <InfoIcon />
            <h2>About</h2>
          </li>
        </a>
        <a href="">
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <LoginIcon />
            <h2>Sign in</h2>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
