import React from "react";
import "./Experience.css";
export default function Experience() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">General Assembly</span>
            <span className="year-passedout">Sep 2021-April 2022</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">Full-Stack Software Engineer</span>
          <span className="description-position">
            <ul>
              <li>
                {" "}
                Applied skills in CSS, JavaScript, React, Express, Mongoose,
                Python, MongoDB, and Flask
              </li>
              <li>
                {" "}
                Completed about 500-hours part-time course culminating in 4
                projects.
              </li>
              <li> Software Engineering Immersive (flex) Remote. </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
