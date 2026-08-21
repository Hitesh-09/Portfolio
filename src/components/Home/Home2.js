import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#facc15" scale={1.01} tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div style={{ background: "rgba(17, 20, 32, 0.6)", padding: "30px", borderRadius: "20px", border: "1px solid rgba(250, 204, 21, 0.25)", backdropFilter: "blur(10px)" }}>
                <h1 style={{ fontSize: "2.6em", color: "#f8fafc" }}>
                  ALLOW ME TO <span style={{ color: "#facc15" }}> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body" style={{ color: "#cbd5e1" }}>
                  I am a Computer Science student at <b style={{ color: "#f8fafc" }}>SRM Institute of Science and Technology</b> (CGPA: <b style={{ color: "#facc15" }}>8.72 / 10</b>) skilled in Backend Development, Machine Learning, and Deep Learning.
                  <br />
                  <br />
                  I have hands-on experience building scalable APIs, cloud infrastructure, and AI-driven applications using
                  <i>
                    <b style={{ color: "#facc15" }}>
                      {" "}
                      Python, FastAPI, Node.js, PostgreSQL, REST APIs, and AWS{" "}
                    </b>
                  </i>.
                  <br />
                  <br />
                  My key fields of interest include developing high-performance
                  <i>
                    <b style={{ color: "#facc15" }}>
                      {" "}
                      Backend Systems, AI/ML Models (EfficientNet, DenseNet, PyTorch),{" "}
                    </b>
                  </i>
                  and Data Engineering pipelines with <b style={{ color: "#facc15" }}>Apache Spark & PySpark</b>.
                  <br />
                  <br />
                  I enjoy solving complex problems and building impactful applications such as <b style={{ color: "#facc15" }}>EduLink</b> (Collaborative Study Platform) and deep learning models for medical image classification.
                </p>
              </div>
            </Tilt>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.25} glareColor="#facc15" scale={1.05} tiltMaxAngleX={15} tiltMaxAngleY={15}>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ filter: "drop-shadow(0 0 20px rgba(250, 204, 21, 0.3))" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
