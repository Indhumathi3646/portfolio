import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_f85kb7d";
    const templateId = "template_mw6y0u8";
    const publicKey = "zSqCPx64hSRA5r9v1";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: "Indhumathi",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("✅ Email sent successfully!", response.status, response.text);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-container">
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Project discussion, job opportunity, etc."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="send-btn">
              ✈ Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            <FaEnvelope /> rindhumathipkr@gmail.com
          </p>
          <p>
            <FaPhone /> 9791641743
          </p>
          <p>
            <FaMapMarkerAlt /> Kunnathur, Tirupur
          </p>
          <p>
            <FaClock /> Within 24 hours
          </p>

          <div className="social-links">
            <h4>Connect With Me</h4>
            <p>
              <FaGithub /> @Indhumathi
            </p>
          </div>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="backbtn">
        Back
      </button>
    </section>
  );
}
