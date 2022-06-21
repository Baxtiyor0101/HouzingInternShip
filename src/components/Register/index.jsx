import React, { useState } from "react";
import { Button, Checkbox, Input } from "../Generic";
import { Container, Error, Info, Wrapper } from "./style";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Register = () => {
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
        <div className="title">Registration</div>
        <Input
          // onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={48}
          placeholder={"Login"}
        />
        <Input
          // onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={48}
          placeholder={"First Name"}
        />
        <Input
          // onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={48}
          placeholder={"Last name"}
        />
        <Input
          // onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={48}
          placeholder={"Email"}
        />
        <Input
          // onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={48}
          placeholder={"User role"}
        />
        <Input
          // onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          mt={48}
          placeholder={"Re-enter password"}
        />
        <Button onClick={onSubmit} mt={32} type={"primary"}>
          Login
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Register;
