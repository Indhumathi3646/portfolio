// src/components/Skills.jsx
import React from "react";
import "./Skills.css";
import { IoCodeSlash } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { Line } from "rc-progress";
import { useNavigate } from "react-router";
// import "./Score.css";

export default function Skills() {
  let navigate = useNavigate()
  const skills = [
    { name: "Java", level: 95 },
    { name: "HTML", level: 98 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 79 },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Skills & Expertise</h2>

      {/* Skills Grid */}
      <div className="skills-grid">
        {/* Card 1 */}
        <div className="skill-card">
          <h3><IoCodeSlash /></h3>
          <h3>Frontend Development</h3>
          <div className="tags">
            <span className="tag">Html</span>
            <span className="tag">Css</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React.js</span>
            <span className="tag">Tailwind CSS</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="skill-card">
          <h3><FaDatabase /></h3>
          <h3>Backend Development</h3>
          <div className="tags">
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">MongoDB</span>
            <span className="tag">Sql</span>
            <span className="tag">REST APIs</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="skill-card">
          <h3><SiFramework /></h3>
          <h3>Libraries/Frameworks</h3>
          <div className="tags">
            <span className="tag">Bootstrap</span>
            <span className="tag">Cloudinary</span>
            <span className="tag">Gsap</span>
            <span className="tag">Tailwind Css</span>
            <span className="tag">Github</span>
          </div>
        </div>
      </div>

      {/* Skill Score Bars */}
      <div className="skill-scores">
        <h2 className="skills-title">Technical Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <Line
              percent={skill.level}
              strokeWidth={1.3}  
              strokeColor="#4db8e6ff"
              trailColor="#1e293b"
            />
          </div>
        ))}
      </div>
       <button onClick={() => navigate("/")} className="backskill">Back
</button>
    </section>
  );
}
