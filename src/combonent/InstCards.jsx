import { useNavigate } from "react-router-dom";
import axiosInstance from "../Axios/interceptor";
import style from "./Corsesheder.module.css";
import mainstyle from "./main.module.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

function InstCards({ data, onDelete }) {
  const navigate = useNavigate();

  // const deleteCourse = (id) => {
  //   axiosInstance
  //     .delete(`http://localhost:4000/course/${id}`)
  //     .then((response) => {
  //       console.log("Course deleted successfully.");
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting course:", error);
  //     });
  // };

  function Update(id) {
    navigate("/UpdateCourse", { state: id });
  }
  console.log(data);

  return (
    <>
      <div
        className={`card shadow border-0 d-flex justify-content-center align-items-center ${mainstyle.cards}`}
        style={{ cursor: "pointer" }}
      >
        <img
          src={`http://localhost:4000/imgs/${data.imgURL}`}
          className={style.cardimg}
          alt="Course Thumbnail"
        />
        <div className="card-body">
          <div className="techerimg d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <img
                src={`http://localhost:4000/imgs/${data.categoryID.icon}`}
                className={style.cardimg2}
                alt="Category Icon"
                style={{ cursor: "pointer" }}
              />
              <p className={`mt-3 ${style.category}`}>{data.categoryID.name}</p>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-2">
              <i className="fa-regular fa-clock mb-3 mx-2"></i>
              <p className={style.botomtext}>{data.duration} hour</p>
            </div>
          </div>
          <h5 className={style.cardTitle}>{data.title}</h5>
          <div>
            <p className={mainstyle.botomtext}>
              <ReactReadMoreReadLess
                readMoreClassName="readMoreClassName"
                charlimit={60}
                readMoreText="read more..."
                readlessText="read less..."
              >
                {data.description}
              </ReactReadMoreReadLess>
            </p>
          </div>
          <div className="techerimg d-flex justify-content-lg-between align-items-center">
            <div className="d-flex justify-content-end align-items-center mt-3">
              <p className={mainstyle.linkes}>{data.price}$</p>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-between">
          <button className={`btn ${style.but1} mb-2`} onClick={onDelete}>
            delete
          </button>
          <button
            className={`btn ${style.but2} mb-2`}
            onClick={() => Update(data._id)}
          >
            update
          </button>
        </div>
      </div>
    </>
  );
}

export default InstCards;
