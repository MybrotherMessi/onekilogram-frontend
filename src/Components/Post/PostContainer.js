import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import { toast } from "react-toastify";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  location,
  caption,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const comment = useInput("");
  const slideRef = useRef(null);
  const totalSlide = files.length;
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });
  const [addCommentMutation, { loading }] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value },
  });

  const nextSlide = () => {
    if (currentSlide === totalSlide - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.2s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  const toggleLike = async () => {
    await toggleLikeMutation();
    if (isLikedS === false) {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    }
  };

  const onKeyPress = async (e) => {
    const { which } = e;
    if (which === 13) {
      try {
        const {
          data: { addComment },
        } = await addCommentMutation();

        setSelfComments([...selfComments, addComment]);
        comment.setValue("");
      } catch {
        toast.error("Can't comment");
      }
    }
  };

  return (
    <PostPresenter
      user={user}
      comments={comments}
      files={files}
      isLiked={isLikedS}
      likeCount={likeCountS}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      location={location}
      caption={caption}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      slideRef={slideRef}
      currentSlide={currentSlide}
      totalSlide={totalSlide}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      loading={loading}
      selfComments={selfComments}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
};

export default PostContainer;
