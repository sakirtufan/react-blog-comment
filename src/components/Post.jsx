import React, { useEffect, useState } from "react";
import axios from "axios";

const COMMENT_INITIAL_STATE = {
  display_name: "",
  body: "",
};

const Post = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  // const [display_name, setDisplay_name] = useState('');
  // const [body, setBody] = useState('');
  const [comment, setComment] = useState(COMMENT_INITIAL_STATE);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        comment
      )
      .then((response) => {
        setComments([...comments, response.data]);
        setComment(COMMENT_INITIAL_STATE);
      })
      .catch((error) => {
        window.alert(error);
        setComment(COMMENT_INITIAL_STATE);
      });
  };

  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
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
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="ui relaxed list">
            <div className="item">
              <img
                alt={comment.display_name}
                className="ui avatar image"
                src="/images/avatar/small/daniel.jpg"
              />
              <div className="content">
                <a className="header">{comment.display_name}</a>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          </div>
        );
      })}
      <h3>Your Comment</h3>
      <form
        className="ui form"
        onSubmit={handleCommentSubmit}
      >
        <div className="ui mini icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Your Name"
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <textarea
          name="body"
          onChange={handleOnChange}
          value={comment.body}
          placeholder="Your Comment"
          rows="3"
        ></textarea>
        <button type="submit" className="ui blue button">
          Send Comment
        </button>
      </form>
    </React.Fragment>
  );
};

export default Post;
