import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import Image from "next/image";

const Header2 = () => {
  return (
    <>
      <div className="header visible md:hidden">
        <Navbar />
        <div className="flex ">
          <div className="flex flex-col mt-28 justify-center items-center pb-8">
            <div className=" px-12">
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
                className="imgSpace w-9/12 mt-20 ml-12   "
                alt="Failed To Load"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
