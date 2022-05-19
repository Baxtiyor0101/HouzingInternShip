import React from "react";
import ThisForTest from "../components/Home";
import Navbar from "../components/Navbar";
import { Container } from "./style";

const Root = () => {
  return (
    <Container>
      <Navbar />
      <ThisForTest />
    </Container>
  );
};

export default Root;
