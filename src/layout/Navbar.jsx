import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return(
        <nav className="navbar">
            <Link to="/" className="navbar-logo">WhatzCooking</Link>
            <div className="navbar-logo">WhatzCooking</div>
            <div className="navbar-actions">
                <button className="upload-btn">Upload</button>
                <Link to="/profile"></Link>
                <img className="navbar-profile-img" src=".\src\assets\Linkedin-BNW.png"></img>
            </div>
        </nav>
    )
}

export default Navbar;