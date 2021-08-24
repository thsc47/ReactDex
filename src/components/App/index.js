//importing react and library
import React, { useState } from "react";
import { Switch, Route } from "react-router";
//importing themes
import { lightTheme, darkTheme } from "../UI/Themes";
// importing Components
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle";
//import Navbar from "../Navbar"
import { BtnTheme } from "../UI";
import ThemeSwitcher from "../ThemeSwitcher";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Home from "../Home";
import PokemonDetails from "../PokemonDetails";
import MyParty from "../MyParty"
import  Error404  from "../Error404";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar  />
        <BtnTheme onClick={toggleTheme}>
          <ThemeSwitcher theme={theme} />
        </BtnTheme>
        <Switch>
          <Route path = "/" component = {Home} exact />
          <Route path = "/details" component = {Home} exact />
          <Route path = "/details/:name" component = {PokemonDetails} />          
          <Route path = "/details/:name" component = {PokemonDetails} />
          <Route path = "/my-party" component = {MyParty} />
          <Route  component = {Error404} />
        </Switch>
        < Footer />
      </ThemeProvider>
  );
}
export default App;
