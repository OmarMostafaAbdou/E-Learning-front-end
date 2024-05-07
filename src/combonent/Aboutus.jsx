import React from "react";
import style from "./About.module.css";
import img from "../assets/img/20945820-removebg-preview.png";
import img2 from "../assets/img/20944805.jpg-removebg.png";
import check from "../assets/img/check-lg.svg";
import Group1 from "../assets/img/Group 2 2.png";
import Group2 from "../assets/img/Group 2 3.png";
import Group3 from "../assets/img/Group 2 4.png";
import Group4 from "../assets/img/Group 2 5.png";
import Accordion from "./MemberShip/Accordion";

function Aboutus() {
  return (
    <>
      <section className="mt-4 mb-4">
        <div className="container ">
          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ms-5 ${style.row}`}
          >
            <div className={`col  ${style.atext}`}>
              <h1>
                Unlock the horizons of knowledge <br /> with pleasure and ease
              </h1>
              <p>
                In our evolving digital age, technology has become an integral
                part of our educational experiences. Keeping pace with this
                development has become an urgent need to develop our skills and
                achieve our educational goals. To achieve this goal, the
                educational website is a vital platform for expanding knowledge
                prospects and enabling individuals to learn flexibly and easily.
              </p>
            </div>
            <div className={`col  ${style.backimg2}`}>
              <img src={img} className={style.Aimg} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <h1 className="ahtext text-center ms-4  mt-4">
            What makes Us different?
          </h1>

          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ms-5 ${style.row}`}
          >
            <div className={`col  ${style.backimg2}`}>
              <img src={img2} className={style.Aimg} />
            </div>
            <div className={`col  ${style.atext}`}>
              <h4 className="mb-3">
                The e-learning website offers a diverse range of educational
                resources readily available online.
              </h4>
              <div>
                <tr>
                  <th scope="row">
                    <img src={check} alt="" />
                  </th>
                  <td>Interactive Lessons</td>
                </tr>
                <tr>
                  <th scope="row">
                    <img className="me-2" src={check} alt="" />
                  </th>
                  <td> Multimedia Educational Materials</td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={check} alt="" />
                  </th>
                  <td>Assessment and Understanding Tests</td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={check} alt="" />
                  </th>
                  <td>Educational Community</td>
                </tr>
                <tr>
                  <th scope="row">
                    <img src={check} alt="" />
                  </th>
                  <td>Access Flexibility</td>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </section>
     <h1 className="text-center">Frequently Asked Questions</h1>
      <Accordion />
      <section className="mb-5">
        <div className="container ">
          <h1 className="ahtext text-center ms-4 mb-5 mt-4">Learnova team</h1>

          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ms-5 ${style.row}`}
          >
            <div className={`col  ${style.backimg2}`}>
              <img src={Group2} className={style.uAimg} />
            </div>
            <div className={`col  ${style.atext}`}>
              <h2 className="mb-3">omar mostafa</h2>
              <h4>mearn stack developer</h4>
            </div>
          </div>
          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ms-5 ${style.row}`}
          >
            <div className={`col  ${style.atext2}`}>
              <h2 className="mb-3">Abdalrahman abobakr</h2>
              <h4>mearn stack developer</h4>
            </div>
            <div className={`col  ${style.backimg2}`}>
              <img src={Group3} className={style.uAimg} />
            </div>
          </div>
          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ms-5 ${style.row}`}
          >
            <div className={`col  ${style.backimg2}`}>
              <img src={Group4} className={style.uAimg} />
            </div>
            <div className={`col  ${style.atext}`}>
              <h2 className="mb-3">Mostfa amin</h2>
              <h4>mearn stack developer</h4>
            </div>
          </div>
          <div
            className={`row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 w-100 justify-content-md-center ms-5 ${style.row}`}
          >
            <div className={`col  ${style.atext2}`}>
              <h2 className="mb-3">Saleh mohamed</h2>
              <h4>mearn stack developer</h4>
            </div>
            <div className={`col  ${style.backimg2}`}>
              <img src={Group1} className={style.uAimg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
