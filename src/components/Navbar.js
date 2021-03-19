import React from "react";
import logo from "../resources/icon2.png";
import Resume from "../resources/Resume.pdf"
// REACT fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//faBars is the Menu Icon
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-scroll';
//In react we can style within the tags
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
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
              <Link smooth={true} to="home" class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="about" class="nav-link" href="#">
                About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="skills" class="nav-link" href="#">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="experience" class="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="projects" class="nav-link" href="#">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link smooth={true} to="contact" class="nav-link" href="#">
                Contact
              </Link>
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
