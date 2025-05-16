import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import FestivalIcon from "@mui/icons-material/Festival";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import imageSrc from "../assets/logo.png";
// Removed unused imports
// import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar({ showAllClubs, collapseClubs }) {
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
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // offset for navbar height
        behavior: "smooth",
      });
    }
    setNav(false);
  }

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-sakry font-kanit font-semibold"
      ref={navRef}
    >
      <img className="h-16" src={imageSrc} alt="Logo" />
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-SGreenLight cursor-pointer">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              collapseClubs();
            }}
          >
            Home
          </a>
        </li>
        <li className="p-4 hover:text-SGreenLight cursor-pointer">
          <a
            href="#events"
            onClick={(e) => scroll(e, "events")}
          >
            Events
          </a>
        </li>
        <li className="p-4 hover:text-SGreenLight cursor-pointer">
          <a
            href="#clubs"
            onClick={(e) => {
              scroll(e, "clubs");
              showAllClubs();
            }}
          >
            Clubs
          </a>
        </li>
        <li className="p-4 hover:text-SGreenLight cursor-pointer">
          <a
            href="#about"
            onClick={(e) => scroll(e, "about")}
          >
            About
          </a>
        </li>
        <li className="p-4 hover:text-SGreenLight cursor-pointer">
          <span>Sign in</span>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav && (
        <div onClick={() => setNav(false)} className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
      <ul
        className={
          nav
            ? "fixed right-0 top-0 w-[50%] h-full border-r border-r-gray-900 z-50 navbar ease-in-out duration-500 bg-sakry"
            : "ease-in-out duration-500 fixed right-[-100%] bottom-[-100%]"
        }
      >
        <li
          className="p-4 border-b border-gray-600 flex flex-row space-x-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleNav();
            collapseClubs();
          }}
        >
          <HomeIcon />
          <h2>Home</h2>
        </li>
        <li
          className="p-4 border-b border-gray-600 flex flex-row space-x-2 cursor-pointer"
          onClick={(e) => scroll(e, "events")}
        >
          <FestivalIcon />
          <h2>Events</h2>
        </li>
        <li
          className="p-4 border-b border-gray-600 flex flex-row space-x-2 cursor-pointer"
          onClick={(e) => {
            scroll(e, "clubs");
            showAllClubs();
          }}
        >
          <GroupsIcon />
          <h2>Clubs</h2>
        </li>
        <li
          className="p-4 border-b border-gray-600 flex flex-row space-x-2 cursor-pointer"
          onClick={(e) => scroll(e, "about")}
        >
          <InfoIcon />
          <h2>About</h2>
        </li>
        <li className="p-4 border-b border-gray-600 flex flex-row space-x-2 cursor-pointer">
          <LoginIcon />
          <h2>Sign in</h2>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;