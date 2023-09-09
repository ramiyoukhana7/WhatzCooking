import React from "react";
import "./PostPopup.css";

const PostPopup = ({ show, togglePopup, post }) => {
  if (!show) return null;

  return (
    <div className="post-popup">
      <div className="post-popup-content">
        <img src={post.image} alt="Post" className="popup-image" />
        <div className="popup-details">
          <img src={post.userImage} alt="User" className="popup-user-img" />
          <h3 className="popup-username">{post.username}</h3>
          <p className="popup-description">{post.description}</p>
          <p className="popup-tags">{post.tags ? post.tags.join(" ") : ""}</p>
          <div className="popup-comments">
            {post.comments
              ? post.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))
              : "No comments yet."}
          </div>
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
