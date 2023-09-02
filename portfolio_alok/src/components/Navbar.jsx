import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import { MdOutlineNightlight } from "react-icons/md";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`max-w-full ${navbar ? "sticky" : ""}`}>
      <nav className="max-w-[90%] flex justify-between items-center mx-auto">
        <div className="logo w-[5rem]  flex justify-center items-center text-center">
          <img src={logo} className="object-fit" alt="Logo" />
          <span className="pl-[1rem] text-xl">Alok</span>
        </div>
        <div className="flex items-center gap-6 nav-links">
          {/* Mobile Menu Icon */}
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <MdOutlineNightlight />
          </div>
          {/* Navigation Links */}
          <ul
            className={`hidden md:flex items-center gap-6 ${
              mobileMenuOpen ? "mobile-menu-open" : ""
            }`}
          >
            <li className="px-[1rem]">
              <a href="#home">Home</a>
            </li>
            <li className="px-[1rem]">
              <a href="#about">About Me</a>
            </li>
            <li className="px-[1rem]">
              <a href="#project">Projects</a>
            </li>
          </ul>
          {/* Contact Button */}
          <div className="bg-textBlack text-textWhite px-[1.5rem] py-[0.6rem] rounded-md contactBtn hover:bg-highColor transition-all delay-75 ease-in">
            <button>Contact Me</button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu ${
          mobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
        </ul>
        {/* You can add additional mobile menu items here */}
      </div>
    </div>
  );
};

export default Navbar;
