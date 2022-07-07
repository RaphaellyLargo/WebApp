import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
background: #00385e;
height: 80px;
display: flex;
justify-content: space-between;
padding: 1rem; calc((100vw - 1000px) / 2);
z-index: 10;

/* 3rd Nav 
justify-content: flex-start;*/
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 890px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 130px;
  /* margin-right: -24px; */

  /* 2nd Nav */
  /*margin-right: 24px; */

  /*3rd Nav 
  width: 60vw;
  white-space: nowrap; */

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* 3rd nav 
  justify-content: flex-end;
  width: 100vw;
  background red;*/

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 14px; 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const HamburgerNav = styled.nav`
    width: 100%
    height: 65px;
    border-bottom: 2px solid #f1f1f1;
    padding 0 20px;
    display: flex;
    justify-content: space-between;
`;
