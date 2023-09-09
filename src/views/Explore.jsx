import mockData from "../data/mockData.json";
import "./Explore.css";
import { useState } from "react";
import PostCard from "./PostCard";
import PostPopup from "../components/PostPopup";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    const results = mockData.posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredPosts(results);
  };

  const togglePopup = (post) => {
    setSelectedPost(post);
    setShowPopup(!showPopup);
  };

  return (
    <div className="explore">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by tags"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="results">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} postData={post} onPostClick={togglePopup} />
          ))
        ) : (
          <p>No posts found</p>
        )}
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

export default Explore;
