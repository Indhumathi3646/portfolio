import React from "react";
import "./Certificate.css";
import javaImg from "../assets/java.jpeg";
import pythonImg from "../assets/python.jpeg";
import htmlImg from "../assets/html.jpeg";
import cplusImg from "../assets/c++.jpeg";
import { useNavigate } from "react-router";
export default function Certifications() {
  let navigate = useNavigate()
  const certificates = [
    {
      title: "Digilabs Certificate",
      issuer: "Digilabs",
      description:
        "Java Basics provided by digilabs in 1 Month.",
      tags: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
      duration: "1 month",
      link: "#",
  image: javaImg,     },
    {
      title: "Digilabs Certificate",
      issuer: "Digilabs",
      description:
        "python Basics provided by digilabs in 1 Month.",
      tags: ["GCP", "Kubernetes", "Cloud Functions", "BigQuery"],
      duration: "1 month",
      link: "#",
      image: pythonImg,
    },
    {
      title: "Digilabs Certificate",
      issuer: "Digilabs",
      description:
        "html Basics provided by digilabs in 1 Month.",
      tags: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
            duration: "1 month",

    link: "#",
      image: htmlImg,
    },
    
  ];

  return (
    <section className="certifications-section" id="certificates">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            {/* Certificate Logo */}
            <img src={cert.image} alt={cert.title} className="cert-image" />

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-desc">{cert.description}</p>

            <div className="cert-tags">
              {cert.tags.map((tag, i) => (
                <span key={i} className="cert-tag">
                  {tag}
                </span>
              ))}
            </div>

            <p className="cert-date">📅 {cert.date}</p>
            <p className="cert-id">ID: {cert.id}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="verify-btn"
            >
              🔗 Verify Certificate
            </a>
          </div>
        ))}
      </div>
       {/* <button onClick={() => navigate("/")} className="back">Back
</button> */}
  <button onClick={() => navigate("/Allcertificates")} className="allitem">View All Certificates</button><br/>
<button onClick={() => navigate("/")} className="backbtn1">Back
</button>
    </section>
  );
} 