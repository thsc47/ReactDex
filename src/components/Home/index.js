//importing react
import React, { Component } from "react";
// importing Components
import Card from "../Card/index.js";
//importing api
import APIHandler from "../../APIHandler";
// importing styled-components / materialUI
import { StyledLabel, StyledTextField,InfoLabel } from "../UI/index.js";
import { Box, Container, Grid } from "@material-ui/core";

class Home extends Component {
  handleChanges = (input) => {
    const { pokemons } = this.state;
    const { value } = input.target;
    const filtered = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ 
      filteredPokemons: filtered,
      search: value,
     });

  };

  async componentDidMount() {
    const API = new APIHandler("https://pokeapi.co/api/v2/"); 
    const { data } = await API.getAllPokemons(); 
    this.setState({ pokemons: data.results, filteredPokemons: data.results });
  }

  state = {
    pokemons: [],
    filteredPokemons: [],
    search: 0,
  };

  render() {
    const { filteredPokemons, search } = this.state;

    return (
      <Box minHeight="100vh">
        <Container fixed={false}>
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
            {!(filteredPokemons.length === 0 && search !== 0) ? filteredPokemons.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} />
            )) : <InfoLabel style={{ lineHeight: "350px" }}>
                  {search} wasn't found.
                </InfoLabel> }
            
          </Grid>
          { console.log(filteredPokemons.length)}

        </Container>
      </Box>
    );
  }
}

export default Home;
