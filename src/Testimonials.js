import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kahlil Sassa",
      text: "Tamara is very well liked by peers and instructors, her infectious outgoing personality has the ability to life any mood in any setting. It has be an honor to work with her and to be able to call her not only a well respected engineer, but a new friend. I am sure any company would see how much of a valuable asset she will be.",
    },
    {
      name: "Vishnu",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
    },
    {
      name: "Abhishek",
      text: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
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
