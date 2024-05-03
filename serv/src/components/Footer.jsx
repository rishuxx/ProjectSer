import React from "react";
import hero from "../assets/Footer.png";

const Footer = () => {
  return (
    <div className="relative w-full -mt-1">
      <div className="w-[1920px] h-[723px]">
        <img src={hero} alt="Hero Image" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
