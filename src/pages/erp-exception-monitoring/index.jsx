import React from "react";

export const ErpExceptionMonitoring = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-3">ERP Exception Monitoring System</h1>

      <p className="text-muted">
        Intelligent monitoring for ERP integrations using rule-based validation
        and anomaly detection.
      </p>

      <section className="mt-4">
        <p>
          Modern ERP systems rely heavily on integrations across finance,
          supply chain, and operations. Failures, SLA breaches, and silent
          degradations are often detected reactively through support tickets
          or manual log inspection.
        </p>
        <p>
          This project demonstrates a practical approach to proactively
          monitoring ERP-style integration data using deterministic rules
          combined with anomaly detection.
        </p>
      </section>

      <section className="mt-5">
        <h3>The Problem</h3>
        <p>
          In large ERP environments, thousands of integration transactions are
          processed daily. Traditional monitoring focuses mainly on hard
          failures, while performance degradation, retry loops, and abnormal
          behaviour often go unnoticed until business impact occurs.
        </p>
      </section>

      <section className="mt-5">
        <h3>Solution Overview</h3>
        <ul>
          <li>Simulated ERP integration logs reflecting real-world patterns</li>
          <li>Rule-based validation for known failure and SLA breach conditions</li>
          <li>Anomaly detection for unusual transaction behaviour</li>
          <li>Consolidated exception output for operational visibility</li>
        </ul>

        <pre className="bg-dark text-light p-3 rounded">
{`Integration Logs
      ↓
Rule-Based Validation
      ↓
Anomaly Detection
      ↓
Exception Summary & Insights`}
        </pre>
      </section>

      <section className="mt-5">
        <h3>Sample Output</h3>
        <p>
          The chart below shows the distribution of processing times across
          simulated ERP integration transactions.
        </p>

        <img
          src="https://raw.githubusercontent.com/AmanpreetSingh0071/erp-exception-monitoring/main/assets/output_summary.png"
          alt="ERP Processing Time Distribution"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </section>

      <section className="mt-5">
        <h3>Key Design Decisions</h3>
        <ul>
          <li>Explainable logic suitable for enterprise environments</li>
          <li>Combination of deterministic rules and anomaly detection</li>
          <li>Detection of issues even when transactions succeed</li>
          <li>Focus on reliability and maintainability</li>
        </ul>
      </section>

      <section className="mt-5">
        <h3>Technology Stack</h3>
        <ul>
          <li>Python</li>
          <li>Rule-based validation</li>
          <li>Anomaly detection (Isolation Forest)</li>
          <li>Data analysis & visualisation</li>
        </ul>
      </section>

      <section className="mt-5">
        <h3>Source Code</h3>
        <a
          href="https://github.com/AmanpreetSingh0071/erp-exception-monitoring"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light"
        >
          View GitHub Repository
        </a>
      </section>
    </div>
  );
};