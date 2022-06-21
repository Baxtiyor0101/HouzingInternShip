import React from "react";
import Card from "../Card";
import { useQuery } from "react-query";
import { Container } from "./style";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
const MyProperties = () => {
  const navigate = useNavigate();
  const { data } = useQuery(
    "",
    () =>
      fetch(`${url}/v1/houses/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: function (res) {
        console.log(res, "best");
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <Container>
      <h1>MyProperties</h1>
      <Button
        onClick={() => navigate("/profile/add")}
        type={"primary"}
        width={"131px"}
      >
        Add House
      </Button>
      {data?.data.map((value) => (
        <Card key={value.id} info={value} />
      ))}
    </Container>
  );
};

export default MyProperties;
