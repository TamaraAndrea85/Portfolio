import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">General Assembly </span>
            <span className="university-degree"> </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2021-2022 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Onondaga Community College</span>
            <span className="university-degree">
              Physical Therapy/Therapist Assistant{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2007-2009 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              {/* Jawaharlal Nehru Institute of Technology{" "} */}
            </span>
            <span className="university-degree">
              {/* Bachelors of Technology in Computer Science{" "} */}
            </span>
          </div>{" "}
          <div>{/* <span className="year-passedout">2017-2021 </span> */}</div>
        </div>
      </div>
    </>
  );
}
