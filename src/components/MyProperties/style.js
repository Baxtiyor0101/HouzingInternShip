import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icon/edit.svg";
import { ReactComponent as delet } from "../../assets/icon/trash.svg";

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
`;

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 100%;
  padding: 0 131px;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 34px 0 32px;
`;
const Table = styled.table`
  border: 1px solid #e6e9ec;
  width: 100%;
`;
const Tr = styled.tr``;
const Th = styled.th`
  padding: 30px;
  font-family: "Montserrat";
  border: 1px solid #e6e9ec;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;
const Td = styled.td`
  font-family: "Montserrat";
  font-style: normal;
  /* padding: 30px; */
  border: 1px solid #e6e9ec;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
const Icons = styled.div``;
Icons.Edit = styled(edit)``;
Icons.Trash = styled(delet)``;
const Popconfirm = styled.div``;

export { Container, Wrapper, Section, Table, Tr, Td, Th, Icons, Popconfirm };
