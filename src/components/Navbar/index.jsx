import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  ActiveStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const gotoSignin = () => {
    navigate("/signin");
  };
  return (
    <Wrapper className="nocopy">
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={ActiveStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo>
            <Button onClick={gotoSignin} width={"120px"}>
              Signin
            </Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
