import React from "react";
 

const AboutMain = () => {
  return (
    <>
      <div className="flex justify-center  mt-24">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex flex-col gap-36 sm:mr-28 mr-0 sm:ml-0 ml-8 w-10/12 sm:w-3/12">
            <div className="text-white  font-extrabold">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-4xl">
                PSLV
              </h1>
              <h2 className="text-md mt-8">
                Polar Satellite Launch Vehicle (PSLV) is the third generation
                launch vehicle of India. It is the first Indian launch vehicle
                to be equipped with liquid stages. After its first successful
                launch in October 1994&lsquo; PSLV emerged as the reliable and
                versatile workhorse launch vehicle of India with 39
                consecutively successful missions by June 2017.
              </h2>
            </div>
            <div className="text-white  font-extrabold">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-3xl">
                First Stage: PS1
              </h1>
              <h2 className="text-md mt-8">
                PSLV uses the S139 solid rocket motor that is augmented by 6
                solid strap-on boosters.
                <br />
                <br />
                Engine : S139
                <br />
                Fuel : HTPB
                <br />
                Max. Thrust : 4800 kN
                <br />
                <button className="mt-8 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                  Learn More
                </button>
              </h2>
            </div>
            <div className="text-white  font-extrabold">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-3xl">
                Third Stage: PS3
              </h1>
              <h2 className="text-md mt-8">
                Third Stage: PS3 The third stage of PSLV is a solid rocket motor
                that provides the upper stages high thrust after the atmospheric
                phase of the launch.
                <br />
                Fuel : HTPB
                <br />
                Max. Thrust : 240 kN
                <br />
                <button className="mt-8 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                  Learn More
                </button>
              </h2>
            </div>
            <div className="text-white  font-extrabold">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-3xl">
                Strap-on Motors
              </h1>
              <h2 className="text-md mt-8">
                PSLV uses 6 solid rocket strap-on motors to augment the thrust
                provided by the first stage in its PSLV-G and PSLV-XL variants.
                However&lsquo; strap-ons are not used in the core alone version
                (PSLV-CA).
                <br />
                Fuel : HTPB
                <br />
                Max. Thrust : 719 kN
                <br />
                <button className="mt-8 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                  Learn More
                </button>
              </h2>
            </div>
            <div className="flex flex-col gap-14">
              <div className="text-white font-bold gap-12 flex items-center">
                <div className="flex flex-col">
                  <h2  className="text-sm">ENGINE</h2>
                  <h1 className="text-6xl">PS4</h1>
                </div>
                <div className="flex flex-col">
                  <h2  className="text-sm">BURNTIME</h2>
                  <h1 className="text-6xl">
                    162<span className="text-2xl sm:text-4xl">sec</span>{" "}
                  </h1>
                </div>
              </div>
                <div className="text-white font-bold  flex items-center">
                  <div className="flex flex-col">
                    <h2  className="text-sm">MAX THRUST</h2>
                    <h1 className="text-6xl">7.6 x 2 kN</h1>
                  </div>
                </div>
            </div>
          </div>
          <div>
            <img src="/img/pslv.png" className=" pb-36 pt-24 sm:pt-0 sm:ml-0 ml-20" />
          </div>
          <div className="flex flex-col gap-36 sm:mr-28 mr-0 sm:ml-0 ml-8 w-10/12 sm:w-3/12">
            <div className="text-white  font-extrabold">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-3xl">
                Payload to SSPO: 1&lsquo;750 kg
              </h1>
              <h2 className="text-md mt-8">
                PSLV earned its title &apos; the Workhorse of ISRO&apos; through
                consistently delivering various satellites to Low Earth Orbits&lsquo;
                particularly the IRS series of satellites. It can take up to
                1&lsquo;750 kg of payload to Sun-Synchronous Polar Orbits of 600 km
                altitude.
              </h2>
              <button className="mt-8 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                Learn More
              </button>
            </div>
            <div className="text-white  font-extrabold">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-3xl">
                Second Stage: PS4
              </h1>
              <h2 className="text-md mt-8">
                Fourth Stage: PS4 The PS4 is the uppermost stage of PSLV&lsquo;
                comprising of two Earth storable liquid engines.
                <br />
                <br />
                Engine : 2 x PS-4
                <br />
                Fuel : MMH + MON
                <br />
                Max. Thrust : 7.6 x 2 kN
                <br />
                <button className="mt-8 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                  Learn More
                </button>
              </h2>
            </div>
            <div className="flex flex-col gap-14">
              <div className="text-white font-bold gap-12 flex items-center">
                <div className="flex flex-col">
                  <h2 className="text-sm">ENGINE</h2>
                  <h1 className="text-6xl">S139</h1>
                </div>
                <div className="flex flex-col">
                  <h2  className="text-sm">BURNTIME</h2>
                  <h1 className="text-6xl">
                    397<span className="text-2xl sm:text-4xl">sec</span>{" "}
                  </h1>
                </div>
              </div>
                <div className="text-white font-bold  flex items-center">
                  <div className="flex flex-col">
                    <h2  className="text-sm">MAX THRUST</h2>
                    <h1 className="text-6xl">4800 kN</h1>
                  </div>
                </div>
                  {/* <img src='/img/engines.png'  alt='hello' className="  h-64 w-fit ml-32  " /> */}
            </div>
            <div className="text-white  font-extrabold pb-24 sm:pb-0">
              <h1 className="tracking-wide border-b-4 border-b-white w-fit text-3xl">
                Fourth Stage: PS4
              </h1>
              <h2 className="text-md mt-8">
                Fourth Stage: PS4 The PS4 is the uppermost stage of PSLV&lsquo;
                comprising of two Earth storable liquid engines.
                <br />
                Engine : 2 x PS-4
                <br />
                Fuel : MMH + MON
                <br />
                Max. Thrust : 7.6 x 2 kN
                <br />
                <button className="mt-8 duration-300 hover:bg-white hover:text-black text-white border-2 border-white rounded-lg px-4 py-2 ">
                  Learn More
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
