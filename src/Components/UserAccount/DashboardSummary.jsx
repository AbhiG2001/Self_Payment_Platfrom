import React from 'react';
import './DashboardSummary.css';

const DashboardSummary = () => {
  const stats = [
    { label: "Total Transactions", value: 120 },
    { label: "Total Spent", value: "₹4,800" },
    { label: "Cashbacks Received", value: "₹350" },
  ];

  return (
    <section className="dashboard-summary">
      {stats.map((stat, idx) => (
        <article key={idx} className="summary-card">
          <p className="summary-label">{stat.label}</p>
          <h3 className="summary-value">{stat.value}</h3>
        </article>
      ))}
    </section>
  );
};

export default DashboardSummary;
