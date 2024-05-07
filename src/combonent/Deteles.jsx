import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./Deteles.module.css";
import timg from "../assets/img/Group 237.png";
import axiosInstance from "../Axios/interceptor";

function Deteles({ course }) {
  const [topRating, setToprating] = useState("");
  const [Comment, setComment] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    async function getToprating() {
      const response = await axiosInstance.get(
        `http://localhost:4000/course/rating/${course._id}`
      );
      console.log(response.data.data.rating);
      setToprating(response.data.data.rating);

      return response;
    }

    getToprating();
  }, []);

  useEffect(() => {
    async function getComment() {
      const response = await axiosInstance.get(
        `http://localhost:4000/course/rating/comments/${course._id}`
      );
      console.log(response.data.data);
      setComment(response.data.data.rating);
      setUsers(response.data.data.user);

      return response;
    }

    getComment();

    console.log(Comment);
  }, []);

  const [ratingsCount, setRatingsCount] = useState(null);
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return date.toLocaleString("en-US", options);
  }
  useEffect(() => {
    async function fetchRatingsCount() {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/course/ratingCount/${course._id}`
        );
        console.log("Response data:", response.data.data);
        setRatingsCount(response.data.data);
      } catch (error) {
        console.error("Error fetching ratings count:", error);
      }
    }

    fetchRatingsCount();
    console.log(Comment);
  }, [course._id]);
  const totalRatings = ratingsCount
    ? Object.values(ratingsCount).reduce((total, count) => total + count, 0)
    : 0;

  return (
    <>
      <div className={style.contaner}>
        <div className={style.raiting}>
          <div className="row">
            <div className="col-sm-3  mb-3 mb-sm-0">
              <div className={style.rait}>
                <h5>{topRating || 0} out of 5</h5>
                <div>
                  {[...Array(5)].map((_, index) => {
                    return (
                      <label key={index}>
                        <FaStar className={style.star} />
                      </label>
                    );
                  })}
                </div>
                <p>Top Raiting</p>
              </div>
            </div>
            {ratingsCount && (
              <div className="col-sm-9 mt-3 ">
                <div>
                  <div className={style.stars}>
                    <p>5 Stars</p>
                    <div className={`d-flex ${style.reat}`}>
                      <div
                        style={{
                          width: `${
                            ratingsCount && ratingsCount[5]
                              ? (ratingsCount[5] / totalRatings) * 100
                              : 0
                          }%`,
                          backgroundColor: ratingsCount
                            ? "#49bbbd"
                            : "transparent",
                          height: "6px",
                          borderRadius: "2px",
                        }}
                      ></div>
                    </div>
                    <p>{ratingsCount[5]} Students</p>
                  </div>

                  <div className={style.stars}>
                    <p>4 Stars</p>
                    <div className={style.reat}>
                      <div
                        style={{
                          width: `${
                            ratingsCount && ratingsCount[4]
                              ? (ratingsCount[4] / totalRatings) * 100
                              : 0
                          }%`,
                          backgroundColor: ratingsCount
                            ? "#49bbbd"
                            : "transparent",
                          height: "6px",
                          borderRadius: "2px",
                        }}
                      ></div>
                    </div>
                    <p>{ratingsCount[2]} Students</p>
                  </div>

                  <div className={style.stars}>
                    <p>3 Stars</p>
                    <div className={style.reat}>
                      <div
                        style={{
                          width: `${
                            ratingsCount && ratingsCount[3]
                              ? (ratingsCount[3] / totalRatings) * 100
                              : 0
                          }%`,
                          backgroundColor: ratingsCount
                            ? "#49bbbd"
                            : "transparent",
                          height: "6px",
                          borderRadius: "2px",
                        }}
                      ></div>
                    </div>
                    <p>{ratingsCount[3]} Students</p>
                  </div>

                  <div className={style.stars}>
                    <p>2 Stars</p>
                    <div className={style.reat}>
                      <div
                        style={{
                          width: `${
                            ratingsCount && ratingsCount[2]
                              ? (ratingsCount[2] / totalRatings) * 100
                              : 0
                          }%`,
                          backgroundColor: ratingsCount
                            ? "#49bbbd"
                            : "transparent",
                          height: "6px",
                          borderRadius: "2px",
                        }}
                      ></div>
                    </div>
                    <p>{ratingsCount[2]} Students</p>
                  </div>
                  <div className={style.stars}>
                    <p>1 Stars</p>
                    <div className={style.reat}>
                      <div
                        style={{
                          width: `${
                            ratingsCount && ratingsCount[1]
                              ? (ratingsCount[1] / totalRatings) * 100
                              : 0
                          }%`,
                          backgroundColor: ratingsCount
                            ? "#49bbbd"
                            : "transparent",
                          height: "6px",
                          borderRadius: "2px",
                        }}
                      ></div>
                    </div>
                    <p>{ratingsCount[1]} Students</p>
                  </div>
                </div>
              </div>
            )}

            {Comment.map((comment, index) => (
              <div key={index}>
                <hr className={style.line} />
                <div className={style.text}>
                  <div className="d-flex justify-content-lg-between align-items-center  mt-2">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        src={`http://localhost:4000/imgs/${Users[index].imgURL}`}
                        className={style.cardimg2}
                        alt=""
                      />
                      <p className="mt-3">{Users[index].fullName}</p>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mt-3">
                      <i className="fa-regular fa-clock mb-3 mx-2 "></i>
                      <p className={style.botomtext}>
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                  {comment.comments ? (
                    <p>{comment.comments}</p>
                  ) : (
                    <p>no comments</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Deteles;
