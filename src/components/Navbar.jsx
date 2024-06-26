import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="mb-20 lg:mb-0 border-b top-0 fixed lg:relative w-full z-50">
      <div className="flex bg-white z-50 items-center font-medium justify-around">
        <div className="z-50 bg-white pl-2 lg:px-4 py-2 md:py-0 md:w-auto w-full flex justify-between">
          <Link to="/">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-10 md:h-14 xl:h-16" />
          </Link>
          <div className="text-3xl flex items-center md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex ml-0 pl-0 mb-0 hidden uppercase items-center sm:gap-0 gap-8 font-poppins">
          <li>
            <Link to="/" className="py-7 sm:px-2 sm:text-base lg:text-lg md:text-base text-black no-underline px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/gallery" className="py-7 sm:px-2 sm:text-base lg:text-lg md:text-base text-black no-underline px-3 inline-block">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/resources" className="py-7 sm:px-2 sm:text-base lg:text-lg md:text-base text-black no-underline px-3 inline-block">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 sm:px-2 sm:text-base lg:text-lg md:text-base text-black no-underline px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        <div className="lg:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 h-screen overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link onClick={() => setOpen(!open)} to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks setOpen={setOpen} open={open} />
          <li>
            <Link onClick={() => setOpen(!open)} to="/our-team" className="py-7 px-3 inline-block">
              Our Team
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} to="/gallery" className="py-7 px-3 inline-block">
              Gallery
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} to="/resources" className="py-7 px-3 inline-block">
              Resources
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(!open)} to="/contact" className="py-7 text-base no-underline px-3 inline-block">
              Contact
            </Link>
          </li>
          <div onClick={()=>setOpen(!open)} className="py-5">
            <Button />
          </div>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;