import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import RightNav from "./RightNav";
import Burger from "./Burger";

const isActiveStyle = {
  textDecoration: "none",
  color: "red",
};

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../images/Gantner-logo.png")} alt="Gantner-logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            to="/about"
          >
            Theme Information
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            to="/services"
          >
            Bilder und Bildschirmschoner
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            to="/contact-us"
          >
            Styles und Töne
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? isActiveStyle : {})}
            to="/signup"
          >
            Kundendateien
          </NavLink>
        </NavMenu>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
        <Burger />
      </Nav>
    </>
  );
};

export default Navbar;
