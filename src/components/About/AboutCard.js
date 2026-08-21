import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaLightbulb } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shimpi Hitesh Rajesh</span> from <span className="purple">Chennai, India</span>.
            <br />
            I’m currently pursuing B.Tech in <span className="purple">Computer Science and Engineering</span> at <span className="purple">SRM Institute of Science and Technology</span> (2023 - 2027) with a CGPA of <span className="purple">8.66 / 10</span>.
            <br />
            <br />
            I have strong foundations in Data Structures, Algorithms, DBMS, and Operating Systems, with experience in backend and full-stack application development using Python, Flask, Node.js, C#, C++, and SQL databases.
          </p>

          <br />
          <h4 style={{ color: "var(--accent)", fontSize: "1.3em", textAlign: "left" }}>
            <FaGraduationCap /> Education
          </h4>
          <ul style={{ textAlign: "left" }}>
            <li className="about-activity">
              <strong>SRM Institute of Science and Technology</strong> (2023 - 2027)
              <br />
              <span className="purple">B.Tech - Computer Science and Engineering</span> · Kattankulathur | CGPA: <strong>8.66 / 10</strong>
            </li>
            <li className="about-activity" style={{ marginTop: "10px" }}>
              <strong>K.K.J.R Uchha Madhyamik Vidyalaya</strong> (2023)
              <br />
              Class XII · Science · Chalisgaon, Maharashtra | Percentage: <strong>70.1%</strong>
            </li>
          </ul>

          <br />
          <h4 style={{ color: "var(--accent)", fontSize: "1.3em", textAlign: "left" }}>
            <FaBriefcase /> Experience
          </h4>
          <ul style={{ textAlign: "left" }}>
            <li className="about-activity">
              <strong>Team Envision</strong> | <span className="purple">Game Developer · Team Head</span> (May 2025 - Present)
              <br />
              Implemented core gameplay mechanics using Unity and C#, ensuring smooth performance and optimised rendering across devices.
            </li>
            <li className="about-activity" style={{ marginTop: "10px" }}>
              <strong>Swift Coding Club SRM</strong> | <span className="purple">Corporate Head</span> (Aug 2023 - Aug 2025)
              <br />
              Contributed with peers to design and manage “An Apple a Day,” an educational tech series introducing Apple ecosystem concepts.
            </li>
          </ul>

          <br />
          <h4 style={{ color: "var(--accent)", fontSize: "1.3em", textAlign: "left" }}>
            <FaLightbulb /> Patents
          </h4>
          <ul style={{ textAlign: "left" }}>
            <li className="about-activity">
              <strong>Smart Blind Spot Detection And Distance Measurement System For Vehicles Using Multi-Sensor Integration And AI-Based Warning Mechanisms</strong>
              <br />
              Status: <span className="purple">PENDING (Jan 2026)</span> · Chennai, India
            </li>
          </ul>

          <br />
          <h4 style={{ color: "var(--accent)", fontSize: "1.3em", textAlign: "left" }}>
            <FaCertificate /> Certifications & Skill Tests
          </h4>
          <ul style={{ textAlign: "left" }}>
            <li className="about-activity">
              <strong>NPTEL:</strong> Programming in JAVA (Oct 2024 · NPTEL24CS105S252505223)
            </li>
            <li className="about-activity">
              <strong>CodeChef Skill Test:</strong> Data Structures and Algorithms (<span className="purple">93%</span>)
            </li>
            <li className="about-activity">
              <strong>CodeChef Skill Test:</strong> Operating Systems (<span className="purple">96%</span>)
            </li>
          </ul>

          <br />
          <h4 style={{ color: "var(--accent)", fontSize: "1.3em", textAlign: "left" }}>
            <FaAward /> Hackathons & Volunteering
          </h4>
          <ul style={{ textAlign: "left" }}>
            <li className="about-activity">
              <strong>Hackathons:</strong> Adobe India Hackathon, Guidewire DEVTrails'26, Accenture Databricks, Infosys Hackwithinfy' 26, Capital One Launchpad, X-PLAY GAME JAM
            </li>
            <li className="about-activity" style={{ marginTop: "8px" }}>
              <strong>Microsoft Volunteering:</strong> Event Organizer for Technical Workshop "Hack With India" (Microsoft Chennai)
            </li>
          </ul>

          <br />
          <p style={{ textAlign: "justify" }}>
            Outside of technical work and coding, I love engaging in activities that keep me creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hitesh Shimpi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
