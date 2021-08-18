//importing React and library
import React, { Component } from "react";
//importing API
import api from "../api/api";
//importing Styled Components and Material UI support
import {
  StyledTitle,
  StyledImd420,
  ImgContainer,
  InfoContainer,
  StyledType,
  InfoType,
  InfoLabel,
  StyledContainerTitle,
  InfoCard,
  CardContainer,
  InfoLabelDisplay,
} from "../components/UI";
import { Container, Grid } from "@material-ui/core";
import typeBackground from "./typeBackground.js";

class PokemonDetails extends Component {
  state = {
    teste: [],
    pokemon: [],
    pokemonImg: "",
    pokemonType: [],
    abilities: [],
  };

  async componentDidMount() {
    const { name } = this.props.match.params;
    const { data } = await api.get(`pokemon/${name}`);
    this.setState({
      pokemon: data,
      pokemonImg: data.sprites.other["official-artwork"].front_default,
      pokemonType: data.types,
      abilities: data.abilities,
    });
  }
  render() {
    const { pokemon, pokemonImg, pokemonType, abilities } = this.state;
    return (
      <Container>
        <StyledTitle>{this.props.match.params.name}</StyledTitle>
        <InfoType>
          {pokemonType &&
            pokemonType.map((pokemon) => (
              <StyledType
                key={pokemon.type.name}
                style={{
                  backgroundColor: `${typeBackground[pokemon.type.name]}`,
                }}
              >
                {pokemon.type.name}
              </StyledType>
            ))}
        </InfoType>
        <Grid container justifyContent="flex-start" direction="row" spacing={0}>
          <Grid item xs={5}>
            <ImgContainer>
              <StyledImd420 src={pokemonImg} />
            </ImgContainer>
          </Grid>
          <Grid item xs={7}>
            <InfoContainer>
              <StyledContainerTitle>Basic Information</StyledContainerTitle>
              <CardContainer>
                <InfoCard>
                  <InfoLabel>Heigh:</InfoLabel>
                  <InfoLabelDisplay>{pokemon.height / 10} m </InfoLabelDisplay>
                </InfoCard>
                <InfoCard>
                  <InfoLabel>Weight:</InfoLabel>
                  <InfoLabelDisplay>{pokemon.weight / 10} kg </InfoLabelDisplay>
                </InfoCard>
                <InfoCard>
                  <InfoLabel>ID:</InfoLabel>
                  <InfoLabelDisplay>{pokemon.id} </InfoLabelDisplay>
                </InfoCard>
              </CardContainer>
              <StyledContainerTitle>Abilities</StyledContainerTitle>
              <CardContainer>
                {abilities.map((pokemon) => (
                  <InfoCard key={pokemon.ability.name}>
                    <InfoLabelDisplay>{pokemon.ability.name}</InfoLabelDisplay>
                  </InfoCard>
                ))}
              </CardContainer>
            </InfoContainer>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default PokemonDetails;
