// import React from 'react'
import "./Plans.css";

function FreeCard() {
  return (
    <>
      <div className="itemCard">
        <p style={{ color: "#49BBBD", fontSize: "18px", fontWeight: "bold" }}>
          Free Plan
        </p>
        <div>
          <span
            style={{ color: "#2D3436", fontSize: "48px", fontWeight: "bold" }}
          >
            Free{" "}
          </span>{" "}
          <span
            style={{ color: "#2D3436", fontSize: "12px", fontWeight: "bold" }}
          >
            {" "}
            / FOREVER
          </span>
        </div>
        <div className="properties">
          {/* <img src="src/assets/Icon Acrylic.png" alt="" /> */}
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
                fill="#C2C2C2"
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
          {/* <div className="badges"> */}
          {/* <img src="src/assets/Icon Acrylic.png" alt="" /> */}

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
                fill="#C2C2C2"
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
          {/* </div> */}
        </div>

        <div className="properties">
          {/* <img src="src/assets/Icon Acrylic.png" alt="" /> */}
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
                fill="#C2C2C2"
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

        <div className="license-button" style={{ marginTop: "140px" }}>
          <button>Try for free</button>
        </div>
      </div>
    </>
  );
}

export default FreeCard;

// import  { useState, useEffect } from 'react';
// import axiosInstance from '../../axios/interceptor';

// function FreeCard() {
//     const [freePlanData, setFreePlanData] = useState({});

//     useEffect(() => {
//         fetchFreePlanData();
//     }, []);

//     const fetchFreePlanData = async () => {
//         try {
//             const response = await axiosInstance.get('http://localhost:4000/membership/free');
//             setFreePlanData(response.data);
//         } catch (error) {
//             console.error('Error fetching free plan data:', error);
//         }
//     };

//     return (
//         <div className="itemCard">
//             <p style={{ color: "#49BBBD", fontSize: "18px", fontWeight: "bold" }}>Free Plan</p>
//             <div>
//                 <span style={{ color: "#2D3436", fontSize: "48px", fontWeight: "bold" }}>Free </span>
//                 <span style={{ color: "#2D3436", fontSize: "12px", fontWeight: "bold" }}> / FOREVER</span>
//             </div>
//             <ul>
//                 {freePlanData.benefits && freePlanData.benefits.map((benefit, index) => (
//                     <li key={index}>{benefit}</li>
//                 ))}
//             </ul>
//             <div className="license-button" style={{ marginTop: '140px' }}>
//                 <button>{freePlanData.licenseType}</button>
//             </div>
//         </div>
//     );
// }

// export default FreeCard;
