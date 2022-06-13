import React, { useState } from "react";
import { Button, Checkbox, Input } from "../Generic";
import { Container, Info, Wrapper } from "./style";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json(
      
    ));
  });

  const onSubmit = () => {
    console.log("ttt", password, email);
    mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.authenticationToken) {
            localStorage.setItem("token", res?.authenticationToken);
            navigate("/home");
            console.log("sdkjlaksdjflakdjflkdjflakdjfladksfj");
          }
          console.log(res, "ress");
        },
      }
    );
  };
  return (
    <Wrapper>
      <Container>
        <div className="title">Sign in</div>
        <Input
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={68}
          placeholder={"Email"}
        />
        <Input
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
          mt={44}
          mb={16}
          placeholder={"Password"}
        />
        <Info>
          <Checkbox>Remember me</Checkbox>
          <a href="/">Forget</a>
        </Info>
        <Button onClick={onSubmit} mt={32} type={"primary"}>
          Login
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Signin;
