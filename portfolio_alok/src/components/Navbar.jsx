import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { MenuData } from "./MenuData";
import logo from "../images/logo.svg";
import { MdOutlineNightlight } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setmenu] = useState(false);
  const [clicked, setClicked] = useState(false);

  const MenuHandler = () => {
    setClicked(!clicked);
    setmenu((prev) => !prev);
  };

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

  return (
    <div className={`max-w-full ${navbar ? "sticky" : ""}`}>
      <nav className="w-11/12 navbar-items flex flex-wrap justify-between items-center mx-auto">
        <div className="flex gap-2  items-center text-center">
          <img src={logo} className="w-[5rem] object-cover" />
          <span className="font-semibold text-xl">Alok</span>
        </div>

        <div className="flex items-center gap-4 pr-4">
          <div className="flex items-center gap-4 pr-4">
            <div>
              <ul className={`flex gap-8 nav-menu ${clicked && "active"}`}>
                {MenuData.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url} className={item.cName}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="moon text-2xl">
              <MdOutlineNightlight />
            </div>
            <div className="menu-icons text-2xl">
              <button onClick={MenuHandler} className={`bars`}>
                {menu ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
