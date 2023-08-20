import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">WhatzCooking</div>
            <div className="navbar-actions">
                <button className="upload-btn">Upload</button>
                <img className="navbar-profile-img" src=".\src\assets\Linkedin-BNW.png"></img>
            </div>
        </nav>
    )
}

export default Navbar;