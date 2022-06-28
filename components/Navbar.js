import React from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/dist/client/image";
import { MdOutlineShortText } from 'react-icons/md'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center border-b-2 border-b-[#1d1d1d]">
        <div className="h-24 flex justify-between w-11/12  items-center   ">
          <div>
            
            <img src="/img/logo.svg" className="sm:h-16 h-16 cursor-pointer" />
          </div>
          <div className="md:flex gap-6 hidden">
            <h2 className=" cursor-pointer duration-300 hover:scale-90 text-white font-semibold text-lg">
              Home
            </h2>
            <h2 className=" cursor-pointer text-white font-semibold text-lg duration-300 hover:scale-90">
              About
            </h2>
            <h2 className=" cursor-pointer text-white font-semibold text-lg duration-300 hover:scale-90">
              Updates
            </h2>
            <h2 className=" cursor-pointer text-white font-semibold text-lg duration-300 hover:scale-90">
              Career
            </h2>
            <h2 className=" cursor-pointer text-white font-semibold text-lg duration-300 hover:scale-90">
              Shop
            </h2>
          </div>
          <div className=" hidden md:flex gap-3 items-center bg-[#121212] px-4 py-2 rounded-3xl  cursor-text text-white ">
            <BsSearch size={17} />
            <input className="bg-transparent outline-none" />
          </div>
          <div className="md:hidden flex ">
            <MdOutlineShortText className="fill-white " size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
