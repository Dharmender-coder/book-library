import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Courses from "./courses/courses";
import Contact from "./contact/Contacts";
import About from "./about/About";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
         
        </Routes>
      </div>
    </>
  );
};

export default App;
