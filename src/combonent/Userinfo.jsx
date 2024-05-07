/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axiosInstance from "../Axios/interceptor";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./UserInfo.css";

import { getUserCourse } from "../Redux/slices/UserCourse";
import { useNavigate } from "react-router-dom";
import { getRecommendation } from "../Redux/slices/RecomendationSlice";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";

function UserInfo() {
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
  useEffect(() => {
    dispatcher(getRecommendation(userId));
  }, [dispatcher, userId]);

  if (!courseItems.length) {
    return (
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
            className="btn select-btn dropdown-toggle"
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
                {course[0] && course[0].title}
              </button>
            ))}
          </div>
        </div>

        {selectedCourse && (
          <>
            <h2>COURSE UserInfo</h2>
            <div className="course-card">
              <div className="img">
                <img
                  src={`http://localhost:4000/imgs/${selectedCourse[0].imgURL}`}
                />
              </div>
              <div className="content">
                <h2>{selectedCourse[0].title}</h2>
                <p>{selectedCourse[0].description}</p>
                <a
                  onClick={() =>
                    Navigate("/CourseView", { state: selectedCourse[0] })
                  }
                  className="btn list-btn"
                >
                  Start now <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    );
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
            className="btn select-btn dropdown-toggle"
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
                {course && course.length > 0 ? course[0].title : ""}
              </button>
            ))}
          </div>
        </div>

        {selectedCourse && (
          <>
            <h2>COURSE UserInfo</h2>
            <div className="course-card">
              <div className="img">
                <img
                  src={`http://localhost:4000/imgs/${selectedCourse[0].imgURL}`}
                />
              </div>
              <div className="content">
                <h2>{selectedCourse[0].title}</h2>
                <p>{selectedCourse[0].description}</p>
                <a
                  onClick={() =>
                    Navigate("/CourseView", { state: selectedCourse[0] })
                  }
                  className="btn list-btn"
                >
                  Start now <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      {console.log("courseItems:", courseItems)}
      <div className=" swiper-content ">
        <h3>🌟 Explore Personalized Recommendations Just for You</h3>
        <Swiper
          // spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {courseItems &&
            courseItems.map((item, index) => (
              <SwiperSlide
                className="flex justify-content-center"
                key={item.id}
              >
                <Cards
                  data={item}
                  user={usersData[index]}
                  category={categoriesData[index]}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default UserInfo;
