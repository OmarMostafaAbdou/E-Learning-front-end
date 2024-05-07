import { useState, useEffect } from "react";
import "./StarRating.css";
import axiosInstance from "../Axios/interceptor";
import PropTypes from "prop-types";

const StarRating = ({ courseId }) => {
  const UserId = localStorage.getItem("userID");
  const [lessonRating, setLessonRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [existingRating, setExistingRating] = useState(null);
  const [fetchedRating, setFetchedRating] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchExistingRating = async () => {
      try {
        const response = await axiosInstance.get(
          `http://localhost:4000/course/rating/${courseId}/${UserId}`
        );
        console.log(response);
        setExistingRating(response.data.rating || 0);
        setFetchedRating(true);
        setLessonRating(response.data.rating || 0);
      } catch (error) {
        console.error("Error fetching existing rating:", error);
      }
    };

    fetchExistingRating();
  }, [courseId, UserId]);

  const handleStarClick = async (value) => {
    try {
      setExistingRating(value);
      setLessonRating(value);
    } catch (error) {
      console.error("Error setting rating:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post(
        `http://localhost:4000/course/rating/`,
        {
          courseId: courseId,
          rating: lessonRating,
          userId: UserId,
          comments: comment,
        }
      );
      console.log(response);
      setComment("");
    } catch (error) {
      console.error("Error submitting rating and comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Comment
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="lesson-rating"
                value={starValue}
                checked={starValue === lessonRating}
                readOnly={true}
              />
              <span
                className={
                  hoveredRating >= starValue ||
                  lessonRating >= starValue ||
                  (fetchedRating &&
                    existingRating &&
                    starValue <= existingRating)
                    ? "active"
                    : ""
                }
                onClick={() => handleStarClick(starValue)}
                onMouseEnter={() => setHoveredRating(starValue)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                ★
              </span>
            </label>
          );
        })}
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-3 mt-2 download-button"
      >
        Confirm
      </button>
    </form>
  );
};

export default StarRating;
