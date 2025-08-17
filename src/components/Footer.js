import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,   // <-- added Mail icon
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rajneesh Maleti</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RM</h3>
        </Col>
        <Col md="4" className="footer-body d-flex justify-content-end">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rj-maleti"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rajneesh-maleti-3b5221218"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=rajneeshmaleti2@gmail.com"   // <-- your mail link
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
