import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few key projects from my resume and recent development work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="KrishiMitra - Multilingual AI Farm Advisor"
              subtitle="Jul 2025 | Full Stack Development"
              techStack="Python • FastAPI • HTML • JS • REST APIs • Uvicorn"
              description="Developed an agentic pipeline integrating weather, soil, market, and government scheme data to deliver contextual insights. Implemented an offline-first architecture using local datasets and REST APIs, providing explainable, source-backed responses optimised for low-connectivity environments. (Submitted for Capital One Launchpad Hackathon)"
              ghLink="https://github.com/Hitesh-09/KrishiMitra"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Retinal Disease Classification"
              subtitle="Jan 2026 - Apr 2026 | Machine Learning"
              techStack="Python • TensorFlow/Keras • EfficientNet • NumPy • Matplotlib"
              description="Developed a deep learning-based retinal disease classification model using CNN architectures (EfficientNet with transfer learning), image preprocessing, data augmentation, and comprehensive evaluation using accuracy, precision, recall, and F1-score."
              ghLink="https://github.com/Hitesh-09/retinal-disease-classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TrainMate - Smart Route Optimization"
              subtitle="May 2025 - Aug 2025 | Web Development"
              techStack="Python • Flask • HTML • CSS • JSON"
              description="Developed a web application for train journey planning that provides optimized route suggestions, including nearby stations, alternate boarding points, and break journey options across India."
              ghLink="https://github.com/Hitesh-09/TrainMate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ParamSetu"
              subtitle="Bridge Infrastructure Monitoring System"
              techStack="React.js • Node.js • IoT Sensor Data APIs"
              description="An innovative bridge management system for monitoring and maintaining bridge infrastructure. Features real-time sensor data visualization and predictive maintenance alerts."
              ghLink="https://github.com/Hitesh-09/ParamSetu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
