import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  text-align: center;
  height: 60vh;
`;

const Section = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
  margin-bottom: 50px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text="No Users Found" />
          ) : (
            data.searchUser.map((user) => (
              <UserCard
                key={user.id}
                userName={user.userName}
                isFollowing={user.isFollowing}
                url={user.avatar}
                isSelf={user.isSelf}
                id={user.id}
              />
            ))
          )}
        </Section>
        <Section>
          {data.searchPost.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            data.searchPost.map((post) => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))
          )}
        </Section>
      </Wrapper>
    );
  }
};

export default SearchPresenter;
