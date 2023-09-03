import React from "react";
import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-full mt-[1rem] bg-textBlack">
      <div className="w-10/12 flex justify-between items-center mx-auto gap-4 pb-[4rem] text-textWhite footer-main">
        {/* left-part  */}
        <div className="flex items-center gap-2 py-[4rem] footer-left">
          <AiOutlineCopyrightCircle className="text-2xl font-bold" />
          <span>
            All Rights Reserved By{" "}
            <span className="text-borderColor">Alok Raj Singh</span>
          </span>
        </div>

        {/* right-part  */}
        <div className="flex footer-right">
          <ul className="flex items-center gap-12 footer-list">
            <li className="hover:text-textGray transition-all delay-100 ">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-textGray transition-all delay-100 ">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:text-textGray transition-all delay-100 ">
              <a href="#project">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
