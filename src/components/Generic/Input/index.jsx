import React from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  defaultValue,
  name,
  value,
}) => {
  return (
    <Wrapper>
      <Icon>{children}</Icon>
      <Container
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        name={name}
        value={value}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
      />
    </Wrapper>
  );
};

export default Input;
