import React, { useState } from "react";
import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./style";
import Card from "./Card";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
// import UseReplace from "../../hooks/useReplace";
export const Generic = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  const onSelect = (value) => {
    navigate(`/properties?category_id=${value}`);
    console.log(value, "on select");
  };
  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        let list = res?.data?.map((value) => {
          return (
            <Card
              onClick={() => onSelect(value.id)}
              // margin
              title={value?.name}
            />
          );
        });
        setState(list);
      },
    }
  );

  const slider = useRef();

  return (
    <Container className="nocopy">
      <div className="title center">Categories</div>
      <div className="description center">
        Siz orzu qilgan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={state}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Generic;
