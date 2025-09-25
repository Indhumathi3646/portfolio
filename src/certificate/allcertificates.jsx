import React from "react";
import "./Certificate.css";
import javaImg from "../assets/java.jpeg";
import pythonImg from "../assets/python.jpeg";
import htmlImg from "../assets/html.jpeg";
import cplusImg from "../assets/c++.jpeg";
import { useNavigate } from "react-router";
export default function Allcertificates() {
  let navigate = useNavigate()
  const certificates = [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      description:
        "Advanced certification demonstrating expertise in designing distributed systems on AWS.",
      tags: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
      date: "March 2023",
      id: "AWS-SAP-2023-001",
      link: "#",
  image: javaImg,     },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      description:
        "Professional-level certification for developing scalable applications on Google Cloud Platform.",
      tags: ["GCP", "Kubernetes", "Cloud Functions", "BigQuery"],
      date: "January 2023",
      id: "GCP-PD-2023-001",
      link: "#",
      image: pythonImg,
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      description:
        "Comprehensive program covering advanced React, UI/UX, and modern frontend development.",
      tags: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      date: "November 2022",
      id: "META-FE-2022-001",
      link: "#",
      image: htmlImg,
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      description:
        "Comprehensive program covering advanced React, UI/UX, and modern frontend development.",
      tags: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      date: "November 2022",
      id: "META-FE-2022-001",
      link: "#",
      image: cplusImg,
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      description:
        "Comprehensive program covering advanced React, UI/UX, and modern frontend development.",
      tags: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      date: "November 2022",
      id: "META-FE-2022-001",
      link: "#",
      image: htmlImg,
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      description:
        "Comprehensive program covering advanced React, UI/UX, and modern frontend development.",
      tags: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
      date: "November 2022",
      id: "META-FE-2022-001",
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
       <button onClick={() => navigate("/")} className="back">Back
</button>
    </section>
  );
}
