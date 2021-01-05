
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { api } from "../api"

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", content:"" });
  const [error, setError] = useState("");

  //react router hooks
  const { id } = useParams();
  const history = useHistory();

  const onInputChange = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setError("");

    if(props.post.title){
      api().put(`/posts/${id}`,post)
        .then((response) => {
          history.push(`/posts/${id}`)
        })
        .catch((err) => {
          setError("Post title and post content are required.");
        });
    }
    else{
      api()
        .post("/posts", post)
        .then((response) => {
          history.push("/");
        })
        .catch((err) => {
          setError("Post title and post content are required.");
        });
    }
  };

  useEffect(() => {
    if(props.post?.title && props.post?.content) {
      setPost(props.post)
    }
  },[props.post])

  return (
    <React.Fragment>
      {error && (
        <div className="ui error message">
          <div className="header">Error</div>
          <p>{error}</p>
        </div>
      )} 
        <div className="ui form">
          <div className="field">
            <label>Post Title</label>
            <input
              onChange={onInputChange}
              type="text"
              value={post.title}
              name="title"
            />
          </div>
          <div className="field">
            <label>Post Content</label>
            <textarea
              onChange={onInputChange}
              name="content"
              value={post.content}
              rows="3"
            ></textarea>
          </div>
          <button onClick={onFormSubmit} className="ui primary button">
            Send
          </button>
          <button className="ui button">Cancel</button>
        </div>
      
    </React.Fragment>
  );
};

// export default withRouter(PostForm);
export default PostForm;
