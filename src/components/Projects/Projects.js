import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Replace with your own project images/screenshots
import starbucks from "../../Assets/Projects/starbucks.png";
import forecasting from "../../Assets/Projects/forecasting.png";
import fraud from "../../Assets/Projects/fraud.png";
import dashboard from "../../Assets/Projects/dashboard.png";

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
              isBlog={false}
              title="Starbucks Customer Segmentation"
              description="Performed data cleaning, preprocessing, and feature engineering on 300K+ records. Applied PCA and K-means clustering to group 17,000 customers and derived insights on demographics for targeted promotions."
              ghLink="https://github.com/rj-maleti/Starbucks-Customer-Segmentation-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forecasting}
              isBlog={false}
              title="Forecasting Analysis of Automobile Sales"
              description="Developed forecasting models (SARIMA, Holt-Winters, LSTM) for EV and Non-EV sales in India (2015–2024). Applied preprocessing (seasonality adjustment, outlier detection) and evaluated performance using MAPE, RMSE, and R²."
              ghLink="https://github.com/rj-maleti/Time-Series-Forecasting-of-Automobiles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              isBlog={false}
              title="Credit Card Fraud Analysis"
              description="Processed and visualized imbalanced datasets. Compared ML models (Logistic Regression, SVM, KNN, XGBoost, Neural Nets). Achieved 95% accuracy with KNN and optimized results using grid search."
              ghLink="https://github.com/rj-maleti/Credit-Card-Fraud-Detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Power BI Dashboards"
              description="Built interactive dashboards for E-commerce, HR, and Zomato Sales Analysis using Power BI, MySQL, and Excel. Leveraged DAX functions, data modeling, and visualization techniques to generate actionable business insights."
              ghLink="https://github.com/rj-maleti/Power-BI-Interactive-Dashboards.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
