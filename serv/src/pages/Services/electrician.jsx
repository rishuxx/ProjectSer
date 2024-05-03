import React from "react";
import electricianImage from "../../assets/ocean.jpg"; // Import the custom image

const Electrician = () => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src={electricianImage}
        alt="Electrician"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Electrician Services
        </h2>
        <p
          style={{
            color: "white",
            fontSize: "18px",
            textShadow: "1px 1px 2px #000000",
          }}
        >
          Our experienced electricians provide a wide range of electrical
          services for both residential and commercial properties.
        </p>
      </div>
    </div>
  );
};

export default Electrician;
