import React, { useState } from "react";
import "./PostPopup.css";

const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};

const PostPopup = ({ show, togglePopup, post }) => {
  console.log(post);
  const [newComment, setNewComment] = useState("");
  const forceUpdate = useForceUpdate();
  if (!show) return null;

  const handleComment = () => {
    if (newComment.trim() === "") return;
    const updatedComments = [...(post.comments || []), newComment];
    post.comments = updatedComments;
    setNewComment("");
    forceUpdate();
  };

  return (
    <div className="post-popup">
      <div className="post-popup-content">
        <img src={post.image} className="popup-image" />
        <div className="popup-details">
          <img src={post.userImage} className="popup-user-img" />
          <h3 className="popup-username">{post.username}</h3>
          <p className="popup-description">{post.description}</p>
          <p className="popup-tags">{post.tags ? post.tags.join(" ") : ""}</p>
          <div className="popup-comments">
            {post &&
              post.comments &&
              post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
          </div>
          <input
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleComment}>Post Comment</button>
          <button className="like-button">Like</button>
        </div>
      </div>
      <button className="close-popup" onClick={togglePopup}>
        Close
      </button>
    </div>
  );
};

export default PostPopup;
