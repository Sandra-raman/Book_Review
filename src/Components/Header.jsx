import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ContextAPI/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav className={`navbar navbar-${theme} bg-${theme} shadow`}>
        <div className="container-fluid">
          <a className="navbar-brand">Plot Point</a>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search fs-5 me-3"></i>
            </span>
            <Link to={"/login"}>
              <button type="button" className="btn btn-primary px-3 me-2">
                Signin
              </button>
            </Link>
            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                aria-expanded="false"
              >
                <Link to={"/dashboard"}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="35"
                    alt="Profile"
                  />
                </Link>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            {/* Dark Mode Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-secondary ms-3"
            >
              {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
