import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#facc15" scale={1.01} tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <div style={{ background: "rgba(17, 20, 32, 0.6)", padding: "25px", borderRadius: "20px", border: "1px solid rgba(250, 204, 21, 0.25)", backdropFilter: "blur(10px)" }}>
                  <h1 style={{ paddingBottom: 15, color: "#f8fafc" }} className="heading">
                    SYSTEM OPERATIVE <span role="img" aria-label="bat">🦇</span>
                  </h1>

                  <h1 className="heading-name">
                    I'M <strong style={{ color: "#facc15" }}>HITESH SHIMPI</strong>
                  </h1>

                  <div style={{ padding: "20px 30px", textAlign: "left" }}>
                    <Type />
                  </div>

                  <div style={{ paddingTop: "10px" }} className="d-flex flex-wrap gap-2 justify-content-start">
                    <span className="badge bg-dark border border-warning text-warning p-2 px-3 me-2 mb-2" style={{ fontSize: "0.9em", borderColor: "#facc15 !important" }}>
                      🎓 SRMIST CSE (8.72 CGPA)
                    </span>
                    <span className="badge bg-dark border border-warning text-warning p-2 px-3 me-2 mb-2" style={{ fontSize: "0.9em", borderColor: "#facc15 !important" }}>
                      ☁️ AWS AI & Cloud Certified
                    </span>
                    <span className="badge bg-dark border border-warning text-warning p-2 px-3 me-2 mb-2" style={{ fontSize: "0.9em", borderColor: "#facc15 !important" }}>
                      ⚡ Databricks Badged
                    </span>
                    <span className="badge bg-dark border border-warning text-warning p-2 px-3 me-2 mb-2" style={{ fontSize: "0.9em", borderColor: "#facc15 !important" }}>
                      🤖 AI/ML Developer Intern
                    </span>
                  </div>
                </div>
              </Tilt>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="#facc15" scale={1.03} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", filter: "drop-shadow(0 0 25px rgba(250, 204, 21, 0.35))" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hitesh-09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hitesh45/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
