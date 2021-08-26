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
    generation: 1,
    data: [],
    name: "",
    species: [],
    types: [],
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
    this.setState({
      data: data,
      name: data.main_region.name,
      species: species,
      types: types,
    });
  }

  render() {
    const { generation, data, name, species, types } = this.state;
    return (
      <Box minHeight="100vh">
        <Container>
          {console.log(data)}
          <StyledTitle>Advanced Search</StyledTitle>
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
          <AdvancedSubtitle>
            All types from generation {generation}
          </AdvancedSubtitle>
          <TypeDiv>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {types.map((type) => (
                <StyledType
                  style={{ backgroundColor: `${typeBackground[type]}` }}
                >
                  {type}
                </StyledType>
              ))}
            </Grid>
          </TypeDiv>
          <TypeDiv></TypeDiv>
        </Container>
      </Box>
    );
  }
}

export default AdvancedSearch;
