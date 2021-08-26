//importing styled-components
import styled from "styled-components";

//Components from Navbar
export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  background-color: #d01e36;
  margin-bottom: 15px;
  @media (max-width: 600px) {
    height: 150px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 179px;
  height: 48px;
`;

export const NavLink = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    padding: 0px 20px;
    @media (max-width: 600px) {
      padding: 5px 20px;
    }
  }
  li a {
    color: #fff;
  }
  li a {
    transition: all 0.3s ease 0s;
  }
  li a:hover {
    color: #000;
  }
`;

export const PartyButton = styled.button`
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: rgba(0, 136, 169, 0.8);
  }
`;

//Components from App
export const BtnTheme = styled.button`
  position: absolute;
  top: 43px;
  right: 100px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    right: 40px;
    top: 60px;
  }
`;

//Components from ThemeSwitcher
export const StyledIcon = styled.img`
  height: 25px;
  width: 25px;
`;

//Components from Card
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
  border: 1px solid  ${({ theme }) => theme.text};
  margin: 5px;
  align-content: center;
  border-radius: 4px;
  :hover {
    border: 1px solid lightgrey;
  }
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const StyledLoading = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 25px;
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
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  placeholder: "Search Pokemon";
  color: ${({ theme }) => theme.text};
  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`;

//Components from PokemonDetains
//Header
export const MainTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  paddind-right: 15px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 48px;
  color: ${({ theme }) => theme.text};
`;

export const BtnParty = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    right: 80px;
    top: 173px;
  }
`;

export const InfoType = styled.section`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  height: 30px;
  width: 100%;
  padding: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const StyledInfo = styled.section`
  display: flex;
  margin: ${({ theme }) => theme.text};
`;
//Basic Information
export const ImgContainer = styled.section`
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  height: 460px;
  width: 430px;
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

export const StyledImd420 = styled.img`
  padding: 5px;
  weight: 420px;
  height: 450px;
`;

export const InfoContainer = styled.section`
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  height: 460px;
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const EvoInfoContainer = styled.section`
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  height: 460px;
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const StyledContainerTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: ${({ theme }) => theme.text};
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-itens: center;
  align-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

export const InfoCard = styled.section`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  height: 150px;
  width: 150px;
  padding: 15px;
  display: flex;
  margin: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid black;
  border-radius: 4px;
`;

export const InfoLabel = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  line-height: 60px;
`;

export const InfoLabelDisplay = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  text-align: center;
`;

//Components from PokemonPartyCard // 0 0 90px
export const PokemonUIBorder = styled.section`
  display: flex;
  align-items: flex-start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 90px;
  margin: 10px;
  padding-left: 15px;
  height: 95px;
  width: 250px;
`;

export const PokemonUICell = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
`;

export const Sprite = styled.img`
  height: 96px;
  width: 96px;
  animation: bouncing 0.3s ease infinite;
  @keyframes bouncing {
    to {
      transform: translateX(4px);
      transform: translateY(-9px);
    }
  }
`;

export const PokemonName = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.text};
  text-height: bold;
  padding-left: 5px;
  text-transform: capitalize;
  font-size: 20px;
`;

export const PokemonInfo = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const DeleteAll = styled.button`
  text-transform: capitalize;
  font-size: 16px;
  margin: 25px;
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: rgba(0, 136, 169, 0.8);
  }
`;

//Components from 404
export const ErrorTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  cursor: default;
  text-transform: none;
  font-size: 42px;
  line-height: 6;
  font-family: "Flexo-Regular", arial, sans-serif;
  @media (max-width: 600px) {
    line-height: 2;
  }
`;

export const ErrorP = styled.h4`
  color: ${({ theme }) => theme.text};
  cursor: default;
  text-transform: none;
  font-family: "Flexo-Regular", arial, sans-serif;
`;
export const Container404 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Block1 = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ErrorImg = styled.img`
  width: ${Math.floor(1024 / 3)}px;
  height: ${Math.floor(1603 / 3)}px;
  @media (max-width: 600px) {
    width: ${Math.floor(1024 / 5)}px;
    height: ${Math.floor(1603 / 5)}px;
  }
`;

//Components from Generation
export const TypeDiv = styled.div`
  background: ${({ theme }) => theme.body};
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

//Components from GenerationhForm

export const StyledSelect = styled.select`
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  font-size: 1.1rem;
  margin: 15px;
  padding: 1em 1.1em;
  border-radius: 15px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  @media (max-width: 600px) {
    padding: 1em;
    margin: 0.5em;
  }
`;

export const AdvancedSubtitle = styled.h2`
  color: ${({ theme }) => theme.text};
  cursor: default;
  margin-bottom: 15px;
  text-transform: capitalize;
  font-size: 36px;
  @media (max-width: 600px) {
    padding: 0.5em;
    text-align:center;
  }
`;

export const StyledMoves = styled.div`
  margin: 5px;
  padding: 3px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  border: 1px solid #f1f1f1;
  border-radius: 15px;
`;

//Components from footer
export const StyledFooter = styled.footer`
  padding: 20px;
  background: litghgrey;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;

export const StyledFooterLogo = styled.img`
  width: 75px;
  height: 24px;
`;

export const StyledFooterTitle = styled.h4`
  color: #396bba;
  text-align: center;
  margin-left:25px;
`;

export const StyledFooterIcons = styled.img`
  width: 36px;
  height: 36px;
  margin-right:50px;
  margin-top:10px;
`;

export const StyledFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;
