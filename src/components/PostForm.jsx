import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", content: "" });
  const [error, setError] = useState("");

  const onInputChange = (event) =>
    setPost({ ...post, [event.target.name]: event.target.value });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setError("");
    axios
      .post("https://react-yazi-yorum.herokuapp.com/posts", post)
      .then((response) => {
        props.history.push("/");
      })
      .catch((err) => {
        setError("Post title and post content are required.");
      });
  };

  return (
    <React.Fragment>
      {error && (
        <div className="ui error message">
          <div className="header">Error</div>
          <p>{error}</p>
        </div>
      )} 
        <h3>Add New Post</h3>
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

export default withRouter(PostForm);
