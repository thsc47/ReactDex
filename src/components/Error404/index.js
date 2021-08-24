import React from "react";
import { Container404, Block1, ErrorTitle, ErrorP, ErrorImg } from "../UI";
import { Container } from "@material-ui/core";
import Psyduck404 from "../../assets/images/Error404.png"

const Error404 = () => {
  return (
    <Container>
      <Container404>
        <Block1>
          <ErrorTitle>Page not found :(</ErrorTitle>
          <ErrorP>Sorry, but the page you are looking for is not here.</ErrorP>
        </Block1>
        <Block1>
          <ErrorImg src={Psyduck404} />
        </Block1>
      </Container404>
    </Container>
  );
};

export default Error404;
