import React, { useState } from "react";
import { Button, Checkbox, Input } from "../Generic";
import { Container, Error, Info, Wrapper } from "./style";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    if (email?.length && password.length) {
      mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              localStorage.setItem("token", res?.authenticationToken);
              navigate("/home");
            } else {
              setError("Email yoki Passwordda xato");
            }
            console.log(res, "ress");
          },
        }
      );
    } else {
      setError("email yoki password bosh bolmasligi kerak");
    }
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
          type="password"
          onChange={({ target: { value } }) => {
            setPassword(value);
            setError(false);
          }}
          value={password}
          mt={44}
          mb={16}
          placeholder={"Password"}
        />
        {error.length ? <Error>{error}</Error> : null}
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
