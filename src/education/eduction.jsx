import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router";





export default function Education() {
 let navigate = useNavigate();
  return (

    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-boxes">

        <div className="education-card">
          <h3 className="education-degree" ><FaGraduationCap className="edu-icon" />  Master of Science in Computer Science</h3>
          <h4 className="education-university">PKR Arts college For Women</h4>
          <p className="education-details">
            <FaCalendar /> 2025 - 2027 |<IoLocationSharp />Gobichettipalayam <br />
           <GoDotFill /> Specialized in Machine Learning and AI <br />
           <GoDotFill /> Research in Neural Networks <br />
          <GoDotFill />  Dean's List for 4 consecutive semesters
          </p>
        </div>

        <div className="education-card">
          <h3 className="education-degree"><FaGraduationCap className="edu-icon" /> Bachelor of Science in Information Technology</h3>
          <h4 className="education-university">PKR Arts college For Women</h4>
          <p className="education-details">
             <FaCalendar /> 2022 - 2025 |<IoLocationSharp />Gobichettipalayam <br />
           <GoDotFill /> Magna Cum Laude <br />
           <GoDotFill /> President of Programming Club <br />
           <GoDotFill /> Published research paper in IEEE Journal
          </p>
        </div>

        <div className="education-card">
          <h3 className="education-degree"><FaGraduationCap className="edu-icon" /> Java full Stack Development Course </h3>
          <h4 className="education-university">IDM TechPark Erode</h4>
          <p className="education-details">
            <FaCalendar /> 2021 - 2022 |<IoLocationSharp /> Erode <br />
           <GoDotFill /> Valedictorian <br />
           <GoDotFill /> Won National Coding Olympiad <br />
           <GoDotFill /> Member of Science Club
          </p>
        </div>
    <button onClick={() => navigate("/")} className="back">Back
</button>
      </div>
    </section>
  );
}
