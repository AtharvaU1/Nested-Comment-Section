import React from "react";
import Comment from "./Comment";

const CommentsWrapper = (props) => {
  const { data } = props;

  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <>
      {data.map((commentData) => (
        <Comment key={commentData.id} commentData={commentData}></Comment>
      ))}
    </>
  );
};

export default CommentsWrapper;
