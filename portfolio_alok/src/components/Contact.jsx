import React, { useRef } from "react";
import "./Contact.css";
import draw from "../images/draw2.svg";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";

const Contact = () => {
  const form = useRef();

  const checkPres = () => {
    console.log("press");
  };

  function submitHandler(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xcoiplo",
        "template_2p7gwpd",
        form.current,
        "VEMquPsv78FU1CDfU"
      )
      .then(
        (result) => {
          console.log("hello");
          toast.success(
            <div className="alert success-alert">
              Message sent successfully.
              <span>
                <BsEnvelopeAt /> alokrajsin@gmail.com
              </span>
            </div>
          );
        },
        (error) => {
          toast.error(
            <div className="alert rejection-alert">
              <span className="alert-icon">&#128683;</span>
              Please Fill Mandatory fields
            </div>
          );
        }
      );
  }
  return (
    <div className="max-w-full mt-[6rem] mb-[14rem] relative" id="contact">
      <div className="w-[65%] h-[40rem] bg-textBlack right-0 absolute bottom-0 top-0"></div>
      <div className="max-w-[90%] flex felx-col justify-between items-center mx-auto gap-2 relative">
        {/* left-part */}
        <div className="relative bg-[#d9d9d9] max-w-[20rem] flex flex-col justify-center items-center mx-auto text-center left-[8rem] top-[1rem] rounded-md">
          <h2 className="font-bold text-[30px] mt-[4rem] mb-[2rem]">
            Contact <span className="text-highColor">Me</span>
          </h2>
          <p className="text-[15px] pb-[4rem] px-[2rem]">
            I will read all emails. Send me any message you want and I’ll get
            back back to you.
          </p>
          <div className="flex bg-highColor w-[17rem] h-1 absolute bottom-0 left-[2px]"></div>
        </div>
        <div className="absolute left-[14rem] top-[28rem]">
          <img src={draw} className="w-[100px]" />
        </div>
        <div className="absolute text-2xl flex items-center gap-2 left-[14rem] top-[36rem]">
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

        {/* right-part  */}
        <div className="flex justify-between mx-auto ml-[4rem]">
          <form
            ref={form}
            onSubmit={submitHandler}
            className="ml-[8rem] max-w-[60%] mt-[6rem]"
          >
            <h2 className="text-[#fff] text-[20px] mb-[2rem] ">
              Send Me A Message
            </h2>
            <div className="flex flex-wrap mt-2 ">
              <div className="flex gap-12">
                <div className="flex flex-col">
                  <label htmlFor="fName" className="text-[#fff] mb-[1rem]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="user_fName"
                    className="border border-textGray outline-none bg-[#000] px-2 py-3 caret-highColor text-[#fff] rounded-md w-[13rem]"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lName" className="text-[#fff] mb-[1rem]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="user_lName"
                    className="border border-textGray outline-none bg-[#000] px-2 py-3 caret-highColor rounded-md text-[#fff] w-[13rem]"
                    required
                  />
                  flex-col
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-[#fff] mb-[1rem]">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="border rounded-md border-textGray outline-none bg-[#000] px-2 py-3 caret-highColor text-[#fff] w-[30rem]"
                  required
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="text-[#fff] mb-[1rem]">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="border rounded-md border-textGray outline-none bg-[#000] px-2 py-3 caret-highColor text-[#fff] w-[30rem] resize-none"
                  required
                />
              </div>
              <button
                className="flex justify-center items-center bg-highColor text-textWhite px-[1.5rem] py-[0.6rem] rounded-md hover:bg-[#fff] hover:text-[#000] transition-all delay-75 ease-in cursor-pointer text-center mt-[2rem] gap-4"
                type="submit"
              >
                <CiLocationArrow1 /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
