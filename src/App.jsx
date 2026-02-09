import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Popup from "../components/Popup";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Papers from "../pages/Papers";
import BookmarkedPapers from "../pages/BookmarkedPapers";
import ScrollToTop from "../pages/ScrollToTop";
import New from "../components/new";
import TeacherLogin from "../pages/TeacherLogin";
import TeacherMe from "../pages/TeacherMe";
import StudentLogin from "../pages/StudentLogin";
import StudentMe from "../pages/StudentMe";
import Intro from "../pages/Intro";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // While intro is visible, hide everything else
  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/bookmarks" element={<BookmarkedPapers />} />
        <Route path="/new" element={<New />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/me" element={<TeacherMe />} />
        <Route path="/students/login" element={<StudentLogin />} />
        <Route path="/student/me" element={<StudentMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
