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
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Computer Science undergraduate at <b>SRMIST Chennai</b> with strong foundations in Data Structures, Algorithms, DBMS, and Operating Systems.
              <br />
              <br />
              I am experienced in backend and full-stack application development using
              <i>
                <b className="purple">
                  {" "}
                  Python, Flask, Node.js, C++, C#, and SQL-based databases{" "}
                </b>
              </i>
              — with strong expertise in REST API development and modular architecture design.
              <br />
              <br />
              My key fields of interest include building
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications, Agentic AI & ML Systems,{" "}
                </b>
              </i>
              and creating immersive games using <b className="purple">Unity & C#</b>.
              <br />
              <br />
              Whenever possible, I apply my problem-solving skills to build scalable solutions like <b className="purple">KrishiMitra</b> (AI Farm Advisor), <b className="purple">TrainMate</b>, and deep learning models for healthcare vision systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
