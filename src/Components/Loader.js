import React from "react";
import styled, { keyframes } from "styled-components";
import { MainLogo } from "./Icons";

const Animation = keyframes`
  0%{
    opacity:0
  }
  50%{
    opacity:1
  }
  100%{
    opacity:0
  }
`;

const Wrapper = styled.div`
  animation: ${Animation} 1.5s linear infinite;
`;

export default () => (
  <Wrapper>
    <MainLogo size={36} />
  </Wrapper>
);
