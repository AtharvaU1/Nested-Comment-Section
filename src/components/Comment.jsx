import React, { useRef } from "react";
import { useState } from "react";
import "../styles/styles.css";

const Comment = (props) => {
  const { commentData } = props;
  const { id, comment, nestedComments: comments } = commentData;

  const [nestedComments, setNestedComments] = useState(comments);
  const [showReply, toggleShowReply] = useState(false);
  const [reply, setReply] = useState("");

  const handleOnChange = (e) => {
    setReply(e.target.value);
  };

  const handleAddReply = (e) => {
    const newComment = {
      id: Date.now(),
      comment: reply,
      nestedComments: [],
    };
    setNestedComments([...nestedComments, newComment]);
    setReply("");
  };

  return (
    <div className="comment">
      <p>{comment}</p>
      <div className="commentChildWrapper">
        <input onChange={handleOnChange} value={reply}></input>
        {nestedComments.length > 0 && (
          <button onClick={() => toggleShowReply((showReply) => !showReply)}>
            {showReply ? "Hide Replies" : "Show Replies"}
          </button>
        )}
        <button onClick={handleAddReply}>Add Reply</button>
      </div>
      {showReply &&
        nestedComments.map((commentData) => (
          <Comment key={commentData.id} commentData={commentData}></Comment>
        ))}
    </div>
  );
};

export default Comment;
