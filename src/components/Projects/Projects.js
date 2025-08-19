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
          {/* Starbucks Segmentation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starbucks}
              isBlog={false}
              title="Starbucks Customer Segmentation"
              description="Consolidated & pre-processed 300K+ entries, engineered features, applied PCA + K-Means to cluster 17K customers, and inferred demographics for targeted promos."
              modalContent={`• Consolidated and pre-processed three datasets containing 300,000+ entries; ensured cleanliness and merged where necessary.
• Conducted EDA, engineered features, and applied PCA to reduce dimensionality.
• Employed K-Means to cluster 17,000 customers; chose k via Silhouette Score and SSE, and visualized/optimized with t-SNE.
• Inferred primary demographic traits per cluster to design the most effective promotional strategies.`}
              ghLink="https://github.com/rj-maleti/Starbucks-Customer-Segmentation-.git"
            />
          </Col>

          {/* Forecasting Automobile Sales */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forecasting}
              isBlog={false}
              title="Forecasting Analysis of Automobile Sales"
              description="Built SARIMA, Holt-Winters & LSTM to forecast EV/Non-EV sales in India (2015–2024); preprocessing + evaluation with MAPE, RMSE, R²."
              modalContent={`• Developed time-series forecasting models (SARIMA, Holt-Winters, LSTM) to predict EV and Non-EV sales in India (2015–2024).
• Performed preprocessing: outlier detection and seasonality adjustment.
• Achieved strong accuracy measured via MAPE, RMSE, and R².
• Delivered insights to optimize supply chain, resource allocation, and production alignment with demand.`}
              ghLink="https://github.com/rj-maleti/Time-Series-Forecasting-of-Automobiles"
            />
          </Col>

          {/* Credit Card Fraud Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              isBlog={false}
              title="Credit Card Fraud Analysis"
              description="Handled imbalanced data, ran multiple ML models with grid search; KNN topped with 95% accuracy and 93% recall."
              modalContent={`• Processed and visualized an imbalanced dataset using Python; performed EDA for deeper insights.
• Tuned Logistic Regression, Decision Tree, SVM, KNN, XGBoost, and Neural Networks via grid search.
• Achieved 93% recall with KNN and 95% overall accuracy.
• Evaluated using F1 score, Confusion Matrix, and ROC curve for robust detection.`}
              ghLink="https://github.com/rj-maleti/Credit-Card-Fraud-Detection.git"
            />
          </Col>

          {/* Power BI Dashboards */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Power BI Dashboards"
              description="Interactive dashboards for E-commerce, HR, and Zomato sales using Power BI, SQL & Excel; DAX modeling for actionable insights."
              modalContent={`• Built interactive dashboards for E-commerce, HR, and Zomato Sales using Power BI, MySQL, and Excel.
• Used DAX, star schemas, and clear visuals to highlight KPIs, attrition, customer behavior, and sales trends.
• Enabled data-driven decisions by integrating multiple sources and crafting insight-focused layouts.`}
              ghLink="https://github.com/rj-maleti/Power-BI-Interactive-Dashboards.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
