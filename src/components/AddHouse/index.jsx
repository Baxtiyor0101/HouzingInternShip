import React from "react";
import { Button, Input } from "../Generic";
import { Container } from "./style";
import { useMutation } from "react-query";
import { useHttp } from "../../hooks/useHttp";
const { REACT_APP_BASE_URL: url } = process.env;
import { useNavigate } from "react-router-dom";
const body = {
  address: "string",
  attachments: [
    {
      imgPath:
        "https://wp-tid.zillowstatic.com/25/real-estate-comps-91b8c8-1024x578.jpg",
    },
    {
      imgPath:
        "https://nypost.com/wp-content/uploads/sites/2/2022/05/alexa-real-estate-4.jpg",
    },
    {
      imgPath:
        "https://images.readwrite.com/wp-content/uploads/2019/06/Where-Will-AI-Take-the-Real-Estate-Market-in-10-Years-825x500.jpg",
    },
  ],
  categoryId: 0,
  city: "Chiroqchi",
  componentsDto: {
    additional: "oyla izala top",
    airCondition: true,
    courtyard: true,
    furniture: true,
    gasStove: true,
    internet: true,
    tv: true,
  },
  country: "Uzbekistan",
  description: "the best country",
  favorite: true,
  homeAmenitiesDto: {
    additional: "string",
    busStop: true,
    garden: true,
    market: true,
    park: true,
    parking: true,
    school: true,
    stadium: true,
    subway: true,
    superMarket: true,
  },
  houseDetails: {
    area: 1,
    bath: 2,
    beds: 3,
    garage: 4,
    room: 5,
    yearBuilt: 2020,
  },
  locations: {
    latitude: 0,
    longitude: 0,
  },
  name: "the best houses in the world",
  price: 7965420,
  region: "Sanarqand",
  salePrice: 234e320,
  status: true,
  zipCode: "456789",
};

const AddHouse = () => {
  const navigate = useNavigate();
  const { request } = useHttp();
  const { mutate } = useMutation(() =>
    request({ url: "/v1/houses", token: true, method: "POST", body })
  );
  const submit = () => {
    mutate("", {
      onSuccess: (res) => {
        if (res?.success) {
          navigate("/profile/properties");
        }
        console.log(res);
      },
    });
  };
  return (
    <Container>
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Input width={"200px"} placeholder={"Fill The Field"} />
      <Button width={"131px"} type="primary" onClick={submit}>
        Submit
      </Button>
    </Container>
  );
};

export default AddHouse;
