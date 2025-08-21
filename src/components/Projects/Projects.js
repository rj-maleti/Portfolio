import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import starbucks from "../../Assets/Projects/starbucks.png";
import forecasting from "../../Assets/Projects/forecasting.png";
import fraud from "../../Assets/Projects/fraud.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import projectContents from "./projectContent";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starbucks}
              title="Starbucks Customer Segmentation"
              description="Consolidated & pre-processed 300K+ entries, engineered features, applied PCA + K-Means to cluster 17K customers, and inferred demographics for targeted promos."
              modalContent={projectContents.starbucks}
              ghLink="https://github.com/rj-maleti/Starbucks-Customer-Segmentation-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forecasting}
              title="Forecasting Analysis of Automobile Sales"
              description="Built SARIMA, Holt-Winters & LSTM to forecast EV/Non-EV sales in India (2015–2024); preprocessing + evaluation with MAPE, RMSE, R²."
              modalContent={projectContents.forecasting}
              ghLink="https://github.com/rj-maleti/Time-Series-Forecasting-of-Automobiles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              title="Credit Card Fraud Detection"
              description="Handled imbalanced data, ran multiple ML models with grid search; KNN topped with 95% accuracy and 93% recall."
              modalContent={projectContents.fraud}
              ghLink="https://github.com/rj-maleti/Credit-Card-Fraud-Detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              title="Interactive Business Dashboards"
              description="Interactive dashboards for E-commerce, HR, and Zomato sales using Power BI, SQL & Excel; DAX modeling for actionable insights."
              modalContent={projectContents.dashboards}
              ghLink="https://github.com/rj-maleti/Power-BI-Interactive-Dashboards.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
