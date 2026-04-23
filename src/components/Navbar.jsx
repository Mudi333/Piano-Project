import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <span className="navbar-logo">Claire Harmon Piano</span>

      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/lessons"
          className={location.pathname === "/lessons" ? "active" : ""}
        >
          Lessons
        </Link>

        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;