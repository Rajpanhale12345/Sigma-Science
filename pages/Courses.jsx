// Courses.jsx
import React from "react";
import "../components/Courses.css";

import first from "../Images/11thand12th.webp";
import neet from "../Images/neet.webp";
import jee from "../Images/JEE.webp";
import mhtcet from "../Images/MHT-CET.webp";
import banner from "../Images/banner.webp";


const circle = [
  {
    id: 1,
    title: "11th and 12th Science"
  },
  {
    id: 1,
    title: "NEET Coaching"
  },
  {
    id: 1,
    title: "JEE (Mains + Advanced Coaching)"
  },
  {
    id: 1,
    title: "MHT-CET Coaching"
  }
]




const Courses = () => {
  return (
    <>



      <div className="courses-page">
        {/* Banner */}
        <div className="banner">
          <img className="banner-img" src={banner} alt="Courses banner" />

          <div className="banner-content">
            <h1>Courses</h1>

          </div>
        </div>
<br /><br />
        <hr className="divider" />
        <div className="main">
          {circle.map((c) => (
            <div key={c.id} className="circle-box">{c.title}</div>
          ))}
        </div>

        <br /><br /><hr />
        {/* 11th & 12th */}
        <section className="course-section">
          <div className="course-image">
            <h3>11th and 12th Science</h3>
            <img src={first} alt="11th and 12th Science" />
          </div>

          <div className="course-content">


            <ul style={{ paddingLeft: 0, marginLeft: 0, textAlign: "left" }}>
              <li>
                <strong>Board + Competitive Ready:</strong> Simultaneous
                preparation for HSC + NEET, JEE, MHT-CET.
              </li>
              <li>
                <strong>Small Batch Size (25 Students):</strong> More focus,
                more interaction, more personal guidance.
              </li>
              <li>
                <strong>Regular Assessments & DPPs:</strong> Weekly tests, Daily
                Practice Papers, and chapter-end quizzes.
              </li>
              <li>
                <strong>Expert Faculty:</strong> Guidance by teachers with 10+
                years experience in Board & Entrance prep.
              </li>
              <li>
                <strong>Dedicated Doubt Clearing:</strong> Every question gets
                answered—no student left behind.
              </li>
            </ul>
          </div>
        </section>

        <hr className="divider" />

        {/* NEET (reverse) */}
        <section className="course-section reverse">
          <div className="course-image">
            <h3>NEET Coaching</h3>
            <img src={neet} alt="NEET Coaching" />
          </div>

          <div className="course-content">


            <ul style={{ paddingLeft: 0, marginLeft: 0, textAlign: "left" }}>
              <li>
                <strong>NCERT-Centric Teaching:</strong> Every chapter from
                NCERT Biology, Chemistry & Physics covered with depth.
              </li>
              <li>
                <strong>Proven Results:</strong> 12+ years of strong ranks and
                consistent toppers.
              </li>
              <li>
                <strong>Targeted Practice & Mock Tests:</strong> Chapter-wise
                MCQs, DPPs, and full-length NEET simulations.
              </li>
              <li>
                <strong>Performance Tracking:</strong> Weekly assessments with
                analysis to improve accuracy and speed.
              </li>
              <li>
                <strong>Concept-Based Learning:</strong> Visual explanations,
                logical flow, and clarity-first teaching.
              </li>
            </ul>
          </div>
        </section>

        <hr className="divider" />

        {/* JEE */}
        <section className="course-section">
          <div className="course-image">
            <h3>JEE (Mains + Advanced Coaching)</h3>
            <img src={jee} alt="JEE Coaching" />
          </div>

          <div className="course-content">


            <ul style={{ paddingLeft: 0, marginLeft: 0, textAlign: "left" }}>
              <li>
                <strong>IIT-Level Concept Mastery:</strong> Clear concepts using
                visuals, analogies, and structured learning paths.
              </li>
              <li>
                <strong>Strong Foundation:</strong> Build depth in Physics,
                Chemistry, and Mathematics from basics to advanced.
              </li>
              <li>
                <strong>Main + Advanced Strategy:</strong> Separate approach for
                speed-based Main and analytical Advanced.
              </li>
              <li>
                <strong>Small Batches (35 Students):</strong> Personal attention,
                faster doubt solving, tailored guidance.
              </li>
              <li>
                <strong>Expert Mentorship:</strong> Learn from top educators who
                know what it takes to crack JEE.
              </li>
            </ul>
          </div>
        </section>

        <hr className="divider" />

        {/* MHT-CET (reverse) */}
        <section className="course-section reverse">
          <div className="course-image">
            <h3>MHT-CET Coaching</h3>
            <img src={mhtcet} alt="MHT-CET Coaching" />
          </div>

          <div className="course-content">


            <ul style={{ paddingLeft: 0, marginLeft: 0, textAlign: "left" }}>
              <li>
                <strong>State Board Integration:</strong> CET prep aligned with
                Maharashtra Board syllabus.
              </li>
              <li>
                <strong>Speed + Accuracy Training:</strong> Pattern drills and
                time-saving solving methods.
              </li>
              <li>
                <strong>Full-Length Mock Tests:</strong> Exam-like simulations
                with scoring and error tracking.
              </li>
              <li>
                <strong>Subject-Wise MCQ Banks:</strong> Topic-wise questions
                with explanations for confidence.
              </li>
              <li>
                <strong>Weekly Tests & Quizzes:</strong> Track progress and fix
                weak areas quickly.
              </li>
              <li>
                <strong>Shortcuts & Trick Sessions:</strong> Smart methods for
                Physics, Chemistry, and Math/Biology.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;
