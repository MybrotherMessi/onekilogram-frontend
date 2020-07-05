import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import FatText from "../FatText";
import Avatar from "../Avatar";
import Pagination from "../Pagination";
import {
  HeartFull,
  HeartEmpty,
  Comment as CommentIcon,
  NextButton,
  PrevButton,
} from "../Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 60px;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  overflow: hidden;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  max-width: 100%;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const SlideNextButton = styled.button`
  all: unset;
  cursor: pointer;
  z-index: 3;
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 96%;
`;

const SlidePrevButton = styled.button`
  all: unset;
  cursor: pointer;
  z-index: 3;
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 4%;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 0px 15px 15px 15px;
  margin-top: -30px;
  position: relative;
  z-index: 2;
`;

const Buttons = styled.section`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 8px;
  span {
    margin-right: 5px;
  }
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const TextArea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export default ({
  user: { userName, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  slideRef,
  nextSlide,
  prevSlide,
  currentSlide,
  totalSlide,
  toggleLike,
  comments,
  onKeyPress,
  loading,
  selfComments,
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <Link to={`/${userName}`}>
          <FatText text={userName} />
        </Link>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      <SliderContainer ref={slideRef}>
        {files && files.map((file) => <File key={file.id} src={file.url} />)}
      </SliderContainer>
      {currentSlide === 0 ? null : (
        <SlidePrevButton onClick={prevSlide}>
          <PrevButton />
        </SlidePrevButton>
      )}
      {currentSlide === files.length - 1 ? null : (
        <SlideNextButton onClick={nextSlide}>
          <NextButton />
        </SlideNextButton>
      )}
      <Pagination
        totalSlide={totalSlide}
        currentSlide={currentSlide}
      ></Pagination>
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      {comments && (
        <Comments>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.userName} />
              {comment.text}
            </Comment>
          ))}
          {selfComments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.userName} />
              {comment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <TextArea
        placeholder={"Add a comment..."}
        value={newComment.value}
        onChange={newComment.onChange}
        onKeyPress={onKeyPress}
        disabled={loading}
      />
    </Meta>
  </Post>
);
