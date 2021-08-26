//importing react and library
import React, { Component } from "react";
import { Link } from "react-router-dom";
// importing API
import APIHandler from "../../APIHandler"
// importing StyledComponents and IMG
import { StyledLoading, StyledImg, StyledDiv, StyledType } from "../UI";
import LoadingImg from "../../assets/images/loading.gif";
import typeBackground from "../UI/typeBackground";
import { Box } from "@material-ui/core";

class Card extends Component {
  //Creating the necessaring states
  state = {
    pokemonImg: "",
    pokemonType: "",
    pokemon: [],
  };

  //Calling the API and populating the states
  async componentDidMount() {
    const { name } = this.props;
    const API = new APIHandler("https://pokeapi.co/api/v2/")
    const { data } = await API.getOnePokemons(`${name}`);
    this.setState({
      pokemon: data,
      pokemonImg: data.sprites.other["official-artwork"].front_default,
      pokemonType: data.types[0].type.name.toLowerCase(),
      pokemonName: data.name,
    });
  }

  render() {
    const { pokemon, pokemonImg, pokemonType } = this.state;
    const PokemonName = pokemon.name
    //const capitalizePokemonName = PokemonName[0].toUpperCase() + pokemon.name.slice(1) 
    return (
      <Box padding={1}>
      <Link to = {`/details/${pokemon.name}`}>
      <StyledDiv className={pokemon.name} >
        {pokemonImg !== "" ? (
          <StyledImg
            className={pokemon.name}
            src={pokemonImg}
            alt="Imagem descritiva do Pokemon"
          />
        ) : (
          <StyledLoading src={LoadingImg} />
        )}
        <h4>{pokemon != "" ? PokemonName[0].toUpperCase()+PokemonName.slice(1) : `Loading...`}</h4>
        <StyledType
          className={pokemon.name}
          style={{ backgroundColor: `${typeBackground[pokemonType]}` }}
        >
          {pokemonType} 
        </StyledType>
      </StyledDiv>
      </Link>
      </Box>
    );
  }
}

export default Card;
