import mockData from "../data/mockData.json";
import "./Explore.css";
import { useState } from "react";
import PostCard from "./PostCard";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    const results = mockData.posts.filter((post) =>
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredPosts(results);
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
            <PostCard key={post.id} postData={post} />
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
}

export default Explore;
