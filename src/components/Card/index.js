//importing react and library
import React, { Component } from "react";
import { Link } from "react-router-dom";
// importing API
import api from "../../api/api";

// importing StyledComponents and IMG
import { StyledLoading, StyledImg, StyledDiv, StyledType } from "../UI";
import LoadingImg from "../../assets/images/loading.gif";
import typeBackground from "../UI/typeBackground";

class Card extends Component {
  handeClick = (e) => {
    console.log(e);
  };

  //Creating the necessaring states
  state = {
    pokemonImg: "",
    pokemonType: "",
    pokemon: [],
  };

  //Calling the API and populating the states
  async componentDidMount() {
    const { name } = this.props;
    const { data } = await api.get(`pokemon/${name}`);
    this.setState({
      pokemon: data,
      pokemonImg: data.sprites.other["official-artwork"].front_default,
      pokemonType: data.types[0].type.name.toLowerCase(),
    });
  }

  render() {
    const { pokemon, pokemonImg, pokemonType } = this.state;
    return (
      <Link href = {`/details/${pokemon.name}`}>
      <StyledDiv className={pokemon.name} >
        {pokemonImg !== "" ? (
          <StyledImg
            className={pokemon.name}
            src={pokemonImg}
            alt="Imagem descritiva do Pokemon"
          />
        ) : (
          <StyledLoading src={LoadingImg} />
        )}
        <h4>{pokemon != "" ? pokemon.name : `Loading...`}</h4>
        <StyledType
          className={pokemon.name}
          style={{ backgroundColor: `${typeBackground[pokemonType]}` }}
        >
          {pokemonType}
        </StyledType>
      </StyledDiv>
      </Link>
    );
  }
}

export default Card;
