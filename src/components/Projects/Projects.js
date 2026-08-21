import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ color: "#f8fafc" }}>
          MISSION LOGS // <strong style={{ color: "#facc15" }}>GITHUB REPOSITORIES 🦇</strong>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1em", marginBottom: "40px" }}>
          All public open-source projects, AI neural networks, full-stack platforms, and backend infrastructure from my GitHub (<strong style={{ color: "#facc15" }}>@Hitesh-09</strong>).
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. Edulink */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EduLink – Study Collaboration Platform"
              subtitle="Jan 2025 | Full-Stack Web & REST APIs"
              techStack="TypeScript • React.js • Python • FastAPI • PostgreSQL • Tailwind CSS"
              description="Full-stack academic collaboration platform featuring study group management, real-time resource sharing, and low-latency API architecture reducing backend response times by 30%."
              ghLink="https://github.com/Hitesh-09/Edulink"
              demoLink="https://edulink-one.vercel.app"
            />
          </Col>

          {/* 2. Retinal Disease Classification */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Multi-Label Retinal Disease AI"
              subtitle="Feb 2026 | Deep Learning & Computer Vision"
              techStack="Python • TensorFlow • Keras • EfficientNet • DenseNet • Grad-CAM"
              description="Deep learning system for multi-label retinal disease detection using 5,000+ medical images. Implemented transfer learning and Grad-CAM activation maps for clinical explainability."
              ghLink="https://github.com/Hitesh-09/retinal-disease-classification"
            />
          </Col>

          {/* 3. ParamSetu */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ParamSetu – Delivery Rider Insurance"
              subtitle="Mar 2026 | Parametric InsurTech Platform"
              techStack="Python • Streamlit • Risk Modeling • Data Analytics • REST APIs"
              description="Parametric insurance engine designed for gig-economy delivery workers. Automatically triggers claims based on real-time environmental data, weather disruptions, and risk indices."
              ghLink="https://github.com/Hitesh-09/ParamSetu"
              demoLink="https://paramsetu.streamlit.app/"
            />
          </Col>

          {/* 4. KrishiMitra */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="KrishiMitra – Agri-Tech Backend API"
              subtitle="Aug 2025 | Backend Architecture"
              techStack="Node.js • Express.js • REST API • PostgreSQL • Python • Agri-Tech"
              description="Scalable backend data platform built for managing farmer profiles, soil analytics, crop data, and regional agri-tech integration with high-performance RESTful endpoints."
              ghLink="https://github.com/Hitesh-09/KrishiMitra"
            />
          </Col>

          {/* 5. TrainMate */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TrainMate – Smart Train Search Engine"
              subtitle="May 2025 | Web Application & Routing"
              techStack="Python • Flask • HTML5 • CSS3 • JSON APIs • Render"
              description="Smart railway route search and travel planning application providing instant route availability, train schedules, and interactive booking options."
              ghLink="https://github.com/Hitesh-09/TrainMate"
              demoLink="https://trainmate-penf.onrender.com/"
            />
          </Col>

          {/* 6. BajajFinserv */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BajajFinserv Challenge App"
              subtitle="Apr 2026 | Full-Stack Web Platform"
              techStack="TypeScript • React.js • RESTful APIs • Vercel Deployment"
              description="Full-stack web application developed for the Bajaj Finserv challenge, processing structured JSON requests, multi-field filtering, and responsive data rendering."
              ghLink="https://github.com/Hitesh-09/BajajFinserv"
              demoLink="https://bajaj-finserv-client.vercel.app"
            />
          </Col>

          {/* 7. RoadWise (Game) */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="RoadWise – 3D Interactive Unity Game"
              subtitle="Jun 2025 | 3D Interactive Game Dev"
              techStack="C# • Unity Engine • 3D Modeling • Physics Engine • UI Systems"
              description="Interactive 3D Unity game focused on road safety, vehicle physics simulation, dynamic traffic obstacle generation, and real-time player telemetry."
              ghLink="https://github.com/Hitesh-09/Game"
            />
          </Col>

          {/* 8. SipWise */}
          <Col md={4} className="project-card mb-4">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="SipWise – Water Tracking Web App"
              subtitle="Jun 2025 | Frontend Utility Application"
              techStack="JavaScript • HTML5 • CSS3 • LocalStorage API"
              description="Minimalist daily hydration tracking web application featuring interactive goal progress rings, custom reminder intervals, and persistent local data storage."
              ghLink="https://github.com/Hitesh-09/SipWise"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
