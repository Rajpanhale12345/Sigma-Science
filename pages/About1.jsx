import React, { useRef, useEffect, useMemo } from "react";
import founder from "../Images/founder.webp";
import mission from "../Images/mission.webp";
import Who from "../Images/Who We Are.jpg";
import "../components/About.css";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About = () => {
  const whyCarouselRef = useRef(null);
  const isHoveredRef = useRef(false);

  // ✅ Change to your real domain (must match SEO.jsx)
  const SITE_URL = "https://YOUR_DOMAIN.com";

  // ✅ JSON-LD (AI Search + Google rich understanding)
  const aboutJsonLd = useMemo(() => {
    const locations = [
      {
        name: "Sigma Science Academy - Govind Nagar",
        streetAddress: "301-305, Roongta Business World, Govind Nagar",
        addressLocality: "Nashik",
        addressRegion: "MH",
        postalCode: "422008",
        addressCountry: "IN",
      },
      {
        name: "Sigma Science Academy - College Road",
        streetAddress:
          "2nd Floor, Siddhi Pooja Trade Centre Apartment, College Road",
        addressLocality: "Nashik",
        addressRegion: "MH",
        postalCode: "422005",
        addressCountry: "IN",
      },
      {
        name: "Sigma Science Academy - Ashwin Nagar",
        streetAddress: "ASD-25, Mithal Bhavan, Ashwin Nagar",
        addressLocality: "Nashik",
        addressRegion: "MH",
        postalCode: "422009",
        addressCountry: "IN",
      },
    ];

    return [
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Sigma Science Academy",
        url: SITE_URL,
        description:
          "Sigma Science Academy is a specialised institute in Nashik that provides concept-based learning for Physics, Chemistry, Mathematics and Biology with preparation pathways for JEE, NEET, MHT-CET and board exams.",
        founder: {
          "@type": "Person",
          name: "Dr. Atul Puranik",
        },
        areaServed: { "@type": "City", name: "Nashik" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Coaching Programs",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Course", name: "JEE Main / JEE Advanced" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Course", name: "NEET (UG)" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Course", name: "MHT-CET" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "11th & 12th Science Board Exams",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Course", name: "IIT Foundation Courses" },
            },
          ],
        },
        department: locations.map((l) => ({
          "@type": "EducationalOrganization",
          name: l.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: l.streetAddress,
            addressLocality: l.addressLocality,
            addressRegion: l.addressRegion,
            postalCode: l.postalCode,
            addressCountry: l.addressCountry,
          },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
        ],
      },
    ];
  }, [SITE_URL]);

  // ✅ Auto-moving carousel
  useEffect(() => {
    const container = whyCarouselRef.current;
    if (!container) return;

    let animationFrameId;
    const speed = 0.5;

    const animate = () => {
      if (!isHoveredRef.current) {
        container.scrollLeft += speed;

        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // ✅ Scroll reveal (step-by-step)
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || "0";
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("reveal-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      <SEO
        title="About | Sigma Science Academy"
        description="Learn about Sigma Science Academy in Nashik—concept-based coaching for Physics, Chemistry, Maths and Biology with preparation for JEE, NEET, MHT-CET and board exams. Founded by Dr. Atul Puranik."
        canonicalPath="/about"
        jsonLd={aboutJsonLd}
      />


      <br />
      <br />
      <main className="about-page">
        {/* About / Founder Section */}
        <section className="about-section section">
          <div className="section-inner two-column">
            <div className="text-block reveal" data-delay="0">
              <h1 className="section-title">
                Sigma Science Academy
                <br />
                <br />
              </h1>

              <p className="paragraph">
                Sigma Science Academy views education as asking the appropriate questions
                instead of remembering the appropriate answer. Passing competitive exams
                requires a solid foundation of understanding, a precise strategy, and a
                proper atmosphere to learn, which is fostered through our inquisitive nature.
              </p>

              <p>
                At Sigma Science Academy, we have established an educational facility
                established by Dr. Atul Puranik that provides excellent science-based
                educational programs for 12+ years. In addition to educating students
                in all areas necessary to succeed as confident achievers, analytical
                thinkers, engineers, and doctors. Pointing students toward future success,
                we have helped shape numerous “successful” inventors by developing their
                confidence, creativity, and ability to think scientifically.
              </p>

              <blockquote className="quote">
                “Every student can become their best self when provided with clarity,
                direction, and individual support.”
              </blockquote>
            </div>

            <div className="image-block reveal" data-delay="150">
              <img
                src={founder}
                alt="Founder of Sigma Science Academy - Atul Puranik Sir"
                className="responsive-image"

              />
            </div>
          </div>
        </section>

        <hr style={{ color: "#1A1A1A", border: "0.1px solid black" }} />

        {/* Mission Section */}
        <section className="mission-section section">
          {/* bubbles */}
          <span className="bubble bubble-lg reveal" data-delay="0"></span>
          <span className="bubble bubble-md reveal" data-delay="120"></span>
          <span className="bubble bubble-sm reveal" data-delay="240"></span>

          <div className="section-inner two-column">
            <div className="text-block reveal" data-delay="0">
              <div className="title-mission">Who We Are</div>

              <p style={{ textAlign: "left" }}>
                <span className="first-letter">S</span>
                <span className="remain">
                  igma Science Academy is a specialised institute that provides
                  science education to students through concept-based learning for
                  Physics, Chemistry, Mathematics, and Biology.
                </span>
              </p>

              <p style={{ textAlign: "left" }}>
                <span className="remain">
                  <b>Our academy provides structured pathways to assist students in passing:</b>
                </span>
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>JEE Main/JEE Advanced (India)</li>
                <li>NEET (UG)(India)</li>
                <li>MHT-CET</li>
                <li>11th &12th grade science board exams</li>
                <li>IIT foundation courses</li>
              </ul>

              <p className="remain" style={{ textAlign: "left" }}>In every instance, our teaching philosophy focuses on
                helping students understand concepts and apply them to real-life situations.</p>
            </div>

            <div className="image-block reveal" data-delay="200">
              <img
                src={Who}
                alt="Students learning at Sigma Science Academy"
                className="responsive-img"
              />
            </div>
          </div>
        </section>

        <hr style={{ color: "#1A1A1A", border: "0.1px solid black" }} />

        {/* Mission Section */}
        <section className="mission-section section">
          {/* bubbles */}
          <span className="bubble bubble-lg reveal" data-delay="0"></span>
          <span className="bubble bubble-md reveal" data-delay="120"></span>
          <span className="bubble bubble-sm reveal" data-delay="240"></span>

          <div className="section-inner two-column">
            <div className="text-block reveal" data-delay="0">
              <div className="title-mission">Our Mission</div>

              <p>
                <span className="first-letter">T</span>
                <span className="remain">
                  o empower young minds with conceptual clarity, strategic
                  thinking and the self-confidence to crack India’s toughest
                  entrance exams and beyond.
                </span>
              </p>

              <p>
                <span className="remain">
                  We focus on building a strong foundation, disciplined study
                  routines and a growth mindset so that every student is prepared
                  not just for exams, but for life.
                </span>
              </p>
            </div>

            <div className="image-block reveal" data-delay="200">
              <img
                src={mission}
                alt="Students learning at Sigma Science Academy"
                className="responsive-img"
              />
            </div>
          </div>
        </section>

        <hr style={{ color: "#1A1A1A", border: "0.1px solid black" }} />

        {/* Why Choose Us – Smooth Auto Carousel */}
        <section className="why-us section">
          <div className="section-inner">
            <h2 className="section-title center reveal" data-delay="0">
              Why Choose Us?
            </h2>

            <div className="why-carousel reveal" data-delay="120">
              <div className="why-carousel-nav">{/* optional arrows */}</div>

              <div
                className="why-carousel-track"
                ref={whyCarouselRef}
                onMouseEnter={() => (isHoveredRef.current = true)}
                onMouseLeave={() => (isHoveredRef.current = false)}
              >
                <div className="card reveal" data-delay="0">
                  <h3>🎯 Small Batch Sizes</h3>
                  <p>
                    Only <strong>25 students</strong> per batch. More focus,
                    deeper learning and truly personalized attention.
                  </p>
                </div>

                <div className="card reveal" data-delay="120">
                  <h3>🧑‍🏫 Experienced Faculty</h3>
                  <p>
                    Led by subject experts and competitive exam specialists who
                    understand patterns, trends and mindset needed to crack exams.
                  </p>
                </div>

                <div className="card reveal" data-delay="240">
                  <h3>🧪 Concept + Application</h3>
                  <p>
                    We teach the <strong>“Why” before the “What”</strong>, so
                    students become analytical and independent thinkers, not just
                    rote learners.
                  </p>
                </div>

                <div className="card reveal" data-delay="360">
                  <h3>📝 Daily Practice Papers (DPPs)</h3>
                  <p>
                    Regular tests, chapter-wise quizzes and full-length mock exams
                    with detailed feedback to track progress.
                  </p>
                </div>

                <div className="card reveal" data-delay="480">
                  <h3>💡 Doubt Clearing is Sacred</h3>
                  <p>
                    Dedicated doubt-solving sessions after every topic, because
                    true confidence comes from clarity.
                  </p>
                </div>

                <div className="card reveal" data-delay="600">
                  <h3>🏆 12+ Years of Results</h3>
                  <p>
                    Consistent top <strong>AIRs &amp; State Ranks</strong> in JEE,
                    NEET, and CET. Over <strong>90% of students</strong> report
                    improved scores and reduced stress with proud alumni in{" "}
                    <strong>IIT, AIIMS, NIT</strong> and top state colleges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ color: "#1A1A1A", border: "0.1px solid black" }} />

        {/* Presence Section */}
        <section className="presence section">
          <div className="section-inner">
            <h2 className="section-title center reveal" data-delay="0">
              Our Presence in Nashik
            </h2>
            <br /><br /><br />

            <div className="grid three-column-grid">
              <div className="card location-card reveal" data-delay="0">
                📍301-305, Roongta Business World,<br />  Govind Nagar, <br /> Nashik, 422008

              </div>

              <div className="card location-card reveal" data-delay="150">
                📍2nd Floor, Siddhi Pooja Trade Centre Apartment,  <br /> College Road Nashik - 422005.

              </div>

              <div className="card location-card reveal" data-delay="300">
                📍ASD-25, Mithal Bhavan,  Ashwin Nagar, <br /> Nashik,  422009

              </div>
            </div>

          </div>

          <br />
          <br />

          <Link to="/contact">
            <button className="contact-btn reveal" data-delay="450">
              Contact us
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default About;