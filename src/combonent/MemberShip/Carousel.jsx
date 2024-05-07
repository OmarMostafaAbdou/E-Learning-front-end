import "./Carousel.css";

function Carousel() {
  return (
    <>
      <div className="comments-section">
        <div className="students-comments">
          <p style={{ color: "#2D3436", fontSize: "36px", fontWeight: "bold" }}>
            What our students have to say
          </p>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                <div
                  className="row row-col-4"
                  style={{
                    gap: "20px",
                    display: "flex",
                    flexDirection: "row-reverse",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="carousel-card col-3 ">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                <div className="row row-col-4" style={{ gap: "20px" }}>
                  <div className="carousel-card col-3 ">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                <div className="row row-col-4" style={{ gap: "20px" }}>
                  <div className="carousel-card col-3 ">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>

                  <div className="carousel-card col-3">
                    <img
                      src="src\assets\image 12.png"
                      alt=""
                      style={{
                        backgroundColor: "#D9D9D9",
                        borderRadius: "6px",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#2D3436",
                          fontSize: "24px",
                          fontWeight: "bold",
                          margin: "20px",
                        }}
                      >
                        Bulkin Simons
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#696984",
                          fontSize: "18px",
                          margin: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmodadipiscing elit, sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#49BBBD",
                zIndex: "auto",
                margin: "170px -20px",
              }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#49BBBD",
                zIndex: "auto",
                margin: "170px -20px",
              }}
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;

// import  { useState, useEffect } from 'react';
// import './Carousel.css';
// import axiosInstance from '../../axios/interceptor';

// function Carousel() {
//     const [comments, setComments] = useState([]);
//     const [position, setPosition] = useState(0);
//     const cardWidth =  385;
//     const cardsToShow = 4;

//     useEffect(() => {
//         fetchComments();
//     }, []);

//     const fetchComments = async () => {
//         try {
//             const response = await axiosInstance.get('http://localhost:4000/course/comments/:id');
//             setComments(response.data);
//         } catch (error) {
//             console.error('Error fetching comments:', error);
//         }
//     };

//     const handlePrevClick = () => {
//         setPosition(prevPosition => Math.max(0, prevPosition - (cardWidth * cardsToShow)));
//     };

//     const handleNextClick = () => {
//         const maxPosition = Math.max(0, (comments.length - cardsToShow) * cardWidth);
//         setPosition(prevPosition => Math.min(maxPosition, prevPosition + (cardWidth * cardsToShow)));
//     };

//     return (
//         <div className="comments-section">
//             <div className="students-comments">
//                 <p style={{ color: '#2D3436', fontSize: '36px', fontWeight: 'bold' }}>What our students have to say</p>
//                 <div id="carouselExample" className="carousel slide">
//                     <div className="carousel-inner" style={{ transform: `translateX(-${position}px)` }}>
//                         {comments.map((comment, index) => (
//                             <div key={index} className="carousel-item" style={{ width: `${cardWidth}px` }}>
//                                 <div className="comment">{comment.text}</div>

//                             </div>
//                         ))}
//                     </div>
//                     <button
//                         className="carousel-control-prev"
//                         type="button"
//                         onClick={handlePrevClick}
//                     >
//                         <span className="carousel-control-prev-icon" aria-hidden="true" />
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button
//                         className="carousel-control-next"
//                         type="button"
//                         onClick={handleNextClick}
//                     >
//                         <span className="carousel-control-next-icon" aria-hidden="true" />
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Carousel;
