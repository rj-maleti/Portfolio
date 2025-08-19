import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiMysql,
  SiTableau,
  SiPowerbi,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiMicrosoftsqlserver,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <CgCPlusPlus size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiHtml5 size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiCss3 size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMysql size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiMicrosoftsqlserver size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>MS SQL Server</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPowerbi size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTableau size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Tableau</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPandas size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiNumpy size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>NumPy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiTensorflow size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>TensorFlow</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPytorch size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>PyTorch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiOpencv size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>OpenCV</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiGit size={50} />
        <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
