import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
  width: 100%;
`;

const Body = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
  padding: 0 130px;
  max-width: var(--width);
`;

Body.Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Wrapper, Body };
