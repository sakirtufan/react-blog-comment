import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const PostComments = (props) => {
  
  return (
    <React.Fragment>
      <CommentList comments={props.comments} />
      <CommentForm handleCommentSubmit={props.handleCommentSubmit}/>
    </React.Fragment>
  );
};

export default PostComments;
