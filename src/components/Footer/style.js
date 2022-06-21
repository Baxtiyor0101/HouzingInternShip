import styled from "styled-components";

import { ReactComponent as facebook } from "../../assets/icon/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icon/twiter.svg";
import { ReactComponent as instagram } from "../../assets/icon/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icon/linkedin.svg";

import { ReactComponent as telegram } from "../../assets/icon/telegram.svg";
import { ReactComponent as logo } from "../../assets/icon/logo.svg";
import { ReactComponent as arrow } from "../../assets/icon/arrow.svg";

export const MainContainer = styled.div`
  background: #0d263b;
  color: #ffffff;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  background: #0d263b;
  color: #ffffff;
  justify-content: space-between;
  padding: 48px 130px;
  flex-wrap: wrap;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 30px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* text-align: center; */
`;

export const Logos = styled(logo)`
  width: 432px;
  /* height: 520px; */
  position: absolute;
  opacity: 0.2;
  left: 2.6%;
  right: 74.9%;
  top: 5%;
  bottom: 6.94%;
  opacity: 0.015;
  path {
    fill: #fff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  max-width: 256px;
  margin-right: ${({ marginright }) => marginright && "15px"};
  color: #ffffff;

  ::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 46px;
    border-bottom: 1px solid #ffffff;

    display: ${({ invisible }) => (invisible ? "none" : "block")};
    opacity: 0;
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: ${({ margin }) => !margin && "27px"};
`;

export const Icons = styled.img`
  margin-right: 32px;
  margin-left: 5px;
  height: 18px;
`;

export const Text = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;

  /* margin-left: 170px; */
`;
Icons.Instagram = styled(instagram)``;
Icons.Facebook = styled(facebook)``;
Icons.Linkedin = styled(linkedin)``;
Icons.Twitter = styled(twitter)``;

export const Iconlink = styled.a`
  width: 36px;
  height: 36px;

  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 3px;
  :hover {
    background: #323559;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  width: 469px;
  height: 60px;
  position: relative;
  outline: none;
  border-style: none;
  padding-left: 20px;
`;

export const Telegram = styled(telegram)`
  position: absolute;
  margin-left: -50px;
  margin-top: 8px;
  border-radius: 3px;
  box-sizing: initial;
  padding: 12px;
  background: blue;
`;

/* ---------------Footer Bottom-------------------*/
export const Wrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  margin-left: 130px;
`;

Logos.SmallLogo = styled(logo)`
  margin-right: 13px;
  path {
    fill: #ffffff;
  }
`;

Logos.Arrow = styled(arrow)`
  transform: rotate(180deg);
  background: blue;
  box-sizing: initial;
  border-radius: 3px;
  padding: 19.3px 18px;
  right: 0;
`;
