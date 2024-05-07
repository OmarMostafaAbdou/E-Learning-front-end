import React, { useContext, useEffect, useState } from "react";
import style from "./Nav.module.css";
import logo from "../assets/img/V01.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AxiosProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Nav() {
  const navigate = useNavigate();
  const { isAuthenticated, userName, userImg, logout, user } =
    useContext(AuthContext);

  const [imgUrl, setImgUrl] = useState(userImg);

  useEffect(() => {
    // Update image URL when userImg changes
    setImgUrl(userImg);
  }, [userImg]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${style.nav}`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-5" to="/">
          <img src={logo} className={style.logo} alt="Logo" />
        </NavLink>
        <div
          className={`collapse navbar-collapse ms-3 ${style.links}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink className="nav-link active ms-3 me-3" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link active ms-3 me-3" to="/courses">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link active ms-3 me-3" to="/memberShip">
                Membership
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link active ms-3 me-3" to="/contact">
                ContactUs
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link active ms-3 me-3" to="/teach">
                Teach in Learnova
              </NavLink>
            </li>
          </ul>
        </div>
        <form className={`d-flex ${style.form}`} role="search">
          {isAuthenticated ? (
            <div className={`nav-item dropdown row ${style.dropdown}`}>
              <img
                src={`http://localhost:4000/imgs/${imgUrl}`}
                alt="User"
                className={`col-3 mt-2 ${style.img}`}
              />
              <div className="col-3">
                <a
                  className="nav-link dropdown-toggle w-100 me-5 mt-3"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userName}
                </a>
                <ul
                  className={`dropdown-menu mt-3 ms-5`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <NavLink
                      className="ms-1 nav-link active"
                      to="/role"
                      state={user}
                    >
                      Settings
                    </NavLink>
                  </li>
                  <hr />
                  <button
                    className={`btn rounded-pill ${style.logout}`}
                    onClick={async () => {
                      logout();
                      await navigate("/Login");
                    }}
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <li
                className={`btn btn-outline-light mt-2 rounded-pill ${style.log}`}
              >
                <NavLink className="nav-link active ms-2 me-2" to="/Login">
                  Login
                </NavLink>
              </li>
              <li
                className={`btn btn-outline-light rounded-pill ms-3 me-3 mt-2 ${style.log}`}
              >
                <NavLink className="nav-link active ms-3  me-3" to="/register">
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </form>
      </div>
    </nav>
  );
}

export default Nav;
