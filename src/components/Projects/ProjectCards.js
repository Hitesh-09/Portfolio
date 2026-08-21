import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ fontWeight: "700" }}>{props.title}</Card.Title>
        {props.subtitle && (
          <Card.Subtitle style={{ color: "var(--accent)", fontSize: "0.9em", marginBottom: "10px" }}>
            {props.subtitle}
          </Card.Subtitle>
        )}
        {props.techStack && (
          <p style={{ color: "var(--success-accent)", fontSize: "0.85em", fontWeight: "600", marginBottom: "10px" }}>
            {props.techStack}
          </p>
        )}
        <Card.Text style={{ textAlign: "justify", fontSize: "0.95em" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

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
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
