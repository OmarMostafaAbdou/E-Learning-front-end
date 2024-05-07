import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/interceptor";
import { useForm } from "react-hook-form";
import style from "./UpdateProfile.module.css"; // Import CSS file for custom styles

function UpdateProfile() {
  const navigate = useNavigate();

  const location = useLocation();
  const userID = location.state;
  console.log(userID);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function UpdateProfile(data) {
    console.log(data);
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("Email", data.Email);
    formData.append("Password", data.Password);
    formData.append("age", data.age);
    formData.append("phone", data.phone);
    formData.append("gender", data.gender);
    formData.append("job", data.job);
    formData.append("aboutMe", data.aboutMe);
    formData.append("facebook", data.facebook);
    formData.append("linkedIn", data.linkedIn);
    formData.append("Website", data.Website);
    formData.append("InstructorID", userID);

    try {
      const response = await axiosInstance.put(
        `http://localhost:4000/user/instructor/${userID}`,
        data
      );

      alert(response.data.message);
      navigate("/inst/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mb-3">
        <div className="">
          <div className={style.card}>
            <div className="card-body">
              <h1 className={style.cardtitle}>Update Profile</h1>
              <form onSubmit={handleSubmit(UpdateProfile)} className="row">
                <div className="">
                  {" "}
                  <div className="mb-3">
                    <label htmlFor="fullName" className={style.formlabel}>
                      Name
                    </label>
                    <input
                      {...register("fullName", {
                        required: {
                          value: true,
                          message: "user name is required",
                        },
                        minLength: {
                          value: 8,
                          message: "invalid user name",
                        },
                      })}
                      className="form-control"
                      id="fullName"
                      type="text"
                    />
                    <p className={style.textdanger}>
                      {errors.fullName?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className={style.formlabel}>
                      Your email
                    </label>
                    <input
                      {...register("Email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                      })}
                      className="form-control"
                      id="email"
                      type="email"
                    />
                    <p className={style.textdanger}>{errors.Email?.message}</p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className={style.formlabel}>
                      Password
                    </label>
                    <input
                      {...register("Password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 8,
                          message: "invalid user name",
                        },
                      })}
                      className="form-control"
                      id="password"
                      type="password"
                    />
                    <p className={style.textdanger}>
                      {errors.Password?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className={style.formlabel}>
                      Age
                    </label>
                    <input
                      {...register("age", {
                        required: {
                          value: true,
                          message: "Age is required",
                        },
                      })}
                      className="form-control"
                      id="age"
                      type="number"
                    />
                    <p className={style.textdanger}>{errors.age?.message}</p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className={style.formlabel}>
                      Phone
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      type="text"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "user name is required",
                        },
                        minLength: {
                          value: 11,
                          message: "phone number must be 11 number",
                        },
                        maxLength: {
                          value: 11,
                          message: "phone number must be 11 number",
                        },
                      })}
                    />
                    <p className={style.textdanger}>{errors.phone?.message}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <label htmlFor="Job" className={style.formlabel}>
                      Job
                    </label>
                    <input
                      className="form-control"
                      id="Job"
                      type="text"
                      {...register("job")}
                    />
                    <p className={style.textdanger}>{errors.job?.message}</p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="AboutMe" className={style.formlabel}>
                      AboutMe
                    </label>
                    <textarea
                      className="form-control"
                      {...register("aboutMe")}
                    />
                    <p className={style.textdanger}>
                      {errors.AboutMe?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="facebook" className={style.formlabel}>
                      facebook
                    </label>
                    <input
                      className="form-control"
                      id="facebook"
                      type="text"
                      {...register("facebook")}
                    />
                    <p className={style.textdanger}>
                      {errors.facebook?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="linkedIn" className={style.formlabel}>
                      linkedIn
                    </label>
                    <input
                      className="form-control"
                      id="linkedIn"
                      type="text"
                      {...register("linkedIn")}
                    />
                    <p className={style.textdanger}>
                      {errors.linkedIn?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Website" className={style.formlabel}>
                      Website
                    </label>
                    <input
                      className="form-control"
                      id="Website"
                      type="text"
                      {...register("Website")}
                    />
                    <p className={style.textdanger}>
                      {errors.Website?.message}
                    </p>
                  </div>
                </div>

                <button className={`${style.submit}`} type="submit">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
