import React, { useEffect, useState } from "react";
import mainstyle from "./main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, search } from "../Redux/slices/courseslice";
import Cards from "./Cards";
import style from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function AllCourses() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.CourseReducer.courses.Course);
  const total = useSelector((state) => state.CourseReducer.courses.Total);
  const users = useSelector((state) => state.CourseReducer.courses.User);
  const categories = useSelector(
    (state) => state.CourseReducer.courses.Category
  );
  console.log(categories);

  const [page, setPage] = useState(1);
  const limit = 12;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search({ word: searchValue }));
    if (searchValue == "") {
      dispatch(getCourses({ page, limit }));
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    dispatch(getCourses({ page, limit }));
  }, [dispatch, page, limit]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className="container">
        <form className="form-inline mt-4 mb-4" onSubmit={handleSubmit}>
          <div className="position-relative">
            <input
              className="form-control form-control-sm p-2 border border-secondary rounded"
              type="text"
              placeholder="Search"
              aria-label="Search"
              style={{ paddingRight: "38px" }}
              value={searchValue}
              onChange={handleInputChange}
            />
            <button
              className={`btn ${style.search} mb-3 position-absolute border border-secondary rounded`}
              style={{
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
      <div className=" align-items-start">
        <div className="text mt-4 d-flex justify-content-between align-items-center">
          <h3 className="ms-4">Get choice of your course</h3>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 w-100 justify-content-md-center">
          {courses &&
            courses.map((item, index) => (
              <Cards
                data={item}
                user={users[index]}
                category={categories[index]}
              />
            ))}
        </div>
        <nav aria-label="Page navigation example  w-100 ">
          <ul className="pagination w-100 pe-5 pt-3 d-flex justify-content-end">
            <li className="page-item">
              <button
                className={`${page === 1 ? "d-none" : "page-link"} ${
                  mainstyle.plinks
                }`}
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                Prev
              </button>
            </li>
            <li className="page-item ">
              <span className={`page-link ${mainstyle.plinks2}`}>
                Page {page}
              </span>
            </li>
            <li className="page-item">
              <button
                className={`${total <= page * limit ? "d-none" : "page-link"} ${
                  mainstyle.plinks
                }`}
                onClick={handleNextPage}
                disabled={total <= page * limit}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        {/* <ul className="pagination">
          <li className="page-item">
            <button
              className={page === 1 ? "d-none" : "page-link"}
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Prev
            </button>
          </li>
          <span>Page {page}</span>
          <li className="page-item">
            <button
              className={total <= page * limit ? "d-none" : "page-link"}
              onClick={handleNextPage}
              disabled={total <= page * limit}
            >
              Next
            </button>
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default AllCourses;
