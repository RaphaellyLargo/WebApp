import React from "react";
import RowAndColumnSpacing from "../components/Grid/gridinfo";


const ThemeInfo = () => {
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
      <RowAndColumnSpacing />
    </div>
  );
};

export default ThemeInfo;
