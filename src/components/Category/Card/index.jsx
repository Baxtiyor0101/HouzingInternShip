import React from "react";
import { Container, Image, Title } from "./style";
import img from "../../../assets/img/category1.png";

const Card = ({ title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Image src={img} />
    </Container>
  );
};

export default Card;
