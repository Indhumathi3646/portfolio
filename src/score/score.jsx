import React from "react";
import { Line } from "rc-progress";
import "./Score.css";

export default function Skillscore() {
  const skills = [
    { name: "Java", level: 95 },
    { name: "HTML", level: 98 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 79 },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </div>
          <Line
            percent={skill.level}
            strokeWidth={2} /* thin bar */
            strokeColor="#38bdf8"
            trailColor="#1e293b"
          />
        </div>
      ))}
    </section>
  );
}
