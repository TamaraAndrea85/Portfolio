import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">SpaceMan </span>
            <span className="university-degree">
              Built with: HTML, CSS, and JavaScript
            </span>
            <span className="university-degree">
              Developed a word game, inspired by the globally recognized
              Hangman.
            </span>
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
            <span className="university-degree">
              Built with: Express, Express EJS Layouts, Mongoose, Full CRUD API{" "}
            </span>
            <span className="university-degree">
              An Inventory app that keep record of a sneaker collection{" "}
            </span>
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
            <span className="university-name">
              SOCIAL MEAL-DIA (GROUP PROJECT){" "}
            </span>
            <span className="university-degree">
              {" "}
              Built with: MongoDB Express.js React.js Node.js Javascript HTML5{" "}
            </span>
            <span className="university-degree">
              {" "}
              SCSS Passport.js Cloudinary{" "}
            </span>
            <span className="university-degree">
              {" "}
              A social media app, Instagram for food{" "}
            </span>
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
