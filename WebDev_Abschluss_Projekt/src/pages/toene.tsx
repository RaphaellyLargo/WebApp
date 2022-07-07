import React from "react";
import GridTöne from "../components/Grid/gridtöne";

const Toene = () => {
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
      <GridTöne />
    </div>
  );
};

export default Toene;
