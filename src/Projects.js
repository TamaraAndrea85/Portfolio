import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">SpaceMan </span>
            <span className="university-degree">HTML, CSS, JAVASCRIPT </span>
          </div>{" "}
          <div>
            <a
              href="https://tamaraandrea85.github.io/Spaceman-Project/"
              style={{ textDecoration: "none" }}
            >
              <span className="year-passedout">LINK TO PROJECT </span>
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">SNEAKER COLLECTION</span>
            <span className="university-degree">full CRUD API </span>
          </div>{" "}
          <div>
            <a
              href="https://obscure-brook-48241.herokuapp.com/sneaker"
              style={{ textDecoration: "none" }}
            >
              <span className="year-passedout">LINK TO PROJECT</span>
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">SOCIAL MEAL-DIA </span>
            <span className="university-degree">GROUP PROJECT</span>
          </div>{" "}
          <div>
            <a
              href="https://social-meal-dia.herokuapp.com/login"
              style={{ textDecoration: "none" }}
            >
              <span className="year-passedout">LINK TO PROJECT</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
