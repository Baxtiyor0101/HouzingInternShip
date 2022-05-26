import React, { useRef } from "react";
import {
  CarouselWrapper,
  Icon,
  Img,
  MainCarousel,
  ContainerInfo,
  InfoText,
  InfoTitle,
  // InfoButton,
  Icons,
  Info,
  InfoPrice,
} from "./style";
import img1 from "../../../assets/img/apartment1.jpg";
import img2 from "../../../assets/img/apartment2.jpg";
import img3 from "../../../assets/img/apartment3.jpg";
import { Button } from "../../Generic";

export const Carousel = ({ info }) => {
  const slider = useRef();
  return (
    <div>
      <CarouselWrapper>
        <Icon.Left onClick={() => slider.current?.next()} />
        <Icon.Right onClick={() => slider.current?.prev()} />
        <MainCarousel ref={slider} dots autoplay>
          <Img src={img1} alt="img" />
          <Img src={img2} alt="img" />
          <Img src={img3} alt="img" />
          <Img src={img1} alt="img" />
          <Img src={img2} alt="img" />
          <Img src={img3} alt="img" />
        </MainCarousel>
      </CarouselWrapper>
      <ContainerInfo>
        <InfoTitle>Skyper Pool Partment</InfoTitle>
        <InfoText>Skyper Pool Partment</InfoText>
        <Info.Detailes>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetails?.beds || 0}Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bath />
            <Info.Text>{info?.houseDetails?.bath || 0}Baths</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Garage />
            <Info.Text>{info?.houseDetails?.garage || 0}Garages</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Ruler />
            <Info.Text>{info?.houseDetails?.area || 0}Sq Ft</Info.Text>
          </Icons.Wrapper>
        </Info.Detailes>
        <InfoPrice>$5,250/mo</InfoPrice>
        <Button width={"180px"} height={"44px"}>
          Read more
        </Button>
        {/* <InfoButton>Read More</InfoButton> */}
      </ContainerInfo>
    </div>
  );
};

export default Carousel;
