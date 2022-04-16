import React from "react";
import "./Experience.css";
export default function Experience() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">
              Software Engineering Immersive | General Assembly{" "}
            </span>
            <span className="year-passedout">September - April 2022</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">FULL-STACK SOFTWARE ENGINEER:</span>
          <span className="description-position">
            <ul>
              {" "}
              Completed 500+ hours in and out of the classroom, of expert-led
              instruction in HTML, CSS, and JavaScript while acquiring hands-on
              learning of coding fundamentals and the industry's most in-demand
              technologies.
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
