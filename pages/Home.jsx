// HomePage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Home.css";

import mobile from "../Images/mobile1.jpeg";
import carousel1 from "../Images/carousel1.webp";
import carousel2 from "../Images/carousel2.jpeg";
import expert from "../Images/expert.webp";
import practical from "../Images/practical.webp";
import growth from "../Images/growth.webp";

// ✅ Media query hook
function useMediaQuery(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatches(mediaQuery.matches);

    handler();

    if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", handler);
    else mediaQuery.addListener(handler);

    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", handler);
      else mediaQuery.removeListener(handler);
    };
  }, [query]);

  return matches;
}

const cards = [
  {
    id: 1,
    image: expert,
    title: "Expert-Led Learning",
    text: "High-quality modules and insights created with precision and expertise.",
  },
  {
    id: 2,
    image: practical,
    title: "Practical Application",
    text: "Hands-on learning that transforms theory into real-world skill.",
  },
  {
    id: 3,
    image: growth,
    title: "Continuous Growth",
    text: "Always-updated educational content to match evolving industries.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Kavita Kumbhar",
    quote:
      "I have been studying in Sigma Science Academy for almost 2 years and it has been a wonderful journey. Sigma Science Academy is more of a family than a Academy.The amount of support and knowledge from all the staff is truly admirable. The teaching methods are systematic and exam oriented that help to keep track of one's development. The professors are devoted towards teaching and very supportive. I am glad I am part of this family.",
  },
  {
    id: 2,
    name: "Rudraksh Sahane",
    quote:
      "My experience at Sigma Science Academy was truly amazing! It felt more like a family than just a coaching class. The bond I shared with the teachers was one of the most valuable parts of my journey. The teachers are outstanding, not just in their subject knowledge, but also in how they connect with students. What makes SSA unique is that they don’t just teach PCMB they also teach about life, sharing real-world wisdom and values from the Bhagavad Gita and and many other life lessons, they help shape you into a better person, not just a better student. I highly recommend Sigma Science Academy to anyone looking for quality education, strong mentorship, and personal growth.",
  },
  {
    id: 3,
    name: "Aryan Singh",
    quote:
      "I had a great experience at Sigma Science Academy while preparing for MHT-CET. The faculty is highly knowledgeable, supportive, and always ready to clear doubts, no matter how small. Their teaching methods are focused, systematic, and exam oriented, which really helped me stay on track throughout my preparation. The study material provided is comprehensive and regularly updated. Weekly tests and mock exams helped me assess my progress and improve my weak areas. The learning environment at the academy is very positive and motivating. Thanks to Sigma Science Academy, I was able to complete my preparation with confidence and clarity. I would highly recommend this institute to anyone who is serious about cracking JEE, NEET, or MHT-CET.",
  },
];

// ✅ Lazy section helper
function LazySection({ children, rootMargin = "200px 0px", placeholderHeight = 200 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{visible ? children : <div style={{ minHeight: placeholderHeight }} />}</div>;
}

export default function HomePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const heroSlides = isMobile
    ? [{ id: "m1", image: mobile, title: "Mobile Banner" }]
    : [
        { id: "d1", image: carousel2, title: "Banner 1" },
        { id: "d2", image: carousel1, title: "Banner 2" },
      ];

  return (
    <div className="hp">
      {/* ✅ HERO CAROUSEL (fits image properly) */}
      <section className="hp-hero">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          autoHeight={true} // ✅ IMPORTANT: adjusts height as per image
          loop={heroSlides.length > 1}
          autoplay={
            heroSlides.length > 1
              ? { delay: 3000, disableOnInteraction: false }
              : false
          }
          navigation={heroSlides.length > 1}
          pagination={heroSlides.length > 1}
          speed={1000}
          className="hp-hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hp-hero-slide">
                <img
                  className="hp-hero-img"
                  src={slide.image}
                  alt={slide.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <br />

      {/* FEATURE CARDS */}
      <LazySection placeholderHeight={350}>
        <section className="hp-section">
          <br />
          <h1 className="hp-title">Why Choose Us</h1>
          <div className="hp-cards">
            {cards.map((c) => (
              <div key={c.id} className="hp-card">
                <img src={c.image} alt={c.title} loading="lazy" decoding="async" />
                <h2>{c.title}</h2>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      <br />
      <br />

      {/* ABOUT */}
      <LazySection placeholderHeight={250}>
        <div className="hp-about-left">
          <h1>About us</h1>
          <p>
            We believe education should be accessible, practical, and crafted with precision.
            Our platform blends research-backed methods with industry-aligned insights to empower growth.
          </p>
          <p>
            From fundamental concepts to advanced applications, we provide a clear and guided path for all learners.
          </p>
        </div>
      </LazySection>

      <br />
      <br />

      {/* TESTIMONIALS */}
      <LazySection placeholderHeight={450}>
        <section className="hp-section">
          <h2 className="hp-title">What Our Learners Say</h2>
          <div className="hp-testimonials">
            {testimonials.map((t) => (
              <div key={t.id} className="hp-testimonial">
                <p className="quote">“{t.quote}”</p>
                <div className="author">
                  <div>
                    <h4>{t.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      {/* CTA */}
      <LazySection placeholderHeight={120}>
        <a
          href="https://www.google.com/search?q=sigma+science+academy&oq=sigma+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTITCAEQLhiDARjHARixAxjRAxiABDIHCAIQABiABDIHCAMQABiABDIKCAQQABixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDE3MDdqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChVzaWdtYSBzY2llbmNlIGFjYWRlbXlIkbnS0cGxgIAIWiMQABABEAIYABgBGAIiFXNpZ21hIHNjaWVuY2UgYWNhZGVteZIBEGVkdWNhdGlvbl9jZW50ZXI#lkt=LocalPoiReviews&rlimm=5561772303083420163"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "1px solid blue",
              padding: "15px"
            }}
          >
            Click here to know more...
          </button>
        </a>
        <br />
        <br />
      </LazySection>
    </div>
  );
}
