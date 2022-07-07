import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/themeinfo";
import ContactUs from "./pages/styles";
import SignUp from "./pages/kundendateien";
import PrimarySearchAppBar from "./components/Navbar/Appbar";
import ThemeInfo from "./pages/themeinfo";
import Styles from "./pages/styles";
import BildschirmSchoner from "./pages/bildschirmschoner";
import Kundendateien from "./pages/kundendateien";
import Toene from "./pages/toene";
import Bilder from "./pages/toene";
import Start from "./pages/start";
import BackgroundImage from "./pages/backgroundimg";
import DrawerAppBar from "./components/Navbar/DrawerAppbarResponsive";
import { AppBar } from "@mui/material";
import SaveButton from "./components/buttons/save-button";

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/themeinfo" element={<ThemeInfo />} />
        <Route path="/backgroundimg" element={<BackgroundImage />} />
        <Route path="/bildschirmschoner" element={<BildschirmSchoner />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/toene" element={<Toene />} />
        <Route path="/kundendateien" element={<Kundendateien />} />
      </Routes>
    </Router>
  );
}

export default App;
