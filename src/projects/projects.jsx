import React from "react";
import "./Projects.css";
import ecommerceImg from "../assets/ecommerce.png";
import fantaImg from "../assets/fanta.png";
import gsapImg from "../assets/gsap.png";
import hardwareImg from "../assets/hardware.png";
import expenseImg from "../assets/expense.png";
import todoImg from "../assets/todo.png";
import { Routes, useNavigate } from "react-router-dom";


export default function Projects() {
  let navigate = useNavigate();
  return (
   
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
<img src={ecommerceImg} alt="E-Commerce Project" className="project-image" />
          <div className="project-content">
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-description">
              This is a responsive e-commerce website built using HTML, CSS, and JavaScript with smooth animations.
It features Swiper.js sliders, custom fonts, and icons for a modern shopping experience.
The project showcases product displays, interactive UI, and engaging user-friendly design.
            </p>
            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>JavaScript</span>
              <span>Swiperjs</span>
            </div>
            <div className="project-buttons">
              <a href="https://your-demo-link.com" target="_blank" rel="noreferrer" className="btn demo-btn">Live Demo</a>
              <a href="https://github.com/your-repo-link" target="_blank" rel="noreferrer" className="btn code-btn">Code</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={fantaImg} alt="Weather Dashboard" className="project-image" />
          <div className="project-content">
            <h3 className="project-title">Advertisement Website with GSAP Animations</h3>
            <p className="project-description">
              A Fanta advertisement website built with HTML, CSS, and JavaScript, featuring GSAP animations.
It delivers vibrant visuals and engaging motion effects for a modern promotional layout.
            </p>
            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
              <span>Gsap</span>
            </div>
            <div className="project-buttons">
              <a href="https://weather-demo.com" target="_blank" rel="noreferrer" className="btn demo-btn">Live Demo</a>
              <a href="https://github.com/your-weather-repo" target="_blank" rel="noreferrer" className="btn code-btn">Code</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={gsapImg} alt="Social Media Analytics" className="project-image" />
          <div className="project-content">
            <h3 className="project-title">Flight Travel Web Page with Animations</h3>
            <p className="project-description">
           A multi-page flight travel website built using HTML, CSS, and JavaScript.
It features responsive design, smooth animations (GSAP), and modern UI elements to create an engaging booking experience.
            </p>
            <div className="tech-stack">
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
              <span>Gsap</span>
            </div>
            <div className="project-buttons">
              <a href="https://social-demo.com" target="_blank" rel="noreferrer" className="btn demo-btn">Live Demo</a>
              <a href="https://github.com/your-social-repo" target="_blank" rel="noreferrer" className="btn code-btn">Code</a>
            </div>
          </div>
        </div>
      </div> 
   <button onClick={() => navigate("/allprojects")} className="all">View All Projects</button>
<button onClick={() => navigate("/")} className="backbtn">Back
</button>

    </section>
    
  );
}
