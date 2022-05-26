import React from "react";
import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./style";
import HouseCard from "../../Card";
export const Generic = () => {
  const slider = useRef();
  const items = [
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
  ];
  return (
    <Container className="nocopy">
      <div className="title center">Recommended</div>
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
            items={items}
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
