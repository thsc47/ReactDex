//importing react
import React, { Component } from "react";
// importing Components
import Card from "../Card/index.js";
//importing api
import APIHandler from "../../APIHandler";
// importing styled-components / materialUI
import { StyledLabel, StyledTextField } from "../UI/index.js";
import { Container, Grid } from "@material-ui/core";

class Home extends Component {
  handleChanges = (input) => {
    const { pokemons } = this.state;
    const { value } = input.target;
    const filtered = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ filteredPokemons: filtered });
  };

  async componentDidMount() {
    const API = new APIHandler("https://pokeapi.co/api/v2/"); 
    const { data } = await API.getAllPokemons(); 
    this.setState({ pokemons: data.results, filteredPokemons: data.results });
  }

  state = {
    pokemons: [],
    filteredPokemons: [],
  };

  render() {
    const { filteredPokemons } = this.state;

    return (
      <>
        <Container>
          <StyledLabel>Search Pokemon</StyledLabel>
          <StyledTextField
            onChange={(e) => this.handleChanges(e)}
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            fixed
          >
            {filteredPokemons.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} />
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}

export default Home;
