import React, { Component } from "react";
import styled from "styled-components";

import typeBackground from "./typeBackground";
import api from "../../api/api";
//Using the styled-components
const StyledImg = styled.img`
  height: 75px;
  width: 75px;
`;

const StyledDiv = styled.div`
  height: 150px;
  width: 150px;
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

const StyledType = styled.div`
  margin: 5px;
  padding:3px;
  font-weight: bold;
  color: #FFF;
  border-radius: 15px
`;


class Card extends Component {
  //Creating the necessaring states
  state = {
    pokemonImg: "",
    pokemonType: "",
    pokemon: [],
  };

  //Calling the API
  async componentDidMount() {
    const { name } = this.props;
    const { data } = await api.get(`pokemon/${name}`);
    this.setState({ pokemon: data });
    this.setState({ pokemonImg: data.sprites.other["official-artwork"].front_default });
    this.setState( { pokemonType: (data.types[0].type.name).toLowerCase() } )
  }

  render() {
    const { pokemon, pokemonImg, pokemonType } = this.state;
    return (
        <StyledDiv>
        <StyledImg src={pokemonImg} alt="Imagem descritiva do Pokemon" />
          <h4>{pokemon.name}</h4>
          <StyledType 
          style={{backgroundColor: `${typeBackground[pokemonType]}`, }}>{pokemonType}</StyledType>
        </StyledDiv>
    );
  }
}

export default Card;
