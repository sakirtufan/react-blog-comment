import React,{ useState } from 'react'


const COMMENT_INITIAL_STATE = {
  display_name: "",
  body: "",
};


const CommentForm = (props) => {
  const [comment, setComment] = useState(COMMENT_INITIAL_STATE);
  //setComment(COMMENT_INITIAL_STATE);

  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
            <h3>Your Comment</h3>
      <form
        className="ui form"
        onSubmit={(event)=>{
          props.handleCommentSubmit(event,comment)
          setComment(COMMENT_INITIAL_STATE)
        }}
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
  )
}

export default CommentForm;