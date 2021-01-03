import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComments from "./PostComments";
import { api } from "../api";
import { Link } from 'react-router-dom';

const Post = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  // const [display_name, setDisplay_name] = useState('');
  // const [body, setBody] = useState('');

  const handleCommentSubmit = (e, comment) => {
    e.preventDefault();
    api()
      .post(`/posts/${id}/comments`, comment)
      .then((response) => {
        setComments([...comments, response.data]);
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  useEffect(() => {
    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((responses) => {
        setPost(responses[0].data);
        setComments(responses[1].data);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{post.title}</h2>
      <p>{post.created_at}</p>
      <div className="ui buttons">
        <Link to={`/posts/${post.id}/edit`} className="ui teal button">Edit</Link>
        <button className="ui red button">Delete</button>       
      </div>
      <p>{post.content}</p>

      <PostComments
        comments={comments}
        handleCommentSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
};

export default Post;
