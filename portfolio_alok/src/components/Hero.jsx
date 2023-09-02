import React from "react";
import "./Hero.css";
import hero from "../images/PROFILE.jpg";
import draw1 from "../images/draw1.svg";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="max-w-full " id="home">
      <div className="max-w-[90%] flex justify-between items-center mx-auto gap-8">
        {/* left part  */}
        <div className="max-w-[55%] flex felx-col justify-center items-center text-center">
          <div>
            <h2 className="text-[40px] font-bold mt-[6rem] ">Alok Raj Singh</h2>
            <div className="flex justify-center gap-2">
              <div className="w-[12rem] h-1 bg-highColor ml-[6rem] mt-[1rem]"></div>
              <p className="text-[20px]">
                <span className="text-highColor">Frontend Dev</span>eloper, with
                knowledge in web development and design, I offer the best
                project using resulting in quality work.
              </p>
            </div>
          </div>
          <div className="mt-[-6rem]">
            <img src={draw1} className="w-[20rem]" />
          </div>
        </div>

        {/* right part  */}
        <div className="mt-[6rem] relative">
          <div className="border w-[340px] h-[350px] bg-borderColor rounded-md"></div>
          <div className="absolute top-[-2rem] left-[-2rem]">
            <img src={hero} className="w-[350px] h-[370px]" />
          </div>
        </div>

        {/* icons  */}
        <div className="text-2xl flex flex-col items-center gap-2">
          <div className="w-[2rem] h-[2rem] bg-textGray flex justify-center items-center rounded-md hover:bg-highColor transition-all delay-100 ease-in">
            <a href="https://www.instagram.com/dev_alok_/">
              <AiOutlineInstagram className="text-[#fff] cursor-pointer  " />
            </a>
          </div>
          <div className="w-[2rem] h-[2rem] bg-textGray flex justify-center items-center rounded-md hover:bg-highColor transition-all delay-100 ease-in">
            <a href="https://github.com/alokup60">
              <AiOutlineGithub className="text-[#fff] cursor-pointer  " />
            </a>
          </div>
          <div className="w-[2rem] h-[2rem] bg-textGray flex justify-center items-center rounded-md hover:bg-highColor transition-all delay-100 ease-in">
            <a href="https://www.linkedin.com/in/alok-raj-singh-7b42261a9/">
              <AiOutlineLinkedin className="text-[#fff] cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
