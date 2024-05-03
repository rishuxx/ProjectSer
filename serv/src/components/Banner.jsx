import React from "react";
import { IoSearch } from "react-icons/io5";
import india from "../assets/india.png";
import heroImage from "../assets/hero1img.png";

const HomeContainer = () => {
  const locations = ["Allahabad", "Delhi NCR", "Lucknow", "Banglore"];

  return (
    <div className="relative w-full h-[771px]">
      {/* Hero Image */}
      <div className="absolute top-0 left-0 w-[1920px] h-[771px]">
        <img
          src={heroImage}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 text-white text-center">
        <h1 className="md:text-5xl text-2xl font-bold md:leading-snug leading-snug">
          "Elevate Your <span className="text-yellow">Home</span> with Expert
          Care <span className="text-yellow font-extrabold">.</span>"
        </h1>
      </div>

      <div className="bg-slate-100"></div>

      <div className="z-10 relative w-screen p-96 px-4 md:p-28 md:px-10">
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="w-72 m-56 translate-x-[790px]">
            <div className="relative flex items-center w-full translate-y-[65px] h-[70px] rounded-2xl focus-within:shadow-2xl bg-white overflow-hidden">
              <div className="grid place-items-center text-2xl h-full w-20 text-gray-500">
                <IoSearch />
              </div>
              <input
                className="peer h-full w-full outline-none text-lg text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search for Services"
              />
              ,
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between md:hidden w-full">
          <div className="m-16 translate-x-[1rem]">
            <div className="relative flex items-center w-60 h-16 rounded-2xl focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center text-2xl h-full w-20 text-gray-500">
                <IoSearch />
              </div>
              <input
                className="peer h-full w-full outline-none text-lg text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search for Services"
              />
            </div>
          </div>
        </div>

        <div className="w-72 m-40 translate-y-[-354px] translate-x-[400px] flex items-center">
          <div className="fixed h-[70px] w-full rounded-2xl bg-white overflow-hidden">
            <div className="mt-6">
              <select className="h-full px-4 text-lg text-gray-500 outline-none ml-28">
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="absolute -mt-12">
              <img src={india} alt="Indian Flag Icon" className="h-16 ml-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
