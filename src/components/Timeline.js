import React from "react";
import { ReactComponent as WorkIcon } from "../resources/work.svg";
import { ReactComponent as SchoolIcon } from "../resources/school.svg";
import timelineElements from "../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Resume from "../resources/Resume.pdf";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div class="timeline" id="experience">
      <h1 className="title"> Experience</h1>
      <p className="title-description">
        Below I have illustrated a in-depth timeline of my work experience, for
        a brief overview feel free to check out my{" "}
        <a href={Resume} target="_blank" className="resume">
          résumé.
        </a>
      </p>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText != null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                <a href={element.url} className="titleLink">
                  {element.title};
                </a>
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location};
              </h5>
              <p id="description"> {element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonURL}
                  target="_blank"
                >
                  {" "}
                  {element.buttonText}
                </a>
              )}
                {/*Else display icons with descriptive text */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
