import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I am <b className="purple">Rajneesh Maleti</b>, a{" "}
              <b className="purple">
                2025 B.Tech Mechanical Engineering graduate from IIT Jodhpur
              </b>
              , passionate about{" "}
              <b className="purple">
                Data Analytics, Machine Learning, and Business Intelligence.
              </b>
              <br />
              <br />
              Over the course of my degree, I have built impactful projects such
              as{" "}
              <b className="purple">
                Customer Segmentation, Time-Series Forecasting of Automobile
                Sales, Credit Card Fraud Detection,
              </b>{" "}
              and <b className="purple">Interactive Power BI Dashboards</b>.
              <br />
              <br />
              My technical skills include{" "}
              <i>
                <b className="purple">Python, C++, SQL</b>
              </i>{" "}
              and frameworks like{" "}
              <i>
                <b className="purple">
                  Pandas, NumPy, TensorFlow, PyTorch, OpenCV
                </b>
                .
              </i>{" "}
              I also work with{" "}
              <b className="purple">Power BI, Tableau, MySQL, and Excel</b> to
              create data-driven solutions.
              <br />
              <br />
              Alongside academics, I held{" "}
              <b className="purple">
                leadership roles in technical, cultural, and sports fests
              </b>
              , and served as a{" "}
              <b className="purple">core member of the Athletics Society</b>,
              which sharpened my teamwork and organizational skills.
              <br />
              <br />I aim to apply my{" "}
              <b className="purple">
                analytical skills and technical expertise
              </b>{" "}
              to solve real-world business problems and grow as a{" "}
              <b className="purple">
                Data Analyst / Business Intelligence Professional.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rj-maleti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajneesh-maleti-3b5221218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rajneeshmaleti2@gmail.com" // <-- your mail link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
