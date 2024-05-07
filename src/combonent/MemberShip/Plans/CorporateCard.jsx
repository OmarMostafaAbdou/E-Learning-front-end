// import React from 'react'
import "./Plans.css";

function CorporateCard() {
  return (
    <>
      <div className="itemCard">
        <p style={{ color: "#49BBBD", fontSize: "18px", fontWeight: "bold" }}>
          Corporate
        </p>
        <div>
          <span
            style={{ color: "#2D3436", fontSize: "48px", fontWeight: "bold" }}
          >
            $12{" "}
          </span>{" "}
          <span
            style={{ color: "#2D3436", fontSize: "12px", fontWeight: "bold" }}
          >
            {" "}
            / EDITOR
          </span>
        </div>
        <div className="properties">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_12_111)">
              <rect
                opacity={0.48}
                width={32}
                height={32}
                rx={16}
                fill="#55EFC4"
              />
            </g>
            <path
              d="M20.48 12.64l-6.16 6.16-2.8-2.8"
              stroke="#2D3436"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_12_111"
                x={-48}
                y={-48}
                width={128}
                height={128}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={24} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12_111"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12_111"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h5>Components-driven system</h5>
        </div>

        <div className="properties">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_12_111)">
              <rect
                opacity={0.48}
                width={32}
                height={32}
                rx={16}
                fill="#55EFC4"
              />
            </g>
            <path
              d="M20.48 12.64l-6.16 6.16-2.8-2.8"
              stroke="#2D3436"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_12_111"
                x={-48}
                y={-48}
                width={128}
                height={128}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={24} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12_111"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12_111"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h5>Sales-boosting landing pages</h5>
        </div>

        <div className="properties">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_12_111)">
              <rect
                opacity={0.48}
                width={32}
                height={32}
                rx={16}
                fill="#55EFC4"
              />
            </g>
            <path
              d="M20.48 12.64l-6.16 6.16-2.8-2.8"
              stroke="#2D3436"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_12_111"
                x={-48}
                y={-48}
                width={128}
                height={128}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={24} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12_111"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12_111"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h5>Awesome Feather icons pack</h5>
        </div>

        <div className="properties">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_12_111)">
              <rect
                opacity={0.48}
                width={32}
                height={32}
                rx={16}
                fill="#55EFC4"
              />
            </g>
            <path
              d="M20.48 12.64l-6.16 6.16-2.8-2.8"
              stroke="#2D3436"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_12_111"
                x={-48}
                y={-48}
                width={128}
                height={128}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={24} />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12_111"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12_111"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h5>Themed into 3 different styles</h5>
        </div>

        <div className="license-button" style={{ marginTop: "80px" }}>
          <button>Extended license</button>
        </div>
      </div>
    </>
  );
}

export default CorporateCard;

// import { useState, useEffect } from "react";
// import axiosInstance from "../../../axios/interceptor";

// function CorporateCard() {
//   const [corporatePlanData, setCorporatePlanData] = useState({});

//   useEffect(() => {
//     fetchCorporatePlanData();
//   }, []);

//   const fetchCorporatePlanData = async () => {
//     try {
//       const response = await axiosInstance.get(
//         "http://localhost:4000/membership/corporate"
//       );
//       setCorporatePlanData(response.data);
//     } catch (error) {
//       console.error("Error fetching corporate plan data:", error);
//     }
//   };

//   return (
//     <div className="itemCard">
//       <p style={{ color: "#49BBBD", fontSize: "18px", fontWeight: "bold" }}>
//         Corporate
//       </p>
//       <div>
//         <span
//           style={{ color: "#2D3436", fontSize: "48px", fontWeight: "bold" }}
//         >
//           ${corporatePlanData.price}{" "}
//         </span>
//         <span
//           style={{ color: "#2D3436", fontSize: "12px", fontWeight: "bold" }}
//         >
//           {" "}
//           / {corporatePlanData.duration}
//         </span>
//       </div>
//       <ul>
//         {corporatePlanData.benefits &&
//           corporatePlanData.benefits.map((benefit, index) => (
//             <li key={index}>{benefit}</li>
//           ))}
//       </ul>
//       <div className="license-button" style={{ marginTop: "80px" }}>
//         <button>{corporatePlanData.licenseType}</button>
//       </div>
//     </div>
//   );
// }

// export default CorporateCard;
