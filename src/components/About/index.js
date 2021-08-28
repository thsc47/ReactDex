import { Component } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import {
  StyledAboutTitle,
  StyledAboutSubtitle,
  Ash,
  StyledCardAbout,
} from "../UI";
import AshImg from "../../assets/images/ash.png";
class About extends Component {
  render() {
    return (
      <Box minHeight="100vh">
        <StyledAboutTitle>About the project</StyledAboutTitle>
        <Container>
          <Box margin={10}>
            <Grid container s={6} alignItems="center" alignContent="center">
              <Grid item>
                <Ash src={AshImg} />
              </Grid>
              <Grid item>
                <StyledCardAbout>
                  <StyledAboutSubtitle>
                    ReactDex is a Fan made system using react and PokeAPI. You
                    can see more details in your{" "}
                    <a href="https://github.com/thsc47/ReactDex">Github Page</a>
                  </StyledAboutSubtitle>
                </StyledCardAbout>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default About;
