import React from "react";
import { StyledButton } from "./styles";

const Button = ({ title, handleAdd }) => {
  return <StyledButton onClick={handleAdd}>{title}</StyledButton>;
};

export default Button;
