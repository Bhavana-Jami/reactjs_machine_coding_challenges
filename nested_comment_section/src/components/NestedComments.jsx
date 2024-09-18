import React, { useState } from "react";
import AddComment from "./AddComment";
import DisplayComment from "./DisplayComment";
import { commentsData } from "../data/commentsData";
import CommentsActions from "./CommentsActions";

function NestedComments() {
  const { updatedCommentsData, addNewComment, addReply } =
    CommentsActions(commentsData);
  const [dataFromChild, setDataFromChild] = useState("");
  const gettingReplyTextChild = (replyText) => {
    setDataFromChild(replyText.content);
  };
  return (
    <div>
      <AddComment
        addNewComment={addNewComment}
        addReply={addReply}
        gettingReplyTextChild={gettingReplyTextChild}
      />
      {updatedCommentsData.map((comment) => (
        <DisplayComment
          key={comment.id}
          comment={comment}
          addReply={addReply}
          replyText={dataFromChild}
        />
      ))}
    </div>
  );
}

export default NestedComments;
