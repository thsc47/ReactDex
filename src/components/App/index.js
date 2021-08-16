//importing react and library
import React, { useState } from "react";
//importing themes
import { lightTheme, darkTheme } from "../UI/Themes";
// importing Components
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { BtnTheme } from "../UI";
import ThemeSwitcher from "../ThemeSwitcher";
import Home from "../Home";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <ThemeSwitcher theme={theme}/>
      </BtnTheme>
      <Home />
    </ThemeProvider>
  );
}

export default App;
