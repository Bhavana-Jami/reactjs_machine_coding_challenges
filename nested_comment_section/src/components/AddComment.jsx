import React, { useState } from "react";

function AddComment({
  replyFlag,
  setReplyFlag,
  addNewComment,
  addReply,
  gettingReplyTextChild,
}) {
  const randomNumber = Math.floor(Math.random() * 1000);
  const currentTimestamp = Date.now();
  const uniqueId = `${currentTimestamp}-${randomNumber}`;

  const [inputComment, setInputComment] = useState({
    id: null,
    content: "",
    likes: null,
    replies: [],
  });
  const handleCommentInputChange = (e) => {
    const { value } = e.target;
    setInputComment((prevInputComment) => ({
      ...prevInputComment,
      content: value,
      id: uniqueId,
      likes: null,
      replies: [],
    }));
    // gettingReplyTextChild(inputComment);

    if (replyFlag) {
      gettingReplyTextChild({ ...inputComment, content: value });
    }
  };

  const handleSend = () => {
    addNewComment(inputComment);
    // addReply(inputComment);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <span>
          <b>U1</b>
        </span>{" "}
        <input
          type="textarea"
          placeholder="Add a comment"
          name="content"
          value={inputComment.content}
          onChange={handleCommentInputChange}
        />
        <button onClick={handleSend}>Send</button>
        {replyFlag && (
          <button onClick={() => setReplyFlag(false)}>Cancel</button>
        )}
      </div>
    </div>
  );
}

export default AddComment;
