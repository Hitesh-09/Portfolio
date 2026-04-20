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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="KrishiMitra"
              description="A comprehensive agricultural platform connecting farmers with buyers, providing weather updates, crop suggestions, and market prices. Built with React.js and integrates real-time data APIs."
              ghLink="https://github.com/Hitesh-09/KrishiMitra"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ParamSetu"
              description="An innovative bridge management system for monitoring and maintaining bridge infrastructure. Features real-time sensor data visualization and predictive maintenance alerts."
              ghLink="https://github.com/Hitesh-09/ParamSetu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Retinal Disease Classification"
              description="Deep learning project using CNN and Transfer Learning to classify retinal diseases from fundus images. Achieved high accuracy in detecting various eye conditions for early diagnosis."
              ghLink="https://github.com/Hitesh-09/retinal-disease-classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="TrainMate"
              description="A smart train booking and management application with features like seat availability tracking, PNR status, and train schedule management. Built with modern web technologies."
              ghLink="https://github.com/Hitesh-09/TrainMate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
