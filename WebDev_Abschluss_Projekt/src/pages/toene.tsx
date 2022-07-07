import React from "react";

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
      <h1>Töne</h1>
    </div>
  );
};

export default Toene;