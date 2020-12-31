import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      
  },[]);

  return (
    <React.Fragment>
      <h2 className="ui header">{post.title}</h2>
      <p>{post.created_at}</p>
      <p>{post.content}</p>
    </React.Fragment>
  );
};

export default Post;
