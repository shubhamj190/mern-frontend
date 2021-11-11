import React, {useEffect,} from "react";

import {
  Link, useLocation, useHistory
} from "react-router-dom";

const Navbar = () => {

  let location = useLocation();
  useEffect(() => {
  }, [location]);

  const history=useHistory()

  const handleLogout=(event)=>{
    event.preventDefault();
    localStorage.removeItem('token')
    history.push('/login')
  }

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Cloud-Notes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about" ? "  " : ""}`} to="/about">
                  About
                </Link>
              </li>
              {!localStorage.getItem('token')}

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/login" ? "  " : ""}`} to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/signup" ? "  " : ""}`} to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <button className='nav-link border-0 b3-2' onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
