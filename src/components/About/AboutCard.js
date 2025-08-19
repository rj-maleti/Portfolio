import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajneesh Maleti </span>
            from <span className="purple">India.</span>
            <br />
            I recently graduated with a{" "}
            <span className="purple">B.Tech in Mechanical Engineering</span> from
            the <span className="purple">Indian Institute of Technology, Jodhpur</span>.
            <br />
            My interests lie in{" "}
            <span className="purple">
              Data Analytics, Machine Learning, and Business Intelligence
            </span>
            , where I enjoy transforming data into insights and building impactful solutions.
            <br />
            <br />
            Apart from academics and coding, here are a few activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym & Athletics (Sprints, Badminton)
            </li>
            <li className="about-activity">
              <ImPointRight /> Leading and organizing college fests
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech tools & dashboards
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" , fontSize:"18px"}}>
            "I enjoy breaking down complex data and shaping it into real solutions."
          </p>
          <footer className="blockquote-footer">Rajneesh Maleti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
