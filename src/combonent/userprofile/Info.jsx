import axiosInstance from "../../Axios/interceptor";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AxiosProvider";
import style from "./Info.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstCourse, getInstCourse } from "../../Redux/slices/instCourse";
import InstCard from "../InstCards";
import { Swiper, SwiperSlide } from "swiper/react";

function Info() {
  const dispatcher = useDispatch();

  const instCourseItems = useSelector(
    (state) => state.instCourseReducer.instCourse || []
  );
  console.log(instCourseItems);

  const navigate = useNavigate();
  const { UserID } = useContext(AuthContext);

  const location = useLocation();
  const users = location.state;

  useEffect(() => {
    dispatcher(getInstCourse(UserID));
  }, [dispatcher, UserID]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);

  const goUpdate = () => {
    navigate("/inst/UpdateProfile", { state: UserID });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/user/${UserID}`
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (UserID) {
      fetchData();
    }
  }, [UserID]);

  const handleDeleteCourse = async (id) => {
    try {
      await dispatcher(deleteInstCourse(id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };
  return (
    <div className="container mt-4">
      <div className="bg-white shadow rounded p-4  m-auto">
        <div className="d-flex align-items-center justify-content-between">
          <h3 className="text-lg font-bold">Personal Information</h3>
          <FontAwesomeIcon
            icon={faPen}
            onClick={goUpdate}
            className="cursor-pointer"
          />
        </div>
        <div className="p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <span className={style.label}>Name : </span>
                <span>{userData && userData.fullName}</span>
              </div>
              <div className="mb-3">
                <span className={style.label}>Email : </span>
                <span>{userData && userData.Email}</span>
              </div>
              <div className="mb-3">
                <span className={style.label}>Age : </span>
                <span>{userData && userData.age}</span>
              </div>
              <div className="mb-3">
                <span className={style.label}>National ID : </span>
                <span>{userData && userData.nationalId}</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <span className={style.label}>Phone : </span>
                <span>{userData && userData.phone}</span>
              </div>
              <div className="mb-3">
                <span className={style.label}>Role : </span>
                <span>{userData && userData.role}</span>
              </div>
              <div className="mb-3">
                <span className={style.label}>Gender : </span>
                <span>{userData && userData.gender}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {instCourseItems.map((insCourse, index) => (
          <SwiperSlide key={index}>
            <InstCard
              data={insCourse}
              onDelete={() => handleDeleteCourse(insCourse._id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Info;
