import React, { useEffect, useState } from "react";
import axios from "axios";
import PostComments from "./PostComments";



const Post = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  // const [display_name, setDisplay_name] = useState('');
  // const [body, setBody] = useState('');
 

  const handleCommentSubmit = (e, comment) => {
    e.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        comment
      )
      .then((response) => {
        setComments([...comments, response.data]);
        
      })
      .catch((error) => {
        window.alert(error);
        
      });
  };

  


  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
        ),
      ])
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
      <p>{post.content}</p>
      <PostComments comments={comments} handleCommentSubmit={handleCommentSubmit}/>

    </React.Fragment>
  );
};

export default Post;
