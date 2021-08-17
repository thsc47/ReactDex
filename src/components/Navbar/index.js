import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Navbackground from "../../assets/images/navbackground.gif";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pokemon Solid";
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 300px;
`;

const NavBackground = styled.img`
  height: 180px;
  width: 92%;
`;

const Titulo = styled.h1`
  font-family: "Pokemon Solid";
  margin-top: -150px;
  font-size: 70px;
`;

const About = styled.h2`
  font-family: "Pokemon Solid";
  margin-top: -200px;
`;

const A = styled.a`
  text-decoration: none;
  color: blue;
  hover {
  text-decoration: none;
  font-size: 120%;
  color: yellow;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBackground src={Navbackground} alt="logo" />
      </Nav>

      <NavLink>
        <Link to="/home">
          <Titulo>ReactDex</Titulo>
        </Link>
        <Link to="/about">
          <About>About us</About>
        </Link>
      </NavLink>
    </>
  );
};

export default Navbar;
