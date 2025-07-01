import React from 'react';
import './BenefitsSection.css';

const benefits = [
  {
    title: "Dynamic Premiums",
    description: "Pay less when you stay healthy — your insurance adjusts to your real-time health metrics."
  },
  {
    title: "Early Risk Detection",
    description: "AI-driven monitoring can detect potential health risks early, enabling proactive care."
  },
  {
    title: "Personalized Coverage",
    description: "Insurance is tailored to your lifestyle, activity, and health patterns."
  },
  {
    title: "Wearable Integration",
    description: "Sync with devices like Fitbit, Apple Watch, or Google Fit for automatic data syncing."
  },
  {
    title: "Healthy Behavior Incentives",
    description: "Get rewards or lower premiums for meeting health goals."
  },
  {
    title: "Transparent Health Score",
    description: "Track your wellness score in your app — know how your health impacts your cost."
  },
  {
    title: "Data-Driven Decisions",
    description: "Real-time analytics help insurers make smarter risk assessments and policy adjustments."
  },
  {
    title: "Reduced Claim Fraud",
    description: "Verified health data reduces the risk of false claims."
  },

];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <h2 className="benefits-title">Benefits of Variable Health Tech</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
