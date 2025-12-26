import React, { useState } from "react";
import "../components/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Map your form fields to EmailJS template variables
      const templateParams = {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,

        // optional (only useful if you later add {{subject}} in the template)
        subject: form.subject,
      };

      await emailjs.send(
        "service_qe172dq",
        "template_0s39o84",
        templateParams,
        { publicKey: "U7I-0ghjbPs6eZrsD" } // <-- paste your EmailJS Public Key here
      );

      alert("Thank you! We’ll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Sorry! Message failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact__hero">
        <div className="contact__hero-inner">
          <p className="contact__eyebrow">Get in touch</p>
          <h1 className="contact__title">Contact Us</h1>
          <br /> <hr />
        </div>
      </section>

      {/* Main content */}
      <main className="contact__main">
        {/* Form card */}
        <section className="contact__card contact__card--form">
          <h2 className="contact__card-title">Send us a message</h2>
          <br />
          <br />

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__grid-2">
              <div className="contact__field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__footer">
              <button type="submit" className="contact__button" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
              <p className="contact__note">
                By submitting, you agree that we may contact you regarding your
                enquiry.
              </p>
            </div>
          </form>
        </section>

        {/* Sidebar card */}
        <aside className="contact__card contact__card--info">
          <div className="contact__info-group">
            <p className="contact__label">Email</p>
            <a href="mailto:hello@sigmascience.academy" className="contact__value">
              hello@sigmascience.academy
            </a>
          </div>

          <div className="contact__info-group">
            <p className="contact__label">Office</p>
            <p className="contact__value">
              Sigma Science Academy
              <br />
              221B Knowledge Avenue
              <br />
              Bengaluru, India
            </p>
          </div>

          <div className="contact__info-group">
            <p className="contact__label">Office hours</p>
            <p className="contact__value">Monday – Friday, 10:00 – 18:00 IST</p>
          </div>

          <div className="contact__social">
            <p className="contact__label">Social</p>
            <div className="contact__social-row">
              <a href="#" className="contact__social-pill">in</a>
              <a href="#" className="contact__social-pill">X</a>
              <a href="#" className="contact__social-pill">IG</a>
            </div>
          </div>

          <div className="contact__map">
            <p className="contact__label">Location</p>
            <div className="contact__map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.617050731751!2d73.77620859999999!3d19.982600899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb2be6431525%3A0x4d2f62712ee4ba03!2sSigma%20Science%20Academy!5e0!3m2!1sen!2sin!4v1765261120374!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sigma Science Academy Location"
              ></iframe>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Contact;
