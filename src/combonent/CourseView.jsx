import React, { useEffect, useState } from "react";
import CoursePlay from "./CoursePlay";
import Lessons from "./Lessons";
import Quiz from "./Quiz";
import StarRating from "./StarRating";
import { useLocation, useNavigate } from "react-router-dom";
import Chat from "./Chat";
import style from "./CourseView.module.css";
import { Button } from "bootstrap";

function CourseView() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const location = useLocation();
  const courseData = location.state;
  console.log(courseData);
  const navigate = useNavigate();
  const [glow, setGlow] = useState(false);

  const handleLessonSelection = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleJoinRoom = () => {
    navigate("/room", { state: courseData });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prevGlow) => !prevGlow);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="row row-col-2 " style={{ width: "100%" }}>
        <div className="col-4 lessons text-center mt-5">
          <p
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              margin: "20px 0px 0px 20px",
            }}
          >
            Course Content
          </p>
          <Lessons onLessonSelect={handleLessonSelection} Course={courseData} />
          <Quiz Course={courseData} />
        </div>

        <div className={`offset-1 col-7 mb-4 pb-4 rounded-4  ${style.vid}`}>
          {selectedLesson && (
            <CoursePlay lesson={selectedLesson} Course={courseData} />
          )}
          <div className="container">
            <div className="mb-3">
              <StarRating courseId={courseData._id} />
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="row row-col-2" style={{ width: "100%" }}></div>

        <div className={style.buttonContainer}>
          <button
            className={`${style.joinRoomButton} ${glow ? style.glow : ""}`}
            onClick={handleJoinRoom}
          >
            Join Room
          </button>
        </div>
      </>
    </>
  );
}

export default CourseView;
