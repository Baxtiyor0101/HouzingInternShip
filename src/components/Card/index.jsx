import React from "react";
import {
  Container,
  Icons,
  Image,
  Info,
  InfoWrapper,
  Price,
  User,
} from "./style";
import noimg from "../../assets/img/noimg.png";
// import { Icon } from "../Filter/style";
const Card = ({ info, mr, ml, margin, onClick }) => {
  return (
    <Container className="nocopy" onClick={onClick}>
      {/* 1 */}
      <Image
        src={(info?.attachments && info?.attachments[0]?.imgPath) || noimg}
        alt="house img"
      />

      {/* 2 */}
      <InfoWrapper>
        <User>
          <User.Img src={info?.user || noimg} />
        </User>

        <Info.Title>
          {info?.description || "description"} <br /> Category:
          {info?.category?.name}
        </Info.Title>
        <Info.Text>
          {info?.name || "house"},{info?.address || "Address"},{" "}
          {info?.city || "City"}
          {info?.country || "Country"}
        </Info.Text>
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
      </InfoWrapper>
      {/* 3 */}
      <Price>
        <Price.Wrapper>
          <Price.Sale>{info?.salePrice || 0}/ month</Price.Sale>
          <Price.Origin>{info?.price || 0}/ month</Price.Origin>
        </Price.Wrapper>
        <Price.IconWrapper>
          <Icons.Resize />
          <Icons.Love />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};

export default Card;
