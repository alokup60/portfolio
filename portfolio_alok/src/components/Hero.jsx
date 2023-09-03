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
    <div className="max-w-full" id="home">
      <div className="w-11/12 flex flex-wrap justify-between items-center mx-auto gap-6 hero-sec">
        {/* left part  */}
        <div className="w-6/12 flex felx-col text-part">
          <div>
            <h2 className="text-[40px] font-bold mt-[6rem] ">Alok Raj Singh</h2>
            <div className="flex justify-start gap-2 relative">
              <div className="w-[12rem] h-1 bg-highColor  mt-[1rem]"></div>
              <p className="text-[20px] text-start">
                <span className="text-highColor">Frontend Dev</span>eloper, with
                knowledge in web development and design, I offer the best
                project using resulting in quality work.
              </p>
              <div className="mt-[-6rem] absolute top-[-2rem] right-0 draw-line">
                <img src={draw1} className="w-[8rem]" />
              </div>
            </div>
          </div>
        </div>

        {/* right part  */}
        <div className="w-5/12 mt-[6rem]  hero-img relative pl-[4rem]">
          <div className="border max-w-[10rem] h-[350px] bg-borderColor rounded-md hero-bg "></div>
          <div className="absolute top-0 right-10 ">
            <img
              src={hero}
              className="w-full h-[340px] rounded-lg object-fit"
            />
          </div>
        </div>

        {/* icons  */}
        <div className=" text-2xl flex flex-col items-center gap-2 social-icons">
          <div className="w-[2rem] h-[2rem] bg-textGray flex justify-center items-center rounded-md hover:bg-highColor transition-all delay-100 ease-in social-icon">
            <a href="https://www.instagram.com/dev_alok_/">
              <AiOutlineInstagram className="text-[#fff] cursor-pointer  " />
            </a>
          </div>
          <div className="w-[2rem] h-[2rem] bg-textGray flex justify-center items-center rounded-md hover:bg-highColor transition-all delay-100 ease-in social-icon">
            <a href="https://github.com/alokup60">
              <AiOutlineGithub className="text-[#fff] cursor-pointer  " />
            </a>
          </div>
          <div className="w-[2rem] h-[2rem] bg-textGray flex justify-center items-center rounded-md hover:bg-highColor transition-all delay-100 ease-in social-icon">
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
