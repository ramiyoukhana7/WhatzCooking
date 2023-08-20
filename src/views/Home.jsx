import './Home.css'

function Home() {
    return(
        <div className="home">
            <div className="feed">
                <div className="post-card">
                    <img src="./src\assets\burger-homemade.jpg" className="card-img"/>
                    <h3 className="card-title">Dish name</h3>
                    <p className="card-description">Post description</p>
                    <div className="card-tags">#italian #homemade #pizza</div>
                    <div className="card-actions">
                        <button className="btn-like">👍 Like</button>
                        <button className="btn-comment">💬 Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;