import React from "react";
import "./BecomeCard.css";

function BecomeCard() {
  return (
    <>
      <div className=" row row-col-2 g-50px m-100px parent">
        <div className="cards">
          <div className="card col-6">
            <img
              src="src/assets/Group 40.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p
                className="card-title"
                style={{
                  color: "#252641",
                  fontSize: "26px",
                  marginTop: "20px",
                }}
              >
                Become a Teacher
              </p>
              <p
                className="card-text"
                style={{
                  color: "#696984",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: "#49BBBD",
                  color: "white",
                  margin: "35px 20px 25px 450px",
                }}
              >
                Apply a Teacher
              </button>
            </div>
          </div>

          <div className="card col-6">
            <img
              src="src/assets/Group 40.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p
                className="card-title"
                style={{
                  color: "#252641",
                  fontSize: "26px ",
                  marginTop: "20px",
                }}
              >
                Become a Coursector
              </p>
              <p
                className="card-text"
                style={{
                  color: "#696984",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: "#49BBBD",
                  color: "white",
                  margin: "35px 20px 25px 450px",
                }}
              >
                Apply a Coursector
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeCard;

// import React from 'react';
// import "./BecomeCard.css";
// import axiosInstance from "../axios/interceptor";

// function BecomeCard() {
//   const handleTeacherApply = async () => {
//     try {
//       const response = await axiosInstance.post("api/apply-teacher");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error applying as a teacher:", error);
//     }
//   };

//   const handleCoursectorApply = async () => {
//     try {
//       const response = await axiosInstance.post("api/apply-coursector");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error applying as a student:", error);
//     }
//   };

//   return (
//     <>
//       <div className=" row row-col-2 g-50px m-100px parent">
//         <div className="cards">
//           <div className="card col-6">
//             <img
//               src="src/assets/Group 40.png"
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <p
//                 className="card-title"
//                 style={{
//                   color: "#252641",
//                   fontSize: "26px",
//                   marginTop: "20px",
//                 }}
//               >
//                 Become a Teacher
//               </p>
//               <p
//                 className="card-text"
//                 style={{
//                   color: "#696984",
//                   fontSize: "20px",
//                   marginTop: "20px",
//                 }}
//               >
//                 Class, launched less than a year ago by Blackboard co-founder
//                 Michael Chasen, integrates exclusively...
//               </p>
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "#49BBBD",
//                   color: "white",
//                   margin: "35px 20px 25px 450px",
//                 }}
//                 onClick={handleTeacherApply}
//               >
//                 Apply a Teacher
//               </button>
//             </div>
//           </div>

//           <div className="card col-6">
//             <img
//               src="src/assets/Group 40.png"
//               className="card-img-top"
//               alt="..."
//             />
//             <div className="card-body">
//               <p
//                 className="card-title"
//                 style={{
//                   color: "#252641",
//                   fontSize: "26px ",
//                   marginTop: "20px",
//                 }}
//               >
//                 Become a Coursector
//               </p>
//               <p
//                 className="card-text"
//                 style={{
//                   color: "#696984",
//                   fontSize: "20px",
//                   marginTop: "20px",
//                 }}
//               >
//                 Class, launched less than a year ago by Blackboard co-founder
//                 Michael Chasen, integrates exclusively...
//               </p>
//               <button
//                 className="btn"
//                 style={{
//                   backgroundColor: "#49BBBD",
//                   color: "white",
//                   margin: "35px 20px 25px 450px",
//                 }}
//                 onClick={handleCoursectorApply}
//               >
//                 Apply a Coursector
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BecomeCard;
