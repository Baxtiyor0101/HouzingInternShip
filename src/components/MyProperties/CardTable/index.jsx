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
import noimg from "../../../assets/img/noimg.png";
import { Button } from "../../Generic";
// import { Icon } from "../Filter/style";
const CardTable = ({ info, mr, ml, margin, onClick }) => {
  return (
    <Container className="nocopy" onClick={onClick}>
      {/* 1 */}
      <Image
        src={(info?.attachments && info?.attachments[0]?.imgPath) || noimg}
        alt="house img"
      />

      {/* 2 */}
      <InfoWrapper>
        <Info.Title>{info?.description || "description"}</Info.Title>
        <Info.Text>
          {info?.name || "house"},{info?.address || "Address"},{" "}
          {/* {info?.city || "City"} */}
          {/* {info?.country || "Country"} */}
        </Info.Text>
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
      </InfoWrapper>
      <button className="littleButton">FORSALE</button>
      {/* <Price> */}
      {/* <Button type="secondary" width={"90px"} ml={-15}>
        For Sale
      </Button> */}
      {/* </Price> */}
    </Container>
  );
};

export default CardTable;
