import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
//use regular FA icon instead of Linkedin
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p> Harrison, NJ 07029</p>
            </div>
            <div className="d-flex">
              <a href="tel:973-978-7311">+1(973)-978-7311 </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" href="#">
                  Home <span class="sr-only">(current)</span>
                </Link>
                <br />

                <Link smooth={true} to="about" offset={-20} href="#">
                  About Me
                </Link>
                <br />
                <Link smooth={true} to="skills" offset={-100} href="#">
                  Skills
                </Link>
                <br />
              </div>

              <div className="col">
                <Link smooth={true} to="experience" offset={-60}  href="#">
                  Experience
                </Link>
                <br />
                <Link smooth={true} to="projects" href="#">
                  Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href="https://github.com/Mohamed-Moussa81">
                <FontAwesomeIcon className="mx-3" icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed--moussa/">
                <FontAwesomeIcon className="mx-3" icon={faLinkedin} size="2x" />
              </a>
              <a href="mailto:mohamed.moussa@rutgers.edu">
                <FontAwesomeIcon className="mx-3" icon={faEnvelope} size="2x" />
              </a>
              <a href="https://www.instagram.com/mohamedmoussa__/">
                <FontAwesomeIcon
                  className="mx-3"
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </div>
            <p className="pt-3 text-center">
              Copyright &copy;
              {new Date().getFullYear()}&nbsp; Mohamed Moussa | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
