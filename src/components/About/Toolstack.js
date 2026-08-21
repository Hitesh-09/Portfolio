import React from "react";
import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { SiGit, SiGithub, SiPostman, SiVisualstudiocode, SiDocker } from "react-icons/si";

function Toolstack() {
  const tiltOptions = {
    glareEnable: true,
    glareMaxOpacity: 0.35,
    glareColor: "#facc15",
    scale: 1.05,
    tiltMaxAngleX: 20,
    tiltMaxAngleY: 20,
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiGit fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Git</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiGithub fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">GitHub</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiDocker fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Docker</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiPostman fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Postman</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiVisualstudiocode fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">VS Code</div>
        </Tilt>
      </Col>
    </Row>
  );
}

export default Toolstack;
