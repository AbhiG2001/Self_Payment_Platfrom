import React from 'react';
import './Notifications.css';
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Notifications = () => {
  const notifications = [
    "Your bill payment was successful.",
    "You received ₹50 cashback.",
    "New offer available: 10% off on electricity bill.",
  ];

  return (
    <div className="notifications-container">
      {/* <h2 className="notifications-title">Notifications</h2> */}
      <BlurText
        text="Notifications"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
      <ul className="notification-list">
        {notifications.map((note, idx) => (
          <li key={idx} className="notification-item">{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
