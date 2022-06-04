import React from "react";
// import Recomendation from "../Recomendation";
import Filter from "../Filter";
import Carousel from "./Carousel";
import { Container } from "./style";
import Recomendation from "./Recomendation";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      {/* <Recomendation /> */}
      <Recomendation />
      <Category />
    </Container>
  );
};

export default Home;
