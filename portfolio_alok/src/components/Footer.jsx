import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[100%] mt-[1rem] bg-textBlack">
      <div className="max-w-[90%] flex justify-between items-center mx-auto gap-4 pb-[4rem] text-textWhite">
        {/* left-part  */}
        <div className="flex items-center gap-2 py-[4rem]">
          <AiOutlineCopyrightCircle />{" "}
          <span>All Rights Reserved By Alok Raj Singh</span>
        </div>

        {/* right-part  */}
        <div className="flex">
          <ul className="flex items-center gap-12">
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
