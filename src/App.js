import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Expericence";
import Skills from "./Skills";
import Projects from "./Projects";
import "./styles.css";
import Testimonials from "./Testimonials";
import Typed from "typed.js";
export default function App() {
  const [education, setEducation] = useState(true);
  const [experience, setExperience] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Full-Stack Software Engineer ",
        " Dedicated over 500 hours of study in Software Engineering Immersive Online program (Flex) ",
        " Prioritizes user experience",
        "Developed four projects including one group project",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
      // cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function SetAllFalse() {
    setEducation(false);
    setExperience(false);
    setSkills(false);
    setProjects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new ">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            Tamara Wilburn{" "}
          </span>
          <div
            className={
              !opennav
                ? "bars mx-2 transition-all "
                : " transition-all open bars mx-2 "
            }
            style={{ background: opennav && "#02203c" }}
            onClick={() => setopennav(!opennav)}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? " d-flex bg-new px-9 navbar-new py-7 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name">Tamara Andrea</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home{" "}
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#testimonials"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Testimonial
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Tamara Wilburn</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className="Im-text-subheading">
                I enjoy building front and back-end applications
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  href="https://docs.google.com/document/d/1Dl9-LePRvmeaZaJhv424PNKUVWYOgtPE/edit"
                  className="btn-resume-me"
                  target=""
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dsruc2myl/image/upload/v1702689219/gjgrkyqnqztdxaokvg7w.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {" "}
            About me
          </span>
          <span className="why-text-sub">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets2.lottiefiles.com/packages/lf20_hxxcr0qd.json"
                background="transparent"
                speed="1"
                // style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Result oriented and motivated; I’m an entry-level Software
                Engineer who believes that learning lasts a lifetime. looking
                forward to generating high-end solutions, improving end-user
                experience, and showcasing my skills and knowledge in programing
                at a leading organization. With over 11 years in physical
                therapy, I have extensive experience in not only compassion, but
                customer service, and being a team player.
              </span>
              <span className="few-highlights">
                <span className="few-text">Highlights</span>
                <span className="few-list">
                  <ul>
                    <li> Full-Stack web developer</li>
                    <li>
                      Software Engineering Immersive graduate from General
                      Assembly
                    </li>
                    <li>Interested in exploring new challenges</li>
                    <li>Thrives on learning</li>
                    {/* <li> Docker,Kubernetes,AWS</li> */}
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">see above for full</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex  px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fas fa-user-graduate"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-briefcase"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-code"></i>{" "}
              </span>
              <span className="icons-span">
                <i className="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education{" "}
              </span>
              <span
                className={
                  experience === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setExperience, true);
                }}
              >
                Experience{" "}
              </span>
              <span
                className={
                  skills === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setSkills, true);
                }}
              >
                Skills{" "}
              </span>
              <span
                className={
                  projects === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProjects, true);
                }}
              >
                Projects{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {experience === true && <Experience />}
            {skills === true && <Skills />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="testmonails-part my-5" id="testimonials">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Testimonials</span>
          <span className="why-text-sub mb-5">
            What do others think about me?{" "}
          </span>
          <Testimonials />
        </div>
      </div>

      <div className="contact-me-part " id="contactme">
        <div className="relative-bg"> </div>

        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5"> Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
