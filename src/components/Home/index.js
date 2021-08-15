//importing react
import React, { Component } from "react";
// importing Components
import Card from "../Card/index.js";
//importing api
import api from "../../api/api";
// importing styled-components / materialUI
import { Container, Grid, TextField } from "@material-ui/core";

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
    const { data } = await api.get("pokemon?limit=20"); //898
    const apiCall = data.results;
    this.setState({ pokemons: apiCall });
    this.setState({ filteredPokemons: apiCall });
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
          <TextField
            fullWidth
            margin="normal"
            label="Serach Pokemon"
            onChange={(e) => this.handleChanges(e)}
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            fixed
          >
            {filteredPokemons.map((pokemon, index) => (
              <Card key={pokemon.name} name={pokemon.name} />
            ))}
          </Grid>
        </Container>
      </>
    );
  }
}

export default Home;
