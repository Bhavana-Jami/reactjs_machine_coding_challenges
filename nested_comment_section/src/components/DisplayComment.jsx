import React, { useState } from "react";
import AddComment from "./AddComment";
import "../App.css";

function ShowComments({
  comment,
  setArchive,
  setComment,
  addReply,
  replyText,
}) {
  const [show, setShow] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replyFlag, setReplyFlag] = useState(false);
  // console.log(show)
  const handleReply = (commentId) => {
    setReplyFlag(true);
    addReply(commentId, replyText);
  };
  return (
    <div>
      <div>
        <h4>{comment.content}</h4>
        {/* <p>{comment.id}</p>
        <p>{comment.likes}</p> */}
      </div>

      <div className="actions">
        {comment?.replies?.length > 0 && (
          <span onClick={() => setShowReplies(!showReplies)} className="action">
            {showReplies
              ? `🢓${comment?.replies?.length} replies`
              : `🢒${comment?.replies?.length} replies`}
          </span>
        )}

        <span className="action" onClick={() => handleReply(comment.id)}>
          Reply
        </span>
        <span className="action">Edit</span>
        <span className="action">Delete</span>
      </div>

      {replyFlag && (
        <AddComment replyFlag={replyFlag} setReplyFlag={setReplyFlag} />
      )}

      {showReplies && (
        <div style={{ paddingLeft: "22px" }}>
          {comment?.replies?.map((reply) => (
            <ShowComments key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowComments;
