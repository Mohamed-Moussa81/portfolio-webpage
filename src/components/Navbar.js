import React from "react";
import logo from "../resources/icon2.png";
import Resume from "../resources/Resume.pdf"
// REACT fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//faBars is the Menu Icon
import { faBars } from "@fortawesome/free-solid-svg-icons"
//In react we can style within the tags
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
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
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
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-linkres" href={Resume} target="_blank">
                <button
                  type="button"
                  class="btn btn-outline-light resume-btn-nav"
                >
                  Résumé
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
