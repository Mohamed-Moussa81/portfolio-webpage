import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython,faJava } from "@fortawesome/free-brands-svg-icons";
import {
  faUsers,
  faLaptopCode,} from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className="services" id="skills">
      <h1 className="py-5"> Skills </h1>
      <div className="container">
        <div className="row">
          <div className="box">
            <div className=" col-lg-3 col-sm-6 col-sm-6">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJava} size="7x" />
              </div>
              <h3>Java</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faPython} size="7x" />
              </div>
              <h3> Python</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faLaptopCode}
                  size="7x"
                />
              </div>
              <h3>Web Development</h3>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faUsers} size="7x" />
              </div>
              <h3> Agile</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-md-4 list">
            <h3> Languages</h3>
            <ul>
              <li>C</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div class="col-md-4 list">
            <h3> Frameworks</h3>
            <ul>
              <li>Node.js</li>
              <li>Spring Boot</li>
              <li>Flask</li>
              <li>Angular</li>
              <li>JSP</li>
              <li> JavaFX</li>
              <li> Bootstrap</li>
            </ul>
          </div>
          <div class="col-md-4 list">
            <h3>Software</h3>
            <ul>
              <li>AWS</li>
              <li>GIT</li>
              <li>Linux</li>
              <li>Origin</li>
              <li>Android Studio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
