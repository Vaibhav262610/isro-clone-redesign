import React from "react";

const AboutNav = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-[#121212]">
        <div className="flex w-10/12 justify-around bg-[#121212] text-white h-28 items-center">
          <h1 className="text-lg font-bold">
            Department of Space, Indian Space Research Organisation
          </h1>

          <button className=" duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutNav;
