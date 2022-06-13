import React from "react";
import { AntdCheckbox } from "./style";

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
    <AntdCheckbox mr={mr} ml={ml} mb={mb} mt={mt} onChange={onChange}>
      {children}
    </AntdCheckbox>
  );
};

export default Input;
