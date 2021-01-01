import React from 'react'

const CommentList = (props) => {
  return (
    <React.Fragment>
           <h3>Comments</h3>
      {props.comments.map((comment) => {
        return (
          <div key={comment.id} className="ui relaxed list">
            <div className="item">
              <div className="content">
                <p className="header">{comment.display_name}</p>
                <div className="description">{comment.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  )
}


export default CommentList;