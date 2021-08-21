//importing React and library
import React, { Component } from "react";
//importing API
import APIHandler from "../APIHandler";
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
import typeBackground from "../components/UI/typeBackground.js";
import { Bar } from "react-chartjs-2";
//Importing Components
import Card from "../components/Card";
//Importing Support Functions
import getEvolutionChain from "./evolutionChain";
const API = new APIHandler("https://pokeapi.co/api/v2/");

class PokemonDetails extends Component {
  state = {
    pokemon: [],
    pokemonImg: "",
    pokemonType: [],
    abilities: [],
    attribute: [],
    evoChain: {},
  };

  async componentDidMount() {
    const API = new APIHandler("https://pokeapi.co/api/v2/");
    const { name } = this.props.match.params;
    const evoChain = await getEvolutionChain(name);
    const { data } = await API.getOnePokemons(`${name}`);

    const chart = data.stats.map((attribute) => parseInt(attribute.base_stat));

    this.setState({
      pokemon: data,
      pokemonImg: data.sprites.other["official-artwork"].front_default,
      pokemonType: data.types,
      abilities: data.abilities,
      attribute: chart,
      evoChain: evoChain,
    });
  }

  async componentDidUpdate(prevProps) {
    const { name: oldPokemon } = prevProps.match.params;
    const { name: newPokemon } = this.props.match.params;
    if (oldPokemon !== newPokemon) {
      const { data } = await API.getOnePokemons(`${newPokemon}`);
      const chart = data.stats.map((attribute) =>
        parseInt(attribute.base_stat)
      );
      this.setState({
        pokemon: data,
        pokemonImg: data.sprites.other["official-artwork"].front_default,
        pokemonType: data.types,
        abilities: data.abilities,
        attribute: chart,
      });
    }
  }

  render() {
    const { pokemon, pokemonImg, pokemonType, abilities, attribute, evoChain } =
      this.state;
    const { name } = this.props.match.params;
    const capitalizePokemonName = name[0].toUpperCase() + name.slice(1);
    return (
      <Container>
        <StyledTitle>{capitalizePokemonName}</StyledTitle>
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
          <Grid item md={5} xs={12}>
            <ImgContainer>
              <StyledImd420 src={pokemonImg} />
            </ImgContainer>
          </Grid>
          <Grid item md={7} xs={12}>
            <InfoContainer>
              <StyledContainerTitle>Basic Information:</StyledContainerTitle>
              <CardContainer>
                <InfoCard>
                  <InfoLabel>Heigh:</InfoLabel>
                  {pokemon.height > 0 ? (
                    <InfoLabelDisplay>
                      {pokemon.height / 10} m{" "}
                    </InfoLabelDisplay>
                  ) : (
                    <InfoLabelDisplay> - </InfoLabelDisplay>
                  )}
                </InfoCard>
                <InfoCard>
                  <InfoLabel>Weight:</InfoLabel>
                  {pokemon.weight > 0 ? (
                    <InfoLabelDisplay>
                      {pokemon.weight / 10} kg{" "}
                    </InfoLabelDisplay>
                  ) : (
                    <InfoLabelDisplay> - </InfoLabelDisplay>
                  )}
                </InfoCard>
                <InfoCard>
                  <InfoLabel>ID:</InfoLabel>
                  {pokemon.id > 0 ? (
                    <InfoLabelDisplay>{pokemon.id} </InfoLabelDisplay>
                  ) : (
                    <InfoLabelDisplay> - </InfoLabelDisplay>
                  )}
                </InfoCard>
              </CardContainer>
              <StyledContainerTitle>Abilities:</StyledContainerTitle>
              <CardContainer>
                {abilities.map((pokemon) => (
                  <InfoCard key={pokemon.ability.name}>
                    <InfoLabelDisplay>{pokemon.ability.name}</InfoLabelDisplay>
                  </InfoCard>
                ))}
              </CardContainer>
            </InfoContainer>
          </Grid>

          <Bar
            data={{
              labels: [
                "Hp",
                "Attack",
                "Defense",
                "Special-attack",
                "Special-defense",
                "Speed",
              ],
              datasets: [
                {
                  label: `Stats`,
                  data: attribute,
                  backgroundColor: ["rgba(255, 99, 132)"],
                  borderWidth: 1,
                },
              ],
            }}
            height={25}
            width={50}
            options={{
              scales: {
                y: {
                  suggestedMax: 140,
                },
              },
              maintainaspectratio: false,
              beginAtZero: true,
            }}
          />
          <InfoContainer>
            <StyledContainerTitle>Evolution Chain</StyledContainerTitle>
            <CardContainer>
              {evoChain.length > 1 ? (
                evoChain.map((pokemon) => <Card key={pokemon} name={pokemon} />)
              ) : (
                <InfoLabel style={{ lineHeight: "350px" }}>
                  {capitalizePokemonName} doesn't evolve.
                </InfoLabel>
              )}
            </CardContainer>
          </InfoContainer>
        </Grid>
      </Container>
    );
  }
}

export default PokemonDetails;
