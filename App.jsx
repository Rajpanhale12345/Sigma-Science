import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Popup from "./components/Popup";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Papers from "./pages/papers";
import BookmarkedPapers from "./pages/BookmarkedPapers";

function App() {
  return (
    <>
      <BrowserRouter>
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

      
          {/* <Route path="/bookmarks" element={<BookmarkedPapers />} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
