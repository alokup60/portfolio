import React from "react";
import "./Projects.css";
import proj from "../images/img1.svg";

const Projects = () => {
  return (
    <div className="max-w-full  mt-[6rem]" id="project">
      <h2 className="font-bold text-[30px] mb-[2rem] flex justify-center items-center mx-auto">
        Pro<span className="text-highColor">jects</span>
      </h2>
      <div className="w-10/12 flex justify-between items-center mx-auto gap-8 mb-[2rem] flex-wrap cards">
        <div className="card-shadow pb-[2rem] w-[30%] rounded-md relative card">
          <img src={proj} className="w-full" />
          <div className="flex items-center">
            <div className="w-[2rem] bg-textGray h-[2px] "></div>
            <span className="pl-[1rem] text-textGray">Major Project</span>
          </div>
          <div className="flex flex-col px-[1rem]">
            <h2 className="text-textBlack font-semibold">Academfiy</h2>
            <p>
              Project that school can manage their attendance , student
              classwork, students activity etc.
            </p>
          </div>
          <div className="flex bg-highColor w-full h-1 absolute bottom-0 left-[1px] card-border"></div>
        </div>
        <div className="card-shadow pb-[2rem] w-[30%] rounded-md relative card">
          <img src={proj} className="w-full" />
          <div className="flex items-center">
            <div className="w-[2rem] bg-textGray h-[2px] "></div>
            <span className="pl-[1rem] text-textGray">Major Project</span>
          </div>
          <div className="flex flex-col px-[1rem]">
            <h2 className="text-textBlack font-semibold">Academfiy</h2>
            <p>
              Project that school can manage their attendance , student
              classwork, students activity etc.
            </p>
          </div>
          <div className="flex bg-highColor w-full h-1 absolute bottom-0 left-[1px] card-border"></div>
        </div>
        <div className="card-shadow pb-[2rem] w-[30%] rounded-md relative card">
          <img src={proj} className="w-full" />
          <div className="flex items-center">
            <div className="w-[2rem] bg-textGray h-[2px] "></div>
            <span className="pl-[1rem] text-textGray">Major Project</span>
          </div>
          <div className="flex flex-col px-[1rem]">
            <h2 className="text-textBlack font-semibold">Academfiy</h2>
            <p>
              Project that school can manage their attendance , student
              classwork, students activity etc.
            </p>
          </div>
          <div className="flex bg-highColor w-full h-1 absolute bottom-0 left-[1px] card-border"></div>
        </div>
        <div className="card-shadow pb-[2rem] w-[30%] rounded-md relative card">
          <img src={proj} className="w-full" />
          <div className="flex items-center">
            <div className="w-[2rem] bg-textGray h-[2px] "></div>
            <span className="pl-[1rem] text-textGray">Major Project</span>
          </div>
          <div className="flex flex-col px-[1rem]">
            <h2 className="text-textBlack font-semibold">Academfiy</h2>
            <p>
              Project that school can manage their attendance , student
              classwork, students activity etc.
            </p>
          </div>
          <div className="flex bg-highColor w-full h-1 absolute bottom-0 left-[1px] card-border"></div>
        </div>
        <div className="card-shadow pb-[2rem] w-[30%] rounded-md relative card">
          <img src={proj} className="w-full" />
          <div className="flex items-center">
            <div className="w-[2rem] bg-textGray h-[2px] "></div>
            <span className="pl-[1rem] text-textGray">Major Project</span>
          </div>
          <div className="flex flex-col px-[1rem]">
            <h2 className="text-textBlack font-semibold">Academfiy</h2>
            <p>
              Project that school can manage their attendance , student
              classwork, students activity etc.
            </p>
          </div>
          <div className="flex bg-highColor w-full h-1 absolute bottom-0 left-[1px] card-border"></div>
        </div>
        <div className="card-shadow pb-[2rem] w-[30%] rounded-md relative card">
          <img src={proj} className="w-full" />
          <div className="flex items-center">
            <div className="w-[2rem] bg-textGray h-[2px] "></div>
            <span className="pl-[1rem] text-textGray">Major Project</span>
          </div>
          <div className="flex flex-col px-[1rem]">
            <h2 className="text-textBlack font-semibold">Academfiy</h2>
            <p>
              Project that school can manage their attendance , student
              classwork, students activity etc.
            </p>
          </div>
          <div className="flex bg-highColor w-full h-1 absolute bottom-0 left-[1px] card-border"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
