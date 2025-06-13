import React from 'react';
import './Notifications.css';
import BlurText from "../Animations/BlurText";

const Notifications = () => {
  const notifications = [
    "Your bill payment was successful.",
    "You received ₹50 cashback.",
    "New offer available: 10% off on electricity bill.",
  ];

  const handleAnimationComplete = () => {
    console.log("Notification title animation complete.");
  };

  return (
    <section className="notifications-container">
      <BlurText
        text="Notifications"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="notification-title"
      />

      <ul className="notification-list">
        {notifications.map((note, idx) => (
          <li key={idx} className="notification-item">
            <span className="bullet">&#8226;</span> {note}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
