import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../../assets/icon/left-arrow.svg";

import { ReactComponent as bed } from "../../../assets/icon/beds.svg";
import { ReactComponent as bath } from "../../../assets/icon/bath.svg";
import { ReactComponent as garage } from "../../../assets/icon/car.svg";
import { ReactComponent as ruler } from "../../../assets/icon/ruler.svg";
import { ReactComponent as resize } from "../../../assets/icon/pin.svg";

const CarouselWrapper = styled("div")`
  position: relative;
  /* background: rgba(0, 0, 0, 0.65); */
`;

const MainCarousel = styled(Carousel)`
  height: fit-content;
  /* height: 570px !important; */
`;

const Img = styled.img`
  background: black;
  width: 100%;
  height: 570px;
`;
const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;
Icon.Right = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -40%) rotate(180deg);
  width: 45px;
  height: 45px;
  color: black;
  opacity: 0.5;
  background: white;
  padding: 12px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

/////////////

const ContainerInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: translate(30.125em, -30.875em);
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Info = styled.div``;

Info.Title = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-style: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
`;

Info.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  white-space: normal;
  overflow: hidden;
  /* color: #ffffff;   */
  color: #ffffff;
`;
Info.Detailes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  gap: 24px;
  margin-bottom: 24px;
`;

const Icons = styled.div``;

Icons.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: fit-content;
  height: 45px;
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  cursor: pointer;
`;
const InfoText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 24px;
`;
const InfoTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
`;
const InfoPrice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 48px;
`;

export {
  MainCarousel,
  InfoText,
  InfoPrice,
  CarouselWrapper,
  ContainerInfo,
  Img,
  Icon,
  InfoTitle,
  Icons,
  Info,
};
