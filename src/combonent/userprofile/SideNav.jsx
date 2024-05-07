import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBook,
  faChalkboard,
  faCircleQuestion,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axiosInstance from "../../Axios/interceptor";
import style from "./SideNav.module.css";

function SideNav() {
  const [userData, setUserData] = useState(null);
  const [hovering, setHovering] = useState(false);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${userID}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userID) {
      fetchData();
    }
  }, [userID]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("imgURL", file);

    try {
      await axiosInstance.put(
        `http://localhost:4000/user/UserImg/${userID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Fetch updated user data after image upload
      const response = await axiosInstance.get(
        `http://localhost:4000/user/${userID}`
      );
      setUserData(response.data.data);

      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className={style.sidenav}>
      <div
        className={`mb-3 text-center ${style.relative}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {userData && (
          <>
            <img
              src={`http://localhost:4000/imgs/${userData.imgURL}`}
              className="rounded-circle mx-auto img-fluid"
              alt="User Profile"
            />
            <label
              htmlFor="fileInput"
              className={`${style.updateicon} ${
                hovering ? style.showIcon : style.hideIcon
              }`}
            >
              <FontAwesomeIcon icon={faImage} />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </>
        )}
      </div>
      <ul className="nav flex-column align-items-start">
        <li className="nav-item">
          <NavLink
            to="profile"
            className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="AddCourse"
            className={` btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Add Course
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="AddLesson"
            className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faChalkboard} className="mr-2" />
            Add Lesson
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="AddQuiz"
            className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
            Add Quiz
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
