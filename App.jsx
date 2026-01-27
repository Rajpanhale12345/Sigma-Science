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
import Papers from "./pages/Papers";
import BookmarkedPapers from "./pages/BookmarkedPapers";
import ScrollToTop from "./pages/ScrollToTop";
import New from "./components/new";

function App() {
  return (
    <>
      <BrowserRouter>
         <ScrollToTop />
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

      
         
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
