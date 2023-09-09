import "./Profile.css";
import PostPopup from "../components/PostPopup";
import { useState } from "react";

function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const togglePopup = (post) => {
    setSelectedPost(post);
    setShowPopup(!showPopup);
  };

  const posts = [
    { image: "./burger-homemade.jpg", tags: ["#food", "#delicious"] },
    { image: "./burger-homemade.jpg", tags: ["#food", "#delicious"] },
    { image: "./burger-homemade.jpg", tags: ["#food", "#delicious"] },
    { image: "./burger-homemade.jpg", tags: ["#food", "#delicious"] },
    { image: "./burger-homemade.jpg", tags: ["#food", "#delicious"] },
    { image: "./burger-homemade.jpg", tags: ["#food", "#delicious"] },
  ];

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src="./src/assets/Linkedin-BNW.png"
          className="profile-img"
          alt="Profile"
        />
        <h2 className="profile-name">Profile Name</h2>
        <p className="profile-bio">Profile Bio</p>
        <div className="profile-stats">
          <span>10 posts</span>
          <span>500 followers</span>
          <span>300 following</span>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
      <div className="profile-posts-grid">
        {posts.map((post, index) => (
          <img
            key={index}
            src={post.image}
            className="post-thumbnail"
            alt={post.alt}
            onClick={() => togglePopup(post)}
          />
        ))}
      </div>
      {showPopup && (
        <PostPopup
          show={showPopup}
          togglePopup={togglePopup}
          post={selectedPost}
        />
      )}
    </div>
  );
}

export default Profile;
