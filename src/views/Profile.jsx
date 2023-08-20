import './Profile.css'

function Profile() {
    return (
        <div className="profile">
        <div className="Profile-header">
            <img src=".\src\assets\Linkedin-BNW.png" className="profile-img"/>
            <h2 className="profile-name">profile name</h2>
            <p className="profile-bio"> profile bio</p>
            <div className="profile-stats">
                <span>10 posts</span>
                <span>500 followers</span>
                <span>300 following</span>
            </div>
            <button className="edit-profile-btn">Edit profile</button>
        </div>
        <div className="profile-posts-grid">
            <img src="./src\assets\burger-homemade.jpg" className="post-thumbnail"/>
            <img src="./src\assets\burger-homemade.jpg" className="post-thumbnail"/>
        </div>
        </div>
    )
}

export default Profile