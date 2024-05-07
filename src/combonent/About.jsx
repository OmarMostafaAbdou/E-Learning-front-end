import React from "react";
import img from "../assets/img/learning-education-ideas-insight-intelligence-study-concept.jpg";
import style from "./About.module.css";

function About() {
  return (
    <>
      <section className={style.About}>
        <h1 className="ahtext text-center ms-4 mb-5 mt-4">About us</h1>
        <div className="container  mt-4">
          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ${style.row}`}
          >
            <div className={`col ms-2 me-5 ${style.backimg}`}>
              <img src={img} className={style.Aimg} />
            </div>
            <div className={`col ms-2 ${style.atext}`}>
              <h1>
                Welcome to our <br />
                e-learning center
              </h1>
              <p>
                we believe in the transformative power of education. Our mission
                is to make <br /> learning accessible, engaging and personalized
                for each individual, regardless <br /> of their origin or
                location. We are committed to creating a global community <br />{" "}
                of learners who can thrive in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
