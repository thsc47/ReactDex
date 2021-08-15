//importing react and library
import React, { Component } from "react";

// importing API
import api from "../../api/api";

// importing StyledComponents and IMG
import { StyledLoading, StyledImg, StyledDiv, StyledType } from "../UI";
import LoadingImg from "../../assets/images/loading.gif";
import typeBackground from "./typeBackground";

class Card extends Component {
  //Creating the necessaring states
  state = {
    pokemonImg: '',
    pokemonType: "",
    pokemon: [],
  };

  //Calling the API and populating the states 
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
    const { pokemon, pokemonImg, pokemonType } = this.state;
    return (
      <StyledDiv>
        {pokemonImg !== "" ? <StyledImg src={pokemonImg} alt="Imagem descritiva do Pokemon" /> : <StyledLoading src = {LoadingImg}/>}
        <h4>{pokemon != "" ? pokemon.name : `Loading...`}</h4>
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
