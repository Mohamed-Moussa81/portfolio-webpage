import React from "react";
import logo from "../icon2.png";
// REACT fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a class="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..."></img>{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                about me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;