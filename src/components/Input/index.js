import React from "react";
import { StyledInput } from "./styles";

const Input = ({ placeholder, width, handleChange }) => {
  return (
    <StyledInput
      width={width}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
