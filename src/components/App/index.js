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
import Navbar from "../Navbar"
import Home from "../Home";
import PokemonDetails from "../../PokemonDetails";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar />
        <BtnTheme onClick={toggleTheme}>
          <ThemeSwitcher theme={theme} />
        </BtnTheme>
        <Switch>
          <Route path = "/" component = {Home} exact />
          <Route path = "/details" component = {Home} exact />
          <Route path = "/details/:name" component = {PokemonDetails} />
        </Switch>
      </ThemeProvider>
  );
}
export default App;
