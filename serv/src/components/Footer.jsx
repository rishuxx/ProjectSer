import React from "react";
import heroImg from "../assets/Footer.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="w-full h-auto">
        <img
          src={heroImg}
          alt="Footer Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
