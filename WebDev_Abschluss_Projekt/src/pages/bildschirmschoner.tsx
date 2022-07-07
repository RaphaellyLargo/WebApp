import React from "react";
import GridSchoner from "../components/Grid/gridschoner";

const BildschirmSchoner = () => {
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
      <GridSchoner />
    </div>
  );
};

export default BildschirmSchoner;
