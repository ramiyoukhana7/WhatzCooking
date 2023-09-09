import { useState } from "react";
import "./PostCard.css";

function PostCard({ postData, onPostClick }) {
  const [likes, setLikes] = useState(postData.likes);
  const [comments, setComments] = useState(postData.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="postCard" onClick={() => onPostClick(postData)}>
      <h2>{postData.title}</h2>
      <img src={postData.image} alt={postData.title} />
      <p>{postData.description}</p>
      <div className="tags">
        {postData.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="interaction-container">
        <button onClick={handleLike} className="like-btn">
          Like ({likes})
        </button>

        <input
          type="text"
          placeholder="Write a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-field"
        />
        <button onClick={handleComment} className="comment-btn">
          Comment
        </button>
      </div>
      <div className="comments-container">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
