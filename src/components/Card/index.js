import React, { Component } from "react";
import styled from "styled-components";

import typeBackground from "./typeBackground";
import api from "../../api/api";
import LoadingImg from "../../assets/images/loading.gif";

//Using the styled-components
const StyledLoading = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 25px;
`;

const StyledImg = styled.img`
  height: 200px;
  width: 200px;
`;

const StyledDiv = styled.div`
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

const StyledType = styled.div`
  margin: 5px;
  padding: 3px;
  font-weight: bold;
  color: #fff;
  border-radius: 15px;
`;

class Card extends Component {
  //Creating the necessaring states
  state = {
    pokemonImg: '',
    pokemonType: "",
    pokemon: [],
  };

  //Calling the API
  async componentDidMount() {
    const { name } = this.props;
    const { data } = await api.get(`pokemon/${name}`);
    this.setState({ pokemon: data });
    this.setState({
      pokemonImg: data.sprites.other["official-artwork"].front_default,
    });
    this.setState({ pokemonType: data.types[0].type.name.toLowerCase() });
  }

  render() {
    const { pokemon, pokemonImg, pokemonType, imgLoading } = this.state;
    return (
      <StyledDiv>
        {pokemonImg != "" ? <StyledImg src={pokemonImg} alt="Imagem descritiva do Pokemon" /> : <StyledLoading src = {LoadingImg}/>}
        <h4>{pokemon != "" ? pokemon.name : "Loading..."}</h4>
        <StyledType
          style={{ backgroundColor: `${typeBackground[pokemonType]}` }}
        >
          {pokemonType}
        </StyledType>
      </StyledDiv>
    );
  }
}

export default Card;
