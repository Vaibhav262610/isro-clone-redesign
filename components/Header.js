import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="flex ">
          <div className=" w-36 border-r-2 border-r-[#1d1d1d]">
            <div className=" h-screen flex flex-col justify-center items-center gap-8 pb-28 ">
              <div className="border-2 hover:bg-[#3b5998] duration-300 rounded-full p-2 w-fit">
                <FaFacebookF size={20} className=" fill-white " />
              </div>
              <div className="border-2 hover:bg-[#30bbb4] duration-300 rounded-full p-2 w-fit">
                <RiLinkedinFill size={20} className=" fill-white " />
              </div>
              <div className="border-2 hover:bg-[#00acee] duration-300 rounded-full p-2 w-fit">
                <BsTwitter size={20} className=" fill-white " />
              </div>
              <div className="border-2 hover:bg-[#ff0000] duration-300 rounded-full p-2 w-fit">
                <BsYoutube size={20} className=" fill-white " />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pb-28">
            <div className=" px-12 w-6/12">
              <h1 className="text-2xl font-black tracking-wide leading-9 text-white">
                Our vision is to harness space technology for national
                development, while pursuing space science research and planetary
                exploration.
              </h1>
              <button className="mt-12 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                Explore Space
              </button>
            </div>
            <div>
              <img
                src="/img/astronaut.png" 
                className="imgSpace w-9/12 "
                alt="Failed To Load"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
