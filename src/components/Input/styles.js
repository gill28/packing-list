import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: rgba(118, 118, 128, 0.12);
  border: none;
  border-radius: 10px;
  width: ${(props) => props.width};
  padding: 1rem 1rem;
  margin-left: 10px;
`;
