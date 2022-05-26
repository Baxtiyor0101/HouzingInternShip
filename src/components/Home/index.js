import React from "react";
// import Recomendation from "../Recomendation";
import Filter from "../Filter";
import Carousel from "./Carousel";
import { Container } from "./style";
import Generic from "./Recomendation";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      {/* <Recomendation /> */}
      <Generic />
    </Container>
  );
};

export default Home;
