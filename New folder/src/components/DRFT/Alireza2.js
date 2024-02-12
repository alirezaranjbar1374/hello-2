import React from 'react'


function Comment({ comment,comments }) {
    console.log("ww11w",comments);

    return (
      <div className="comment">
        <p>{comment?.text}</p>
        {comment?.children.map(childId => (
          <ChildComment comments={comments} key={childId} commentId={childId} />
        ))}
      </div>
    );
  }
  
  function ChildComment({ commentId,comments }) {
    console.log("www",comments);
    const childComment = comments?.find(comment => comment._id === commentId);
    return <Comment comment={childComment} />;
  }

  export default Comment