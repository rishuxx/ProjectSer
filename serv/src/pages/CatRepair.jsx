import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "../assets/Hpainting.png";
import tv from "../assets/tv.png";
import fan from "../assets/fan.png";
import washing from "../assets/washing.png";
import ac from "../assets/ac.png";
import ro from "../assets/ro.png";
import { Link } from "react-router-dom";

const serviceItem = [
  { id: 7, title: "TV Repair", image: tv, link: "tv-repair" },
  { id: 8, title: "Cooler/Fan Repair", image: fan, link: "fan-repair" },
  { id: 9, title: "Washing Machine", image: washing, link: "wm-repair" },
  { id: 10, title: "AC Repair", image: ac, link: "ac-repair" },
  { id: 11, title: "RO Repair", image: ro, link: "ro-repair" },
];

const Cards = ({ item }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full hover:-translate-y-1 duration-400 transition-all">
      <div>
        <Link to={`/${item.link}`}>
          <img src={item.image} alt="" className="w-16 p-2" />
        </Link>
      </div>
      <div className="mt-1 space-y-8">
        <Link to={`/${item.link}`}>
          <h1>{item.title}</h1>
        </Link>
      </div>
    </div>
  );
};

const CatRepair = () => {
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
            Repair
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
          "Brushing Dreams
          <br />
          into <span className="text-yellow">Colorful</span>
          <br />
          Realities <span className="text-yellow text-5xl">.</span>"
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Ignite Your House Painting Journey from{" "}
          <span className="text-yellow">₹199.</span>
        </p>
      </div>
    </div>
  );
};

export default CatRepair;
