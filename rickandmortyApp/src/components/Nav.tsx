import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src="/navLogo.jpg" style={{ width: 50 }} alt="Logo" />
          <span className="ms-3">Characters</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/locations"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Locations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/episodes"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Episodes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Nav);
