import React, { useEffect } from "react";
import PostComments from "./PostComments";
import { Link,useParams} from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { addComment, getPost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const Post = (props) => {
  // const { id } = props.match.params;
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector(state => state.post)
  
  const handleCommentSubmit = (e, comment) => {
    e.preventDefault();
    dispatch(addComment(id, comment))
  };
  
  useEffect(() => {
    dispatch(getPost(id))
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{post.title}</h2>
      <p>{post.created_at}</p>
      <div className="ui buttons">
        <Link to={`/posts/${post.id}/edit`} className="ui teal button">Edit Post</Link>
        {/* <DeleteModal post={post} push={props.history.push}/> */}
        <DeleteModal post={post}/>
      </div>
      <p>{post.content}</p>

      <PostComments
        comments={post.comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
};

export default Post;
