import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 64px 0;
`;

const Container = styled.div`
  display: flex;

  width: 580px;
  height: fit-content;
  /* height: 376px; */
  background: #ffffff;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 36px;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Error = styled.div`
  color: red;
`;

export { Container, Wrapper, Info, Error };
