import React from "react";
import "../components/Image/background1.jpg";
import "./body.css";

const Start = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${require("../components/Image/bg1.jpg")})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        color: "white",
        backgroundSize: "cover",
      }}
    >
      <h1>G7 Theme Editor</h1>
      
    </div>
  );
};

export default Start;
