import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  border: 1px solid;
  outline: none;
  background-color: rgba(0, 149, 246, 0.3);
  color: white;
  border-radius: 6px;
  padding: 8px 9px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Button = ({ text, onClick }) => (
  <Container onClick={onClick}>{text}</Container>
);

export default Button;
