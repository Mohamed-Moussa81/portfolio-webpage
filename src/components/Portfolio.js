import React from "react";
//Font Awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons"
const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="test-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            {/* Import project images*/}
            <img className="portfolio-image" src=" " alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box">
            {/* Import project images*/}
            <img className="portfolio-image" src=" " alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box">
            {/* Import project images*/}
            <img className="portfolio-image" src=" " alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box">
            {/* Import project images*/}
            <img className="portfolio-image" src=" " alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box">
            {/* Import project images*/}
            <img className="portfolio-image" src=" " alt="" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
