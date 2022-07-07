import React from "react";
import SaveButton from "../components/buttons/save-button";
import GridBild from "../components/Grid/gridbild";
import CustomizedTables from "../components/tables/table";

const BackgroundImage = () => {
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
      <GridBild />
    
    </div>
  );
};

export default BackgroundImage;
