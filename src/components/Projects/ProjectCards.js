import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      glareColor="#facc15"
      scale={1.03}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      className="h-100"
    >
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title style={{ fontWeight: "700", color: "#f8fafc" }}>{props.title}</Card.Title>
            {props.subtitle && (
              <Card.Subtitle style={{ color: "var(--accent)", fontSize: "0.9em", marginBottom: "10px", fontWeight: "600" }}>
                {props.subtitle}
              </Card.Subtitle>
            )}
            {props.techStack && (
              <p style={{ color: "#facc15", fontSize: "0.85em", fontWeight: "600", marginBottom: "12px", background: "rgba(250, 204, 21, 0.1)", padding: "4px 8px", borderRadius: "6px", display: "inline-block" }}>
                {props.techStack}
              </p>
            )}
            <Card.Text style={{ textAlign: "justify", fontSize: "0.95em", color: "#cbd5e1" }}>
              {props.description}
            </Card.Text>
          </div>
          <div style={{ marginTop: "15px" }}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Tilt>
  );
}
export default ProjectCards;
