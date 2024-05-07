import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/img/reg.jpg";
import axios from "axios";
import "./Register.css"; // Import your CSS file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
    getValues,
  } = useForm();
  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:4000/user/register", data)
      .then((response) => {
        console.log("Form data sent successfully:", response.data);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error sending form data:", error);
      });
  };

  console.log(getValues());

  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row row-cols-2 p-3 g-3">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src={img} className="img-fluid w-75 loginImg" />
          </div>
        </div>

        <div className="col-md-6 right">
          <div className="registerInfo loginInfo">
            <div className="switch">
              <ul>
                <li className="loginButton active">
                  <Link to="/Login">Login</Link>
                </li>
                <li className=" active">
                  <Link to="/Register">Register</Link>
                </li>
              </ul>
            </div>
            <p>
              <span style={{ color: "#49BBBD", fontSize: "20px" }}>
                Learnova ...
              </span>{" "}
              Explore boundless learning opportunities tailored just for you.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="registerForm loginForm"
            >
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control inputBox2"
                  type="text"
                  id="username"
                  {...register("fullName", { required: true, minLength: 3 })}
                />
                {errors.username && errors.username.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.username && errors.username.type === "minLength" && (
                  <span className="error">
                    Username must be at least 3 characters long
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control inputBox2"
                  type="email"
                  id="email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="error">Invalid email format</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  className="form-control inputBox2"
                  type="text"
                  id="phone"
                  {...register("phone", { required: true, minLength: 11 })}
                />
                {errors.phone && errors.phone.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.phone && errors.phone.type === "minLength" && (
                  <span className="error">
                    Phone must be at least 11 numbers long
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="nationalId">National Id</label>
                <input
                  className="form-control inputBox2"
                  type="text"
                  id="nationalId"
                  {...register("nationalId", { required: true, minLength: 14 })}
                />
                {errors.nationalId && errors.nationalId.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.nationalId &&
                  errors.nationalId.type === "minLength" && (
                    <span className="error">
                      NationalId must be at least 14 numbers long
                    </span>
                  )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control inputBox2"
                  type="Password"
                  id="password"
                  {...register("Password", {
                    required: true,
                    minLength: 8,
                    validate: (value) => {
                      const hasUpperCase = /[A-Z]/.test(value);
                      const hasLowerCase = /[a-z]/.test(value);
                      const hasNumber = /\d/.test(value);
                      const hasSpecialChar =
                        /[!@#$%^&*()_+\-=/[\]{};':"\\|,.<>//?]+/.test(value);
                      return (
                        hasUpperCase &&
                        hasLowerCase &&
                        hasNumber &&
                        hasSpecialChar
                      );
                    },
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="error">
                    Password must be at least 8 characters long
                  </span>
                )}
                {errors.password && (
                  <span className="error">
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number, and one special character
                  </span>
                )}
              </div>

              {/* <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className="form-control inputBox2"
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div> */}

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  className="form-control inputBox2"
                  type="number"
                  id="age"
                  {...register("age", { required: true, min: 1 })}
                />
                {errors.age && errors.age.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.age && errors.age.type === "min" && (
                  <span className="error">Age must be a positive number</span>
                )}
              </div>

              <div className="form-group gender-radio">
                <label>Gender</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="male"
                      {...register("gender", { required: true })}
                    />
                    <span></span> Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="female"
                      {...register("gender", { required: true })}
                    />
                    <span></span> Female
                  </label>
                </div>
                {errors.gender && errors.gender.type === "required" && (
                  <span className="error">Please select your gender</span>
                )}
              </div>
              <div className="form-group Role-radio ">
                <label>Role</label>
                <div className="">
                  <label>
                    <input
                      type="radio"
                      value="Admin"
                      {...register("role", { required: true })}
                    />
                    <span></span> Admin
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="student"
                      {...register("role", { required: true })}
                    />
                    <span></span> Student
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="instructor"
                      {...register("role", { required: true })}
                    />
                    <span></span> Instructor
                  </label>
                </div>
                {errors.role && errors.role.type === "required" && (
                  <span className="error">Please select your role</span>
                )}
              </div>

              <button
                type="submit"
                disabled={!isDirty}
                className="btn btn-primary loginButton"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterForm;
