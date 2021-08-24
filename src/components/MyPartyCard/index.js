import React, { Component } from "react";
import {
  Sprite,
  PokemonUIBorder,
  PokemonUICell,
  PokemonName,
  PokemonInfo,
} from "../UI";
import APIHandler from "../../APIHandler";

class MyPartyCard extends Component {
  state = {
    pokemon: "",
    pokemonImg: "",
    hp: 0,
  };

  async componentDidMount() {
    const { name } = this.props;
    const API = new APIHandler("https://pokeapi.co/api/v2/");
    const { data } = await API.getOnePokemons(name);
    console.log(data);
    this.setState({
      pokemon: data,
      pokemonImg: data.sprites.front_default,
      hp: data.stats[0].base_stat,
    });
  }

  render() {
    const { name } = this.props;
    const { pokemon, pokemonImg, hp } = this.state;
    return (
      <PokemonUIBorder>
        {console.log(hp)}
        <Sprite src={pokemonImg} />
        <PokemonUICell>
            <PokemonName>{name}</PokemonName>
          <PokemonInfo>HP:{hp}/{hp}</PokemonInfo>
        </PokemonUICell>
      </PokemonUIBorder>
    );
  }
}

export default MyPartyCard;
