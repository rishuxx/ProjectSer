import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "../assets/Hdecors.png";
import makeup from "../assets/makeup.png";
import mens from "../assets/mens.png";
import menpower from "../assets/menpower.png";
import decors from "../assets/decors.png";

const serviceItem = [
  { id: 12, title: "Woman's Salon", image: makeup },
  { id: 13, title: "Man's Salon", image: mens },
  { id: 14, title: "Menpower", image: menpower },
  { id: 15, title: "Ocassional Decors", image: decors },
];

const Cards = ({ item }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full hover:-translate-y-1 duration-400 transition-all">
      <div>
        <img src={item.image} alt="" className="w-16 p-2" />
      </div>
      <div className="mt-1 space-y-8">
        <h1>{item.title}</h1>
      </div>
    </div>
  );
};

const CatOndemand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* card section */}
      <div className="sticky z-10">
        <div className="text-center bg-yellow relative -top-24 left-1/3 translate-x-9 translate-y-1 rounded-lg w-32">
          <p className=" text-gray-600 tracking-wide font-semibold text-lg">
            OnDemand
          </p>
        </div>
        <div className="relative flex w-2/6 h-28 -top-36 bg-white m-auto rounded-3xl flex-col sm:flex-row flex-wrap justify-center gap-20 items-center mt-12 font-normal shadow-2xl text-sm">
          <Slider
            {...settings}
            className="relative flex w-full h-full justify-center items-center"
          >
            {serviceItem.map((item, i) => (
              <Cards key={i} item={item} />
            ))}
          </Slider>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full -mt-48">
      {" "}
      <div className="w-[1920px] h-[1080px]">
        <img src={heroImage} alt="Hero Image" className="w-full" />
      </div>
      <div className="absolute top-1/3 ml-28 transform -translate-y-1/2 text-white text-left">
        {" "}
        <h2 className="md:text-4xl text-xl font-bold md:leading-snug leading-snug">
          "Bringing Your
          <br />
          <span className="text-yellow">Celebration</span> Dreams
          <br />
          to Vibrent Realities <span className="text-yellow text-5xl">.</span>"
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Decorating your Place for any Special Occassions.
        </p>
      </div>
    </div>
  );
};

export default CatOndemand;