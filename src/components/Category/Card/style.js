import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 350px;
  background-image: url(img);
  /* background-position: center; */
  :hover {
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
      0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  }
  cursor: pointer;
  position: relative;
`;

const Image = styled.img``;
const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  color: #ffffff;
`;

export { Container, Image, Title };
