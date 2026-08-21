import React from "react";
import Card from "react-bootstrap/Card";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap, FaBriefcase, FaAward, FaCertificate } from "react-icons/fa";

function AboutCard() {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#facc15" scale={1.01} tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <Card className="quote-card-view" style={{ background: "rgba(17, 20, 32, 0.6)", padding: "10px", borderRadius: "20px", border: "1px solid rgba(250, 204, 21, 0.25)", backdropFilter: "blur(10px)" }}>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify", fontSize: "1.05em", lineHeight: "1.7", color: "#cbd5e1" }}>
              Greetings. I am <span style={{ color: "#facc15", fontWeight: "700" }}>Hitesh Shimpi</span>, operating from <span style={{ color: "#facc15" }}>Chennai, Tamil Nadu</span>.
              <br />
              I am a Computer Science undergraduate at <span style={{ color: "#facc15" }}>SRM Institute of Science and Technology</span> (Expected May 2027) with an academic record of <span style={{ color: "#facc15", fontWeight: "700" }}>8.72 / 10 CGPA</span>.
              <br />
              <br />
              Operating in the realm of <strong style={{ color: "#f8fafc" }}>Backend Engineering, Machine Learning, and Deep Learning</strong>, I design high-throughput REST APIs, cloud infrastructure on AWS, PySpark ETL pipelines, and neural vision systems.
            </p>

            <br />
            <h4 style={{ color: "#facc15", fontSize: "1.25em", textAlign: "left", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "700" }}>
              <FaGraduationCap /> Dossier // Education & Academics
            </h4>
            <ul style={{ textAlign: "left", color: "#cbd5e1" }}>
              <li className="about-activity">
                <strong style={{ color: "#f8fafc" }}>SRM Institute of Science and Technology</strong> (Expected May 2027)
                <br />
                <span style={{ color: "#facc15" }}>B.Tech - Computer Science and Engineering</span> · Chennai, Tamil Nadu | CGPA: <strong style={{ color: "#facc15" }}>8.72 / 10</strong>
              </li>
              <li className="about-activity" style={{ marginTop: "10px" }}>
                <strong style={{ color: "#f8fafc" }}>KKJR Vidyalaya</strong> (Jun 2022 – Apr 2023)
                <br />
                Intermediate (Class XII) · Jalgaon, Maharashtra
              </li>
              <li className="about-activity" style={{ marginTop: "10px" }}>
                <strong style={{ color: "#f8fafc" }}>St. Joseph Convent School</strong> (Jun 2020 – Apr 2021)
                <br />
                Matriculation (Class X) · Jalgaon, Maharashtra
              </li>
            </ul>

            <br />
            <h4 style={{ color: "#facc15", fontSize: "1.25em", textAlign: "left", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "700" }}>
              <FaBriefcase /> Dossier // Field Experience
            </h4>
            <ul style={{ textAlign: "left", color: "#cbd5e1" }}>
              <li className="about-activity">
                <strong style={{ color: "#f8fafc" }}>Technical Intern (AICTE)</strong> | <span style={{ color: "#facc15", fontWeight: "600" }}>AI/ML Developer</span> (Apr 2024 – Jun 2024) · Chennai, Tamil Nadu
                <br />
                • Engineered a 6-class deep learning rice leaf disease detection system utilizing <strong style={{ color: "#f8fafc" }}>EfficientNetB0</strong> with 224×224 image preprocessing, normalization, and data augmentation.
                <br />
                • Amplified feature representation by integrating <strong style={{ color: "#f8fafc" }}>CBAM attention mechanisms</strong> and <strong style={{ color: "#f8fafc" }}>GeM pooling</strong>, trained with Adam optimizer and categorical cross-entropy.
              </li>
            </ul>

          <br />
          <h4 style={{ color: "#facc15", fontSize: "1.25em", textAlign: "left", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "700" }}>
            <FaCertificate /> Dossier // Credentials & Intellectual Property
          </h4>
          <ul style={{ textAlign: "left", color: "#cbd5e1" }}>
            <li className="about-activity">
              ⚡ <strong style={{ color: "#f8fafc" }}>AWS Certified Cloud Practitioner</strong>
            </li>
            <li className="about-activity">
              ⚡ <strong style={{ color: "#f8fafc" }}>AWS Certified AI Practitioner</strong>
            </li>
            <li className="about-activity">
              ⚡ <strong style={{ color: "#f8fafc" }}>Databricks Badges:</strong> Apache Spark, Lakeflow, Data Pipelines, ETL
            </li>
            <li className="about-activity" style={{ marginTop: "6px" }}>
              🛡️ <strong style={{ color: "#f8fafc" }}>Patent:</strong> Smart Blind Spot Detection for Vehicles Using Multi-Sensor Integration and AI-Based Warning Mechanisms
            </li>
          </ul>

          <br />
          <h4 style={{ color: "#facc15", fontSize: "1.25em", textAlign: "left", letterSpacing: "1px", textTransform: "uppercase", fontWeight: "700" }}>
            <FaAward /> Dossier // Hackathons & Missions
          </h4>
          <ul style={{ textAlign: "left", color: "#cbd5e1" }}>
            <li className="about-activity">
              🏆 <strong style={{ color: "#f8fafc" }}>Guidewire DEVTRAILS ’26</strong> (2026)
            </li>
            <li className="about-activity">
              🏆 <strong style={{ color: "#f8fafc" }}>Accenture Databricks</strong> (2026)
            </li>
            <li className="about-activity">
              🏆 <strong style={{ color: "#f8fafc" }}>Infosys HackWithInfy ’26</strong> (2026)
            </li>
          </ul>

          <br />
          <p style={{ textAlign: "justify", color: "#cbd5e1" }}>
            Off-duty interests and nocturnal pursuits:
          </p>

          <ul style={{ color: "#cbd5e1" }}>
            <li className="about-activity">
              <ImPointRight style={{ color: "#facc15" }} /> Exploring AI Architectures & Cloud Systems ⚡
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#facc15" }} /> System Optimization & Algorithmic Problem Solving 🦇
            </li>
          </ul>

          <p style={{ color: "#facc15", fontWeight: "600", marginTop: "15px" }}>
            "The night is darkest just before the build succeeds."{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "#94a3b8" }}>Hitesh Shimpi</footer>
        </blockquote >
      </Card.Body>
    </Card>
    </Tilt>
  );
}

export default AboutCard;
