import style from "./SideNav2.module.css";
// import img from "../../assets/img/person.png";
import { useEffect, useState } from "react";
import axiosInstance from "../Axios/interceptor";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

function SideNav2() {
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
  const form = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = form;

  const editUser = async (data) => {
    try {
      const response = await axiosInstance.patch(
        `http://localhost:4000/user/update/${userID}`,
        data
      );
      console.log(response.data);
      navigate("/user-profile");
    } catch (error) {
      console.log(`Error in updating data ${error}`);
    }
  };

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
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>
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
        <div className="sidenav-url">
          <div className="url">
            <ul className="nav flex-column align-items-start">
              <li className="nav-item">
                <NavLink
                  to="/user-profile"
                  className={`btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
                  activeClassName="active"
                >
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="AddCourse"
                  className={` btn py-3 px-4 mb-3 text-white border-bottom ${style.navlink}`}
                  activeClassName="active"
                  data-bs-toggle="modal"
                  data-bs-target="#setting"
                >
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="setting"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Setting{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {userData && (
                  <form onSubmit={handleSubmit(editUser)}>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        User name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        {...register("fullName", {
                          required: {
                            value: true,
                            message: `USer Name is required`,
                          },
                          minLength: {
                            value: 8,
                            message: `invalid user name`,
                          },
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        htmlFor="Email"
                        {...register("Email", {
                          required: {
                            value: true,
                            message: `Email is required`,
                          },
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: `phone number is required`,
                          },
                          min: {
                            value: 8,
                          },
                        })}
                      />
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="imgURL" className="form-label">
                        Profile Picture
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        {...register('imgURL',{
                          required:false
                        })}
                      />
                    </div> */}

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default SideNav2;
