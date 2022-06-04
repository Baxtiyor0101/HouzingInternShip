import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Container } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;

const Detailes = () => {
  const { id } = useParams();
  // console.log(param);

  const { data } = useQuery(
    "gethouse by id",
    () =>
      fetch(`${url}/v1/houses/${id?.replace(":", "")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },  
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        console.log(res, "res");
      },
    }
  );
  console.log(data, "test");

  // console.log(res, "fddfdfdfd");
  return (
    <Container>
      <h1>{data?.data?.address}</h1>
    </Container>
  );
};

export default Detailes;
