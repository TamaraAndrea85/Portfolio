import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">SpaceMan </span>
            <span className="university-degree">
              Built with: Using JavaScript for DOM manipulation. HTML and CSS
              are utilized for styling.
            </span>
            <span className="university-degree">
              Developed a word game in which one player tries to guess the
              letters of a word. unsuccessful attempts are recorded by
              decreasing the number of attempts.
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
            <span className="university-name">MY-BLOG</span>
            <span className="university-degree">
              Built with: Created Front-End with React., React Redux to allow
              React components to read data from a Redux Store and dispatch
              Actions to the Store to update data. Back-end programming using
              Node, Express, and Mongoose.{" "}
            </span>
            <span className="university-degree">
              Developed a fully responsive MERN stack social media app for
              posting and sharing ideas, experiences, and reviews concerning
              natural/curly hair and hair products.{" "}
            </span>
          </div>{" "}
          <div>
            <a
              href="https://project4-myblog.herokuapp.com/"
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
              Built with: Front-End created with React, communicates with the
              back-end API RESTfully to Create, Read, Update, and Destroy
              resources with Axios. Provided design and back-end programming
              support using Node, Express, and Mongoose.{" "}
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
