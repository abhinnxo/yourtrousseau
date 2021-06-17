import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-xxl">
          <Link to="/" className="navbar-brand fw-bolder">
            Your Trousseau
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link" aria-current="page" href="#">
                Home
              </Link>
              <Link to="/blog" className="nav-link" href="#">
                Blog
              </Link>
              <Link to="/contact" className="nav-link" href="#">
                Contact
              </Link>
              <Link
                className="nav-link"
                to="/store"
                tabindex="-1"
                aria-disabled="true"
              >
                Store
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
