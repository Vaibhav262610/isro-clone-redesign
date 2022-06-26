import React from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/dist/client/image";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center border-b-2 border-b-[#1d1d1d]">
        <div className="h-24 flex justify-between w-11/12  items-center   ">
          <div>
            
            <Image src="/img/logo.svg" width="100%" height="100%" className="h-16 cursor-pointer" />
          </div>
          <div className="flex gap-6">
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
          <div className=" flex gap-3 items-center bg-[#121212] px-4 py-2 rounded-3xl  cursor-text text-white ">
            <BsSearch size={17} />
            <input className="bg-transparent outline-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
