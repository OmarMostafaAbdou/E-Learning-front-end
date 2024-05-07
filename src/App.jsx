import Footer from "./combonent/Footer";
import Corses from "./combonent/Corses";
import Nav from "./combonent/Nav";
import React from "react";
import Home from "./combonent/Home";
import Corsdetels from "./combonent/Corsdetels";
import { Route, Router, Routes } from "react-router-dom";
import RegisterForm from "./combonent/Register/Register";
import LoginForm from "./combonent/Login/Login";
import AllCousres from "./combonent/AllCousres";
import CategoryCourse from "./combonent/CategoryCourse";
import InstructorProfile from "./combonent/userprofile/InstructorProfile";
import AddLessons from "./combonent/userprofile/AddLessons";
import Info from "./combonent/userprofile/Info";
import AddCourses from "./combonent/userprofile/AddCourses";
import QuizForm from "./combonent/userprofile/AddQuizzes";
import UpdateProfile from "./combonent/userprofile/UpdateProfile";
import Checkout from "./combonent/Checkout";
import CourseView from "./combonent/CourseView";
import Questions from "./combonent/Questions";
import UserProfile from "./combonent/UserProfile";
import INSTRUCTOR from "./combonent/Instructor copy";
import Profiles from "./combonent/userprofile/Profiles";
import Aboutus from "./combonent/Aboutus";
import Chat from "./combonent/Chat";
import MemberShip from "./combonent/MemberShip/MemberShip";
import UpdateCourse from "./combonent/userprofile/UpdateCourse";
import Contact from "./combonent/Contact";
import Notfound from "./combonent/Notfound";

function App() {
  return (
    <>
      <React.Fragment>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Corsdetels />} />
          <Route path="/inst" element={<InstructorProfile />}>
            <Route path="AddCourse" element={<AddCourses />} />
            <Route path="UpdateProfile" element={<UpdateProfile />} />
            <Route path="AddLesson" element={<AddLessons />} />
            <Route path="AddQuiz" element={<QuizForm />} />
            <Route path="profile" element={<Info />} />
          </Route>
          <Route path="/corses" element={<Corses />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/courses" element={<AllCousres />} />
          <Route path="/category" element={<CategoryCourse />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/CourseView" element={<CourseView />} />
          <Route path="/Quiz" element={<Questions />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/instructor" element={<INSTRUCTOR />} />
          <Route path="/role" element={<Profiles />} />
          <Route path="/teach" element={<Aboutus />} />
          <Route path="/room" element={<Chat />} />
          <Route path="/memberShip" element={<MemberShip />} />
          <Route path="UpdateCourse" element={<UpdateCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;