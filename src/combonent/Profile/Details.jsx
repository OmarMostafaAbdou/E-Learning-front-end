import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/interceptor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./UserInfo.css";

import { getUserCourse } from "../../Redux/slices/UserCourse";
import { useNavigate } from "react-router-dom";
import { getRecommendation } from "../../Redux/slices/RecomendationSlice";
import Cards from "../Cards";
import { useDispatch, useSelector } from "react-redux";

function Details() {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem("userID");
  console.log(userId);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const dispatcher = useDispatch();
  const UsercourseItems = useSelector(
    (state) => state.UserCourseReducer.UserCourses.Course || []
  );
  console.log(UsercourseItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${userId}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    dispatcher(getUserCourse(userId));
  }, [dispatcher, userId]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const courseItems = useSelector(
    (state) => state.RecommendationReducer.courseData.Course || []
  );
  console.log(courseItems);
  const usersData = useSelector(
    (state) => state.RecommendationReducer.courseData.User || []
  );
  const categoriesData = useSelector(
    (state) => state.RecommendationReducer.courseData.Category || []
  );
  alert("ssss");
  useEffect(() => {
    dispatcher(getRecommendation(userId));
  }, [dispatcher, userId]);

  if (!courseItems.length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="main mt-5">
        <h2>IDENTITY</h2>
        {userData && (
          <div className="card">
            <div className="card-body">
              <i className="fa fa-pen fa-xs edit"></i>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{userData.fullName}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{userData.Email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>:</td>
                    <td>{userData.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <h2>COURSES</h2>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Course
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {UsercourseItems.map((course, index) => (
              <button
                key={index}
                className="dropdown-item"
                onClick={() => handleCourseSelect(course)}
              >
                {course[0].title}
              </button>
            ))}
          </div>
        </div>

        {selectedCourse && (
          <>
            <h2>COURSE DETAILS</h2>
            <div className="course-card">
              <div className="img">
                <img
                  src={`http://localhost:4000/imgs/${selectedCourse[0].imgURL}`}
                />
              </div>
              <div className="content">
                <h2>{selectedCourse[0].title}</h2>
                <p>{selectedCourse[0].description}</p>
                <progress id="file" value="32" max="100"></progress>
                <a
                  onClick={() =>
                    Navigate("/CourseView", { state: selectedCourse[0] })
                  }
                  className="btn btn-primary"
                >
                  Start now <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="container">
        <h3>🌟 Explore Personalized Recommendations Just for You</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {courseItems.map((item, index) => (
            <div key={item.id} className="col-md-3  m-auto ">
              <SwiperSlide>
                <Cards
                  data={item}
                  user={usersData[index]}
                  category={categoriesData[index]}
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Details;
