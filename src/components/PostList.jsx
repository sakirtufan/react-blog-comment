import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getPostList from '../redux/actions/index'

const PostList = () => {  

  const postList = useSelector((state) => state.postList);
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getPostList())
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link className="ui secondary button" to="/addPost">Add Post</Link>
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
