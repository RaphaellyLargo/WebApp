import React from "react";
import GridKunden from "../components/Grid/gridkunden";

const Kundendateien = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${require("../components/Image/bg1.jpg")})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        color: "white",
        backgroundSize: "cover",
      }}
    >
      <GridKunden />
    </div>
  );
};

export default Kundendateien;
