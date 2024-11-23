import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">Plot Point</a>
          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search fs-5 me-3"></i>
            </span>
            <Link to={'/login'}>
              <button type="button" class="btn btn-primary px-3 me-2">
                Signin
              </button>
            </Link>
            <div class="dropdown">
              <a
                data-mdb-dropdown-init
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                aria-expanded="false"
              >
               <Link to={'/dashboard'}> <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  height="35"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                /></Link>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
