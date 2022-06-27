import React from "react";

const AboutNav = () => {
  return (
    <>
      <div className="flex  justify-center w-full bg-[#121212]">
        <div className="flex sm:flex-row gap-4 flex-col  w-10/12 justify-around bg-[#121212] text-white sm:h-32 h-40 items-center sm:p-0 pb-8">
          <h1 className="text-lg font-bold pt-8 ml-8 sm:ml-0 sm:pt-0 ">
            Department of Space, Indian Space Research Organisation
          </h1>

          <button className=" duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2   ">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutNav;
