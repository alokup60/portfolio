import React from "react";
import "./About.css";
import aboutImg from "../images/aboutImg.svg";
import { CiLocationArrow1 } from "react-icons/ci";

export default function About() {
  return (
    <div className="max-w-full mt-[6rem]" id="about">
      <div className="max-w-[90%] flex justify-between items-center mx-auto gap-2">
        {/* left part  */}
        <div className="mt-[6rem] relative max-w-[55%]">
          <div className="relative border w-[180px] h-[480px] bg-textWhite rounded-md ml-[12rem]"></div>
          <div className="flex bg-highColor w-[11.2rem] h-1 absolute bottom-0 left-[12rem]"></div>
          <div className="border absolute top-[4rem]">
            <img
              src={aboutImg}
              className="w-[300px] h-[370px] object-fit ml-[-20px] "
            />
          </div>
        </div>

        {/* right-part  */}
        <div className="max-w-[45%] flex flex-col justify-center items-center">
          <h2 className="font-bold text-[30px] mb-[4rem]">
            About <span className="text-highColor">Me</span>
          </h2>
          <div>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-[20px]">
                <span className="w-[5rem] h-1 bg-highColor left-[37rem] mt-[1rem] absolute"></span>
                Passionate about creating Web pages with UI/UX User Interfaces,
                I have years of experience and many clients are happy with the
                project carried out.
              </p>
              <ul class="list-disc">
                <li>
                  <span className="font-bold text-[20px]">My skills Are: </span>
                  HTML, CSS, Javascript, React, Github, Tailwind and Figma
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center bg-textBlack text-textWhite px-[1.5rem] py-[0.6rem] rounded-md hover:bg-highColor transition-all delay-75 ease-in cursor-pointer text-center mt-[4rem] gap-4">
            <CiLocationArrow1 />
            <a href="/resumeN.pdf" download="resumeN.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
