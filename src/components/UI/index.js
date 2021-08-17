//importing styled-components
import styled from "styled-components";

//Components from Navbar
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pokemon Solid";
`;

export const StyledNavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 300px;
  margin-bottom: 5px
`;

export const StyledNavBackground = styled.img`
  height: 180px;
  width: 92%;
`;

export const StyledTitle = styled.h1`
  font-family: "Pokemon Solid";
  margin-top: -150px;
  font-size: 70px;
`;

export const StyledAbout = styled.h2`
  font-family: "Pokemon Solid";
  margin-top: -200px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: blue;
  hover {
  text-decoration: none;
  font-size: 120%;
  color: yellow;
`;

//Components from App
export const BtnTheme = styled.button`
  position: absolute;
  top: 2vh;
  right: 120px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
export const StyledIcon = styled.img`
  height: 25px;
  width: 25px;
`;

//Components from Card
export const StyledLoading = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 25px;
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  height: 280px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin: 5px;
  align-content: center;
  border: 1px solid black;
  border-radius: 4px;
`;

export const StyledType = styled.div`
  margin: 5px;
  padding: 3px;
  font-weight: bold;
  color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
`;

// Components from Home
export const StyledLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const StyledTextField = styled.input`
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  placeholder: "Search Pokemon";
  color: ${({ theme }) => theme.text};
  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`;
