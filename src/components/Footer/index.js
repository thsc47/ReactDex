import React from "react";
import Logo from "../../assets/images/logo.png";
import Pokeapi from "../../assets/images/pokeApi.svg";
import Heroku from "../../assets/images/heroku.svg";
import GitHub from "../../assets/images/github.svg";
import {
  StyledFooter,
  StyledFooterTitle,
  StyledFooterIcons,
  StyledFooterLogo,
  StyledFooterDiv
} from "../UI";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterDiv>
        <StyledFooterLogo src={Logo} />
        <StyledFooterTitle> Gonna catch them all!</StyledFooterTitle>
      </StyledFooterDiv>
      <StyledFooterDiv>
        <a href="https://github.com/thsc47/ReactDex">
          <StyledFooterIcons src={GitHub} />
        </a>
        <a href="https://pokeapi.co/">
          <StyledFooterIcons src={Pokeapi} />
        </a>
        <a href="https://www.heroku.com/">
          <StyledFooterIcons src={Heroku} />
        </a>
      </StyledFooterDiv>
    </StyledFooter>
  );
};

export default Footer;
