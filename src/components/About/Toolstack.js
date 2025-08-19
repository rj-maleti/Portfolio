import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowerbi,
  SiTableau,
  SiMicrosoftexcel,
  SiMysql,
  SiJupyter,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPowerbi size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTableau size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMicrosoftexcel size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiJupyter size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Jupyter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGithub size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
