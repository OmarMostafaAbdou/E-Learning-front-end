import React from "react";
import Homeheder from "./Homeheder";
import About from "./About";
import TopCategoroes from "./TopCategoroes";
import PopulerCourses from "./PopulerCourses";
import StudentsOpinion from "./StudentsOpinion";
import Fav from "./Fav";

function Home() {
  return (
    <>
      <Homeheder />
      <About />
      <Fav />
      {/* <PopulerCourses /> */}
      <StudentsOpinion />
    </>
  );
}

export default Home;
