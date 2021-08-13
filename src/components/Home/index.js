//importing react and library
import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
// importing Components
import Card from "../Card/index.js";
import api from "../../api/api";
// importing styled-components
import { Container } from "@material-ui/core";

class Home extends Component {
  state = {
    pokemons: [],
    filteredPokemons: [],
  };

  async componentDidMount() {
    //const { pokemons } = this.state;
    const { data } = await api.get("pokemon?limit=898"); //898
    const apiCall = data.results;
    this.setState({ pokemons: apiCall });
    this.setState({ filteredPokemons: apiCall });
  }

  handleChanges = (input) => {
    const filtered = this.state.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(input.target.value.toLowerCase());
    });
    this.setState({ filteredPokemons: filtered });
  };

  render() {
    const { filteredPokemons } = this.state;
    return (
      <>
        <Container>
          <TextField
            id="outlined-basic"
            label="Pesquiser Pokemon"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={(e) => this.handleChanges(e)}
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
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
