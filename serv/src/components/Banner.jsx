import React from "react";
import { IoSearch } from "react-icons/io5";
import india from "../assets/india.png";
import heroImage from "../assets/hero1img.png";
import LocationInput from "../location/LocationInput";

const HomeContainer = () => {
  const locations = ["Prayagraj", "Delhi NCR", "Lucknow", "Banglore"];

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

      <div className="z-10 relative w-screen p-96 px-14 md:p-28 md:px-24">
        <div className="md:flex w-full justify-between items-center">
          <div className="w-72 m-56 translate-x-[700px]">
            {/* SearchBar */}
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
            </div>
          </div>
        </div>

        {/* LocationFetch Bar*/}
        <div className=" m-40 translate-y-[-385px] translate-x-[300px] flex items-center">
          <LocationInput />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
