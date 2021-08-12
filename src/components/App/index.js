//importing react and library
import React from "react";
import styled from "styled-components";

// importing Components
import GlobalStyle from "../GlobalStyle";
import Card from "../Card/index.js";

//importing reset
const Display = styled.div`
  display: flex;
`

function App(){
  return (
    <>
    <GlobalStyle />
      <Display>
      <Card name = 'ditto'/>
      <Card name = 'pikachu'/>
      <Card name = 'charizard'/>
      <Card name = 'bulbasaur'/>
      </Display>
    </>
  )
}

export default App;
