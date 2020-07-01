import React from "react";
import styled from "styled-components";

const PageLists = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;
const Page = styled.span`
  border-radius: 50%;
  border: solid 4px;
  border-color: ${(props) => props.theme.lightGreyColor};
  margin-right: 5px;
`;
const ActivePage = styled.span`
  border-radius: 50%;
  border: solid 4px;
  border-color: ${(props) => props.theme.lightBlueColor};
  margin-right: 5px;
`;

function Pagination({ totalSlide, currentSlide }) {
  const pages = [];
  for (let i = 0; i < totalSlide; i++) {
    pages.push(i);
  }

  return (
    <PageLists>
      {pages.map((number) =>
        number === currentSlide ? (
          <ActivePage key={number} />
        ) : (
          <Page key={number} />
        )
      )}
    </PageLists>
  );
}
export default Pagination;
