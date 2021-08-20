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
import typeBackground from "../components/UI/typeBackground.js";
import { Bar } from "react-chartjs-2";

class PokemonDetails extends Component {
  state = {
    attribute: [],
    pokemon: [],
    pokemonImg: "",
    pokemonType: [],
    abilities: [],
  };

  async componentDidMount() {
    const evoChain = [];
    const { name } = this.props.match.params;

    //Chamando a API com os detalhes genericos
    const { data } = await api.get(`pokemon/${name}`);
    //Populando a array de status
    const chart = data.stats.map((attribute) => parseInt(attribute.base_stat));

    //Chamando a API com os detalhes complexos
    const pokemonSpecies = await api.get(`pokemon-species/${name}/`);

    //Fazendo o caminho até a árvore de evolução
    const evolutionChainId = pokemonSpecies.data.evolution_chain.url
      .slice(-5)
      .replace(/([^\d])+/gim, "");
    const evolutionChain = await api.get(
      `evolution-chain/${evolutionChainId}/`
    );
    let stage1, stage2, stage3 = null;
    try {
      stage1 = evolutionChain.data.chain.species.name;
      stage2 = evolutionChain.data.chain.evolves_to[0].species.name;
      stage3 = evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.name;
      evoChain.push(stage1, stage2, stage3);
    } catch (e) {
      stage1 = null;
      stage2 = null;
      stage3 = null;
    }
    console.log(evoChain);
    //Populando os states
    this.setState({
      pokemon: data,
      pokemonImg: data.sprites.other["official-artwork"].front_default,
      pokemonType: data.types,
      abilities: data.abilities,
      attribute: chart,
    });
  }
  render() {
    const { pokemon, pokemonImg, pokemonType, abilities, attribute } =
      this.state;
    return (
      <Container>
        {/* {console.log(pokemon)} */}
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

          <Bar
            data={{
              labels: [
                "hp",
                "attack",
                "defense",
                "special-attack",
                "special-defense",
                "speed",
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
            height={100}
            width={200}
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

        </Grid>
      </Container>
    );
  }
}

export default PokemonDetails;
