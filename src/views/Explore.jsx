import exploreData from '../data/exploreData.json'
import './Explore.css'
import { useState } from 'react'


function Explore() {
    const [searchTerm, setSaearchTerm] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([]);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSaearchTerm(query);
        const results = exploreData.posts.filter(post => post.tags.includes(query.toLowerCase()));
        setFilteredPosts(results)
    }

    return (
        <div className='explore'>
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Search by tags'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="results">
                {filteredPosts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore;