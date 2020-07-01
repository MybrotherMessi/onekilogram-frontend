import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
  text-align: center;
  height: 60vh;
`;

export default ({ searchTerm, loading }) => (
  <Wrapper>
    {searchTerm === undefined && (
      <FatText text={"Search for something"}></FatText>
    )}
  </Wrapper>
);
