import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import FestivalIcon from "@mui/icons-material/Festival";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import imageSrc from "../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar({ showAllClubs, collapseClubs }) {
  const location = useLocation();
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

  function scroll(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-sakry font-kanit font-semibold"
      ref={navRef}
    >
      <img className="h-16" src={imageSrc} />
      <ul className="hidden md:flex">
        <li className={`p-4 ${location.pathname === '/' ? 'text-SGreenLight' : ''}`}>
          <NavLink to="/" onClick={collapseClubs} className="hover:text-SGreenLight">
            Home
          </NavLink>
        </li>
        {/* <a href="#events" onClick={(event) => { scroll(event, "events"); }}> */}
          <li className="p-4 hover:text-SGreenLight">
            Events
            </li>
        {/* </a> */}
        <li className={`p-4 ${location.pathname === '/clubs' ? 'text-SGreenLight' : ''}`}>
          <NavLink to="/clubs" onClick={showAllClubs} className="hover:text-SGreenLight">
            Clubs
          </NavLink>
        </li>
        <a onClick={(event) => { scroll(event, "about"); }}>
          <li className="p-4 hover:text-SGreenLight">About</li>
        </a>
        <a href="sign in">
          <li className="p-4 hover:text-SGreenLight">Sign in</li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav && (
        <div onClick={() => setNav(false)} className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
      <ul
        className={
          nav
            ? "fixed right-0 top-0 w-[50%] h-full border-r border-r-gray-900 z-50 navbar ease-in-out duration-500"
            : "ease-in-out duration-500 fixed right-[-100%] bottom-[-100%]"
        }
      >
        <a onClick={(event) => { scroll(event, "home"); handleNav(); }}>
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <HomeIcon />
            <h2>Home</h2>
          </li>
        </a>
        <a onClick={(event) => { scroll(event, "events"); handleNav(); }}>
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <FestivalIcon />
            <h2>Events</h2>
          </li>
        </a>
        <a onClick={(event) => { scroll(event, "clubs"); handleNav(); }}>
          <li className="p-4 border-b border-gray-600 flex flex-row space-x-2">
            <GroupsIcon />
            <h2>Clubs</h2>
          </li>
        </a>
        <a href="#about" onClick={(event) => { scroll(event, "about"); handleNav(); }}>
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
}

export default Navbar;
