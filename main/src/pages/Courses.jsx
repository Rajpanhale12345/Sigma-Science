// Courses.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../components/Courses.css";

const Courses = () => {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const items = useMemo(
    () => [
      {
        title: "11th & 12th",
        subtitle: "Board + Competitive",
        side: "left",
        points: [
          {
            h: "Board + Competitive Ready",
            p: "Simultaneous preparation for HSC + NEET, JEE, MHT-CET.",
          },
          {
            h: "Small Batch Size (25 Students)",
            p: "More focus, more interaction, more personal guidance.",
          },
          {
            h: "Regular Assessments & DPPs",
            p: "Weekly tests, Daily Practice Papers, and chapter-end quizzes.",
          },
          {
            h: "Expert Faculty",
            p: "Teachers with 10+ years experience in Board & Entrance prep.",
          },
          {
            h: "Dedicated Doubt Clearing",
            p: "Every question gets answered—no student left behind.",
          },
        ],
      },
      {
        title: "NEET",
        subtitle: "Medical Entrance",
        side: "right",
        points: [
          {
            h: "NCERT-Centric Teaching",
            p: "Every chapter from NCERT Biology, Chemistry & Physics covered deeply.",
          },
          { h: "Proven Results", p: "12+ years of top ranks and consistent toppers." },
          {
            h: "Targeted Practice & Mock Tests",
            p: "Chapter-wise MCQs, DPPs, and full-length NEET simulations.",
          },
          {
            h: "Performance Tracking",
            p: "Weekly assessments with analysis to improve accuracy and speed.",
          },
          {
            h: "Concept-Based Learning",
            p: "Visual explanations, logical flow, and clarity-first teaching.",
          },
        ],
      },
      {
        title: "JEE",
        subtitle: "Main + Advanced",
        side: "left",
        points: [
          {
            h: "IIT-Level Concept Mastery",
            p: "Clear concepts using visuals, analogies, and structured learning paths.",
          },
          {
            h: "Strong Foundation",
            p: "Build depth in Physics, Chemistry, and Mathematics from basics to advanced.",
          },
          {
            h: "Main + Advanced Strategy",
            p: "Separate approach for speed-based Main and analytical Advanced.",
          },
          {
            h: "Small Batches (35 Students)",
            p: "Personal attention, faster doubt solving, tailored guidance.",
          },
          {
            h: "Expert Mentorship",
            p: "Learn from top educators who know what it takes to crack JEE.",
          },
        ],
      },
      {
        title: "MHT-CET",
        subtitle: "Maharashtra Entrance",
        side: "right",
        points: [
          {
            h: "State Board Integration",
            p: "CET prep aligned with Maharashtra Board syllabus.",
          },
          {
            h: "Speed + Accuracy Training",
            p: "Pattern drills and time-saving solving methods.",
          },
          {
            h: "Full-Length Mock Tests",
            p: "Exam-like simulations with scoring and error tracking.",
          },
          {
            h: "Subject-Wise MCQ Banks",
            p: "Topic-wise questions with explanations for confidence.",
          },
          {
            h: "Weekly Tests & Quizzes",
            p: "Track progress and fix weak areas quickly.",
          },
          {
            h: "Shortcuts & Trick Sessions",
            p: "Smart methods for Physics, Chemistry, and Math/Biology.",
          },
        ],
      },
    ],
    []
  );

  // 1) Reveal animation (left comes from left, right comes from right)
  useEffect(() => {
    const animated = document.querySelectorAll(".slide-left, .slide-right, .fade-up");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.25 }
    );

    animated.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 2) Timeline "growing line" progress based on scroll position
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Start growing when timeline reaches ~70% of viewport height
      const start = viewportH * 0.7;
      // Finish when timeline bottom reaches ~20% of viewport height
      const end = viewportH * 0.2;

      const total = rect.height - (start - end);
      const current = start - rect.top;

      const raw = total <= 0 ? 0 : current / total;
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="courses-page">
      {/* Timeline */}
      <section className="timeline-wrap">
        <div className="timeline-head fade-up">
          <h1>Courses</h1>
         
        </div>

        <div className="timeline" ref={timelineRef}>
          {/* Base line */}
          <span className="timeline-line" />
          {/* Progress line (grows on scroll) */}
          <span className="timeline-line-progress" style={{ transform: `scaleY(${progress})` }} />

          {items.map((item, idx) => {
            const side = item.side; // "left" | "right"
            const animClass = side === "left" ? "slide-left" : "slide-right";

            return (
              <div className={`timeline-item ${side}`} key={`${item.title}-${idx}`}>
                <div className="timeline-marker" aria-hidden="true">
                  <span className="timeline-dot" />
                  <span className="timeline-pulse" />
                </div>

                <article className={`course-card ${animClass}`}>
                  <header className="course-card-header">
                    <div className="course-title">
                      <h1>{item.title}</h1>
                      <span className="course-subtitle">{item.subtitle}</span>
                    </div>
                  
                  </header>

                  <div className="course-points">
                    {item.points.map((pt, i) => (
                      <div className="course-point" key={`${pt.h}-${i}`}>
                        <div className="bullet" aria-hidden="true" />
                        <div className="point-text">
                          <h4>{pt.h}</h4>
                          <p>{pt.p}</p>
                         
                        </div>
                        
                      </div>
                      
                    ))}
                  </div>
                   <button className="book"> Book a Consultation</button>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Courses;
