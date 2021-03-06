import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../api"

const PostList = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
      .then((response) => {
        setPostList(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/addPost" className="ui secondary button">Add Post</Link>
      {postList.map((post) => {
        return (
          <div key={post.id} className="item">
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${post.id}`} className="header">{post.title}</Link>
              <div className="description">{post.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
