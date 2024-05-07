import { FaClock } from "react-icons/fa";
import "./CoursePlay.css";
import CourseVideo from "./CourseVideo";
import img from "../assets/img/downloadpdf51369761.png";

function CoursePlay({ lesson, Course }) {
  return (
    <>
      <div className="bg text-white p-4 mt-3 w-100 rounded-4 mb-4 ">
        <div className="row w-100  align-items-center">
          <h1>{Course.title}</h1>
          <div className="col-md-6 ">
            <p className="fs-4">{lesson.title}</p>
          </div>
          <div className="col-md-6">
            <div className="fs-5 d-flex align-items-center justify-content-end">
              <span>{lesson.duration}</span>
              <FaClock className="ms-1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CourseVideo data={lesson.content.video} />
      </div>
      <div>
        <a className="btn mb-3 ms-1" href={lesson.content.document} download>
          <img src={img} className="pdf" /> {lesson.content.document}
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* <div className="mb-4">
              <h2 className="fs-4 mb-3">Subject</h2>
              <p className="text-muted">{lesson.subject}</p>
            </div> */}
            <div className="mb-4">
              <h2 className="fs-4 mb-3">Course Field</h2>
              <p className="text-muted">{lesson.lessonField}</p>
            </div>
            <div className="mb-4">
              <h2 className="fs-4 mb-3">Description</h2>
              <p className="text-muted">{lesson.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursePlay;
