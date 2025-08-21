const projectContents = {
  forecasting: `
    <h3>📊 Forecasting Analysis of Automobile Sales</h3>
    <p>This project aimed to address one of the most critical challenges in today’s automobile industry — anticipating future demand amid the ongoing transition from conventional vehicles to electric vehicles (EVs). Using monthly sales data from 2015–2023, sourced from the Ministry of Road Transport and Highways (VAHAN Dashboard), the study forecasted 2024 EV and Non-EV sales through advanced time-series models.</p>

    <h3>📌 Business Context</h3>
    <p>India’s automobile sector is experiencing a pivotal shift, driven by government incentives, environmental awareness, and consumer adoption of EVs. For manufacturers, accurate forecasting is not just about predicting numbers — it is about aligning production capacity, supply chain management, and marketing strategies with real market demand.</p>
    <p>Inaccurate forecasts can lead to overproduction, inventory pile-ups, or missed opportunities in high-demand segments, making forecasting a strategic priority.</p>

    <h3>🔍 Approach</h3>
    <ul>
      <li><strong>Data Preprocessing:</strong> Cleaning, handling missing values, detecting outliers, and normalizing sales data.</li>
      <li><strong>Exploratory Analysis:</strong> Identifying long-term trends, seasonal cycles (festivals, subsidies, new launches), and anomalies.</li>
      <li><strong>Model Development:</strong>
        <ul>
          <li>Baseline models: Moving Averages, Weighted Averages.</li>
          <li>Smoothing models: Exponential Smoothing (SES, DES, Holt-Winters).</li>
          <li>Advanced models: SARIMA for seasonal forecasting and LSTM for capturing non-linear dependencies.</li>
        </ul>
      </li>
      <li><strong>Model Evaluation:</strong> Accuracy assessed using MAPE, RMSE, R², and MAD for a comprehensive comparison.</li>
    </ul>

    <h3>💡 Key Insights</h3>
    <ul>
      <li><strong>EV Sales:</strong> Strong upward trend with seasonal spikes during Diwali and subsidy cycles.
        <ul>
          <li>SARIMA achieved the lowest forecast error (MAPE ~9.79%), making it the most reliable model for EV demand.</li>
          <li>Holt-Winters also captured seasonality well.</li>
          <li>LSTM highlighted complex non-linear patterns but required more granular data for higher accuracy.</li>
        </ul>
      </li>
      <li><strong>Non-EV Sales:</strong> Showed steady but slower growth with mild seasonality.
        <ul>
          <li>Double Exponential Smoothing (DES) proved the most reliable, with the lowest MAPE ~7.22%, thanks to its ability to capture stable trends efficiently.</li>
        </ul>
      </li>
    </ul>

    <h3>🏆 Best Performing Models:</h3>
    <ul>
      <li>EVs → SARIMA (lowest forecast errors, robust with seasonality).</li>
      <li>Non-EVs → DES (simpler, computationally efficient, strong trend fit).</li>
    </ul>

    <h3>🎯 Strategic Implications</h3>
    <ul>
      <li><strong>Manufacturers:</strong> Use SARIMA-driven EV forecasts to align production with peak demand cycles and reduce risks of under/over supply.</li>
      <li><strong>Supply Chain & Inventory:</strong> Apply DES forecasts for Non-EVs to ensure smoother inventory planning in a predictable market.</li>
      <li><strong>Policy Makers & Investors:</strong> Forecasts provide data-backed evidence of EV adoption momentum, supporting targeted policies and capital allocation.</li>
      <li><strong>Future Outlook:</strong> With larger, more granular datasets, LSTM models could unlock even more accurate long-term forecasts as EV adoption accelerates.</li>
    </ul>

    <h3>✅ Conclusion</h3>
    <p>By integrating traditional statistical techniques (SARIMA, DES) with modern machine learning (LSTM), this project delivered not only accurate sales forecasts but also actionable insights for decision-makers.</p>
    <p>The results clearly highlight:</p>
    <ul>
      <li>SARIMA → Best for EVs (MAPE: ~9.79%).</li>
      <li>DES → Best for Non-EVs (MAPE: ~7.22%).</li>
    </ul>
    <p>These findings help bridge the gap between data science and business strategy, ensuring that the Indian automobile industry can adapt effectively to the dynamic EV revolution.</p>
  `,

  starbucks: `
    <h3>☕ Starbucks Customer Segmentation</h3>
    <h4>🛑 Problem</h4>
    <p>Starbucks serves a diverse global customer base with varying preferences, lifestyles, and behaviors. However, a one-size-fits-all marketing strategy often fails to maximize customer engagement, loyalty, and sales.</p>
    <p>The challenge: How can Starbucks segment its customers effectively to deliver personalized offers, improve loyalty, and drive long-term growth?</p>

    <h4>🔍 Approach / Methodology</h4>
    <ol>
      <li><strong>Data Collection & Preparation:</strong> Consolidated and pre-processed three datasets (~300,000 entries). Ensured data cleanliness, merged sources, handled missing values, and standardized formats.</li>
      <li><strong>Exploratory Data Analysis (EDA):</strong> Identified customer spending patterns, demographics, and behavioral attributes. Engineered features to capture recency, frequency, and monetary behavior.</li>
      <li><strong>Dimensionality Reduction:</strong> Applied Principal Component Analysis (PCA) to reduce data complexity while retaining key variance. Used t-SNE optimization to visualize high-dimensional clusters.</li>
      <li><strong>Clustering Algorithm:</strong> Implemented K-Means clustering on ~17,000 customer records (after feature selection). Determined optimal number of clusters using Silhouette Score & Sum of Squared Errors (SSE).</li>
    </ol>

    <h4>💡 Solution / Results</h4>
    <ul>
      <li>K-Means Segmentation Outcome: Customers segmented into 4 key clusters:
        <ul>
          <li>Busy Professionals → High spenders, frequent mobile app users, prioritize convenience.</li>
          <li>College Students → Price-sensitive, socially conscious, drawn to sustainability offers.</li>
          <li>Loyal Regulars → Frequent store visitors, moderate spenders, respond well to loyalty rewards.</li>
          <li>Occasional Buyers → Low-frequency customers, responsive to discounts and seasonal promotions.</li>
        </ul>
      </li>
      <li>Validation Metrics:
        <ul>
          <li>Silhouette Score → Confirmed optimal separation between clusters.</li>
          <li>SSE (Elbow Method) → Helped determine cluster count stability.</li>
        </ul>
      </li>
    </ul>

    <h4>📑 Recommendations</h4>
    <ul>
      <li>Cluster 1 (Busy Professionals) → Promote mobile ordering & premium subscription offers.</li>
      <li>Cluster 2 (College Students) → Discounts on reusable cups, emphasize sustainability campaigns.</li>
      <li>Cluster 3 (Loyal Regulars) → Strengthen loyalty rewards & personalized offers.</li>
      <li>Cluster 4 (Occasional Buyers) → Send seasonal promotions & introductory discounts to increase frequency.</li>
    </ul>

    <h4>🌍 Impact / Use</h4>
    <p>• Personalized Marketing: More relevant offers → higher engagement and conversion rates.<br/>
    • Customer Loyalty: Tailored rewards strengthen emotional connection with the brand.<br/>
    • Sales Growth: Targeted campaigns reduce marketing waste and maximize ROI.<br/>
    • Strategic Insight: Helps Starbucks understand demographic & behavioral drivers for each segment.</p>
  `,

  fraud: `
    <h3>💳 Credit Card Fraud Detection</h3>
    <h4>🛑 Problem</h4>
    <p>Credit card fraud is a critical challenge for financial institutions as the number of digital transactions continues to rise. The primary difficulty lies in detecting fraudulent transactions in real time while minimizing false positives. Even small detection errors can result in financial loss, reputational damage, and reduced customer trust.</p>

    <h4>🔍 Approach / Methodology</h4>
    <ol>
      <li>Data Collection: Used publicly available imbalanced datasets (fraudulent vs. non-fraudulent transactions). Ensured data was representative of real-world imbalance (fraud cases &lt;1%).</li>
      <li>Data Preprocessing: Handled imbalanced classes using techniques such as SMOTE (Synthetic Minority Oversampling). Performed feature engineering to identify patterns linked to fraudulent behavior. Standardized transaction attributes for model readiness.</li>
      <li>EDA: Visualized fraud vs. non-fraud distributions, analyzed patterns (amount, time, frequency), identified anomalies and correlations.</li>
      <li>Model Development: Trained and optimized algorithms → Logistic Regression, Decision Tree, SVM, KNN, XGBoost, Neural Networks. Applied Grid Search CV for tuning.</li>
      <li>Evaluation: Metrics used → Recall (primary), Precision, F1-score, ROC-AUC, Confusion Matrix.</li>
    </ol>

    <h4>💡 Solution / Results</h4>
    <p>• Achieved 93% Recall → High ability to correctly identify fraudulent transactions.<br/>
    • KNN achieved the best performance:
      <br/>Accuracy: ~95%
      <br/>Recall: ~93%</p>

    <h4>🌍 Impact / Use</h4>
    <p>• Financial Institutions: Prevent substantial losses.<br/>• Customer Trust: Enhanced protection builds loyalty.<br/>• Operational Efficiency: Reduces false positives → fewer unnecessary investigations.<br/>• Scalability: Models can adapt to evolving fraud patterns with retraining.</p>
  `,

  dashboards: `
    <h3>📊 Interactive Business Dashboards</h3>
    <p>This project showcases a collection of interactive dashboards built to analyze, monitor, and present business insights across HR, Sales, and E-commerce domains. The dashboards were created using Power BI / Tableau / Python visualization libraries (depending on the use case), focusing on clarity, storytelling, and actionable decision support.</p>

    <h4>1⃣ HR Analytics Dashboard</h4>
    <p><strong>Problem:</strong> Employee attrition is a critical issue in HR management.<br/><strong>Approach:</strong> Processed HR datasets (~1,470 employees), performed EDA, designed visuals.<br/><strong>Result:</strong> 237 attritions (16%) highlighted. Highest churn among sales executives & lab technicians.<br/><strong>Impact:</strong> Supports targeted retention strategies.</p>

    <h4>2⃣ E-commerce Sales Dashboard</h4>
    <p><strong>Problem:</strong> Businesses need real-time visibility into sales performance.<br/><strong>Approach:</strong> Processed 5,615 orders, tracked KPIs (Profit, Sales, Quantity).<br/><strong>Result:</strong> Clothing (62.6%) top category, COD (43.7%) dominates payment methods.<br/><strong>Impact:</strong> Enables inventory optimization & targeted marketing.</p>

    <h4>📈 Additional Dashboards:</h4>
    <ul>
      <li>Financial dashboards</li>
      <li>Customer behavior analytics</li>
      <li>KPI monitoring panels</li>
    </ul>

    <h4>🛠 Tools & Tech Stack:</h4>
    <p>Power BI, Tableau, Python (Pandas, Matplotlib, Plotly), Excel</p>

    <h4>🌍 Business Impact:</h4>
    <p>• Improved decision-making through real-time insights.<br/>• Increased profitability & retention.<br/>• Streamlined reporting.</p>
  `
};

export default projectContents;
