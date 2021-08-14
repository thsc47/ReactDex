//importing react and library
import React from "react";

// importing Components
import GlobalStyle from "../GlobalStyle";
import Navbar from '../Navbar';
import Home from "../Home";



function App(){
  return (
    <>    
    <GlobalStyle />
    <Navbar />
    <Home />
    </>
  )
}

export default App;
