import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 890px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = () => {
  return (
    <Ul>
      <ul>
        <li>Theme Information</li>
        <li>Bilder und Bildschirmschoner</li>
        <li>Styles und Töne</li>
        <li>Kundendateien</li>
        <li>Sign In</li>
      </ul>
    </Ul>
  );
};

export default RightNav;
