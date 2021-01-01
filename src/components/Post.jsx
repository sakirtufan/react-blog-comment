import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      
  },[]);

  return (
    <React.Fragment>
      <h2 classNameName="ui header">{post.title}</h2>
      <p>{post.created_at}</p>
      <p>{post.content}</p>
{/*       Yorumlar
      yorumlar Listesia
      yorum yazma formu */}
      {comments.map(comment => {
        return(

      <div key={comment.id} className="ui relaxed list">
        <div className="item">
          <img className="ui avatar image" src="/images/avatar/small/daniel.jpg"/>
          <div className="content">
            <a className="header">{comment.display_name}</a>
            <div className="description">{comment.body}</div>
          </div>
        </div>
      </div>
        )
      })}
    </React.Fragment>
  );
};

export default Post;
