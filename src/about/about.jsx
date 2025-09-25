import React from "react";
import "./About.css";
import { useNavigate } from "react-router";

export default function About() {
  let page = useNavigate();
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate Java Full Stack Developer with a strong drive for
            building reliable and scalable applications. My journey began with a
            foundation in computer science and has grown through hands-on
            projects, continuous learning, and a deep love for problem-solving.
          </p>
          <p>
            I specialize in Java, Spring Boot, React.js, and modern web
            technologies, and I enjoy working on projects that require both
            creativity and logical thinking. From crafting intuitive frontend
            designs to architecting efficient backend systems, I take pride in
            writing clean, maintainable code that makes a real impact.
          </p>
          <p>
            When I'm not coding, I’m usually exploring new tools, improving my
            skills, or collaborating with fellow developers to bring ideas to
            life. I believe in lifelong learning and enjoy sharing knowledge to
            help others in the tech community grow.
          </p>
        </div>

        {/* Right Section with Image + Stats */}
        <div className="about-right">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/028/991/999/original/anna-havrylyukh-.gif?1596125112"
            alt="profile gif"
            className="gif"
          />

          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">0</span>
              <p>Fresher</p>
            </div>
            <div className="stat-box">
              <span className="stat-number">20+</span>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <span className="stat-number">10+</span>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <span className="stat-number">10+</span>
              <p>Technologies</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="tech-section">
        <h3 className="tech-title">Technologies I Work With</h3>

        <div className="tech-tags">
          <span className="tag">Java</span>
          <span className="tag">JavaScript</span>
          <span className="tag">React</span>
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">SQL</span>
        </div>
      </div>
              <button onClick={() => page("/")} className="back">Back</button>

    </section>
  );
}
