// HomePage.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Home.css";
import carousel1 from "../Images/graviity1.webp"
import expert from "../Images/expert.webp"
import practical from "../Images/practical.webp"
import growth from "../Images/growth.webp"

const heroSlides = [
  {
    id: 1,
    title: "Where Learning Meets Innovation",
    text: "Discover structured knowledge crafted for real-world excellence.",
    image: "/images/hero1.jpg",
  },
  {
    id: 2,
    title: "Unlock Your True Potential",
    text: "Guided content designed to elevate your professional journey.",
    image: "/images/hero2.jpg",
  },
  {
    id: 3,
    title: "Build Skills for Tomorrow",
    text: "Stay ahead with insights, tools, and curated educational paths.",
    image: "/images/hero3.jpg",
  },
];

const cards = [
  {
    id: 1,
    image: expert,
    title: "Expert-Led Learning",
    text: "High-quality modules and insights created with precision and expertise.",
  },
  {
    id: 2,
    image : practical,
    title: "Practical Application",
    text: "Hands-on learning that transforms theory into real-world skill.",
    style:{
    marginLeft:"90px"
    }
  },
  {
    id: 3,
    image : growth,
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

export default function HomePage() {
  return (
    <div className="hp">
      {/* HERO CAROUSEL */}
      <section className="hp-hero">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          
       
          speed={1000}
          className="hp-hero-swiper"
        > 
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hp-hero-slide">
                <img src={carousel1} alt={slide.title}  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
<br />
 
      {/* FEATURE CARDS */}
      <section className="hp-section">
         <br />
        <h1 className="hp-title">Why Choose Us</h1>
        <div className="hp-cards">
          {cards.map((c) => (
            <div key={c.id} className="hp-card">
           
              <img src={c.image} alt=""  />
                 <h2>{c.title}</h2>
              <p>{c.text}</p>
              <span className="hp-card-link">Learn More →</span>
            </div>
          ))}
        </div>
      </section>
  <br /><br />
      {/* ABOUT + EDUCATION */}
   
  
  
        <div className="hp-about-left">
          <h1>About us</h1>
          <p>
            We believe education should be accessible, practical, and crafted
            with precision. Our platform blends research-backed methods with
            industry-aligned insights to empower growth. <br />
             <p>
            From fundamental concepts to advanced applications, we provide a
            clear and guided path for all learners.
          </p>
          </p>
         
        </div><br /><br />
    
       

      
   

      {/* TESTIMONIALS */}
      <section className="hp-section">
        <h2 className="hp-title">What Our Learners Say</h2>
        <div className="hp-testimonials">
          {testimonials.map((t) => (
            <div key={t.id} className="hp-testimonial">
              <p className="quote">“{t.quote}”</p>
              <div className="author">
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
           ))}
        </div>
      </section>
    <a href="https://www.google.com/search?q=sigma+science+academy&oq=sigma+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTITCAEQLhiDARjHARixAxjRAxiABDIHCAIQABiABDIHCAMQABiABDIKCAQQABixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDE3MDdqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&lqi=ChVzaWdtYSBzY2llbmNlIGFjYWRlbXlIkbnS0cGxgIAIWiMQABABEAIYABgBGAIiFXNpZ21hIHNjaWVuY2UgYWNhZGVteZIBEGVkdWNhdGlvbl9jZW50ZXI#lkt=LocalPoiReviews&rlimm=5561772303083420163">
     <button style={{backgroundColor : "white", color : "black", border : "1px solid blue"}}>Click here to know more...</button></a><br /><br /> 
    </div>
  );
}
