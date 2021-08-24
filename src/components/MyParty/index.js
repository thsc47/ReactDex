import { Container, Grid, Box } from "@material-ui/core";
import React, { Component } from "react";
import { StyledTitle,InfoLabelDisplay } from "../UI";
import MyPartyCard from "../MyPartyCard";

class MyParty extends Component {
  state = {
    party: [],
  };

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("party-member"));
    this.setState({ party: local });
  }

  clearParty = () => {
    const {party} = this.state;
    party.splice(0, 5);
    console.log(party)
    this.setState({party: party})
    localStorage.setItem("party-member", JSON.stringify(party));
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
            {party.length === 0 && <Box m={2} ><InfoLabelDisplay>Your Party is empty</InfoLabelDisplay></Box>}
          </Grid>
          {party.length > 0 &&<button onClick={() => {this.clearParty()}}>Clear Party</button>}
    
      </Container>
    );
  }
}

export default MyParty;
