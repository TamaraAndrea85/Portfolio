import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kahlil Sassa",
      text: "Tamara is very well liked by peers and instructors, her infectious outgoing personality has the ability to life any mood in any setting. It has be an honor to work with her and to be able to call her not only a well respected engineer, but a new friend. I am sure any company would see how much of a valuable asset she will be.",
    },
    {
      name: "Destiny Cerlanek ",
      text: "I have worked with Tamara for the past 4 years in a skilled nursing rehabilitation therapy department.  Tamara has excellent communication skills along with being a team player. She is extremely organized, reliable, and is flexible enough to work on any project that is assigned to her. In addition, she is able to work independently and is able to follow through to ensure the job gets done. Tamara would be a tremendous asset for your company and has my highest recommendation.",
    },
    {
      name: "Billie Heidelberg - SEI Lead",
      text: "Tamara was a pleasure to have in class. She continuously showed growth during hard times and pushed through all adversity. I appreciate her dedication to her craft and think she will make an asset to any team.",
    },
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                <div className="card shadow testimonail-card d-flex flex-column">
                  <span className="description">{value.text} </span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
