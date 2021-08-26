import React, { Component } from "react";
import APIHandler from "../../APIHandler";

import { Box, Container, Grid } from "@material-ui/core";
import {
  StyledTitle,
  AdvancedSubtitle,
  StyledType,
  TypeDiv,
  StyledMoves,
} from "../UI";
import AdvancedSearchForm from "./GenerationsForm";
import Card from "../Card";
import typeBackground from "../UI/typeBackground";

class AdvancedSearch extends Component {
  state = {
    generation: "1",
    data: [],
    name: "",
    species: [],
    types: [],
    moves: [],
  };
  handleCheck = (e) => {
    const { value } = e.target;
    this.setState({ generation: value });
  };

  async componentDidMount() {
    const API = new APIHandler("https://pokeapi.co/api/v2/");
    const { generation } = this.state;
    const { data } = await API.getRegion(generation);
    const species = data.pokemon_species.map((pokemon) => pokemon.name);
    const types = data.types.map((type) => type.name);
    const moves = data.moves.map((move) => move.name);

    this.setState({
      data: data,
      name: data.main_region.name,
      species: species,
      types: types,
      moves: moves,
    });
  }

  async componentDidUpdate(prevState) {
    {
      const { generation: prev } = prevState;
      const { generation: post } = this.state;
      if (post !== prev) {
        const API = new APIHandler("https://pokeapi.co/api/v2/");
        const { generation } = this.state;
        const { data } = await API.getRegion(generation);
        const species = data.pokemon_species.map((pokemon) => pokemon.name);
        const types = data.types.map((type) => type.name);
        const moves = data.moves.map((move) => move.name);

        this.setState({
          data: data,
          name: data.main_region.name,
          species: species,
          types: types,
          moves: moves,
        });
      }
    }
  }

  render() {
    const { generation, data, name, species, types, moves } = this.state;
    return (
      <Box minHeight="100vh">
        <Container>
        <Box minHeight="100vh">
          <StyledTitle>Search Genaration</StyledTitle>
          <AdvancedSearchForm handleCheck={this.handleCheck} />
          <AdvancedSubtitle>Pokemons from {name}</AdvancedSubtitle>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {species.map((pokemon) => (
              <Card key={pokemon} name={pokemon} />
            ))}
          </Grid>
          </Box>
          <AdvancedSubtitle>
            Added types from generation {generation}
          </AdvancedSubtitle>
          <TypeDiv>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {types.length > 0 ? (
                types.map((type, i) => (
                  <StyledType
                    key={i}
                    style={{ backgroundColor: `${typeBackground[type]}` }}
                  >
                    {type}
                  </StyledType>
                ))
              ) : (
                <StyledMoves>None</StyledMoves>
              )}
            </Grid>
          </TypeDiv>
          <AdvancedSubtitle>
            All moves from generation {generation}
          </AdvancedSubtitle>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {moves.map((move, i) => (
              <StyledMoves key={i}>{move}</StyledMoves>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default AdvancedSearch;
