import React from "react";
import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiFastapi,
  SiNodedotjs,
  SiSupabase,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiApachespark,
  SiDatabricks,
  SiAmazonaws,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiGit,
} from "react-icons/si";

function Techstack() {
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
          <SiPython fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Python</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiFastapi fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">FastAPI</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiNodedotjs fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Node.js</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiPostgresql fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">PostgreSQL</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiSupabase fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Supabase</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiJavascript fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">JavaScript</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiReact fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">React.js</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiNextdotjs fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Next.js</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiVuedotjs fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Vue.js</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiTailwindcss fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Tailwind CSS</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiApachespark fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Apache Spark</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiDatabricks fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Databricks</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiAmazonaws fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">AWS</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiTensorflow fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">TensorFlow</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiKeras fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Keras</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiPytorch fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">PyTorch</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiScikitlearn fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Scikit-Learn</div>
        </Tilt>
      </Col>
      <Col xs={4} md={2}>
        <Tilt {...tiltOptions} className="tech-icons">
          <SiGit fontSize={"24px"} style={{ color: "#facc15" }} />
          <div className="tech-icons-text">Git</div>
        </Tilt>
      </Col>
    </Row>
  );
}

export default Techstack;
