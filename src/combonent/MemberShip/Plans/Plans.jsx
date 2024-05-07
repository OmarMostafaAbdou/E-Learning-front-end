// import React from 'react'
import FreeCard from "./FreeCard";
import IndividualCard from "./IndividualCard";
import CorporateCard from "./CorporateCard";
import "./Plans.css";

function Plans() {
  return (
    <>
      <div className="items container mb-5">
        <p
          className="Affordable-Pricing mx-auto "
          style={{
            color: "#49BBBD",
            fontSize: "64px",
            fontWeight: "bolder",
            margin: "50px auto",
          }}
        >
          Affordable pricing
        </p>
        <div className="child">
          <FreeCard />
          <IndividualCard />
          <CorporateCard />
        </div>
      </div>
    </>
  );
}

export default Plans;
