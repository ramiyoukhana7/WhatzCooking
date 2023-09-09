import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        WhatzCooking
      </Link>
      <div className="navbar-actions">
        <Link to="/explore">
          <button className="navbar-btn-explore">Explore</button>
        </Link>

        <Link to="/following">
          <button className="navbar-btn-following">Following</button>
        </Link>
        <button className="upload-btn">Upload</button>
        <Link to="/profile">
          <img
            className="navbar-profile-img"
            src="./src/assets/Linkedin-BNW.png"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
