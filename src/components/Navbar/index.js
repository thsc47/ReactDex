
import React from "react";
import { Link } from "react-router-dom";
import Navbackground from "../../assets/images/navbackground.gif";
import { StyledNav, StyledNavLink, StyledNavBackground, StyledNavTitle, StyledAbout, StyledLink,  } from "../UI";

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <StyledNavBackground src={Navbackground} alt="logo" />
      </StyledNav>

      <StyledNavLink>
        <StyledLink to="/home">
          <StyledNavTitle>ReactDex</StyledNavTitle>
        </StyledLink>
        <StyledLink to="/about">
          <StyledAbout>About us</StyledAbout>
        </StyledLink>
      </StyledNavLink>
    </>
  );
};

export default Navbar;