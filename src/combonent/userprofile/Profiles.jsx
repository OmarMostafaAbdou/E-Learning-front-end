import React, { useContext } from "react";
import UserProfile from "../UserProfile";
import InstructorProfile from "./InstructorProfile";
import { AuthContext } from "../context/AxiosProvider";
import { Navigate, json } from "react-router";

function Profiles() {
  const { login, isAuthenticated, UserID, isInstructor, isStudent } =
    useContext(AuthContext);
  let flag = JSON.parse(localStorage.getItem("user")).role;

  return (
    <>
      {flag == "student" ? (
        <Navigate to={"/user-profile"} />
      ) : (
        <Navigate to={"/inst/profile"} />
      )}
    </>
  );
}

export default Profiles;
