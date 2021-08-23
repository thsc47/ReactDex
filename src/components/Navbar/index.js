import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/images/logo.png";
import { Header, Logo, NavLink, PartyButton } from "../UI";

const Navbar = () => {
  return (
    <>
      <Header>
        <Link to={"/"}>
          <Logo src={NavLogo} alt="ReactDex logo" />
        </Link>
        <nav>
          <NavLink>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Advanced Search</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
          </NavLink>
        </nav>
        <Link to={"/"}>
          <PartyButton>My Party</PartyButton>
        </Link>
      </Header>
    </>
  );
};

export default Navbar;

{
  /* <StyledNav>
        <StyledNavBackground src={Navbackground} alt="logo" />
      </StyledNav>

      <StyledNavLink>
        <StyledLink to="/home">
          <StyledNavTitle>ReactDex</StyledNavTitle>
        </StyledLink>
        <StyledLink to="/about">
          <StyledAbout>About us</StyledAbout>
        </StyledLink>
      </StyledNavLink> */
}
