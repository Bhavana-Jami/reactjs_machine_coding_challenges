import { useState } from "react";
const CommentsActions = (commentsData) => {
    const [updatedCommentsData, setUpdatedCommentsData] = useState(commentsData);
    function addNewComment(newComment) {
        if (newComment) {
            setUpdatedCommentsData(prev => [newComment, ...prev])
        }
    }
    function addReply(commentId, newComment) {
        console.log(commentId)
        console.log( newComment)
    }
    return { updatedCommentsData, addNewComment, addReply }
}
export default CommentsActions;