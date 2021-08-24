import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { StyledTitle } from "../UI";
import MyPartyCard from "../MyPartyCard";
import Card from "../Card"

class MyParty extends Component {
  state = {
    party: [],
  };
  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("party-member"));
    this.setState({ party: local });
  }
  render() {
    const { party } = this.state;
    return (
      <Container>
        <StyledTitle>My Party</StyledTitle>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          md = {12}
          xs={12}
        >
          
            {party.map((pokemon, i) => (
              <MyPartyCard key={pokemon + toString(i)} name={pokemon} />
            ))}
          </Grid>
    
      </Container>
    );
  }
}

export default MyParty;
