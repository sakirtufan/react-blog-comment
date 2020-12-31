import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setPostList(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
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
