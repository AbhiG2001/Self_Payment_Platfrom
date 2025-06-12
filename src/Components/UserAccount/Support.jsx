import React from "react";
import BlurText from "../Animations/BlurText";
import "./Support.css"; // Import CSS file

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Support = () => {
  return (
    <div className="support">
      <div className="support-container">
      <BlurText
        text="Support"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="support-heading"
      />
      <p className="support-description">
        If you need help, reach out via email or call. We’re available 24/7 to assist you.
      </p>
      <div className="support-box">
        <p><strong>📥 Email:</strong> support@paynow.com</p>
        <p><strong>☎️ Phone:</strong> +91-9876543210</p>
        <p><strong>📍 Address:</strong> 2nd Floor, PayNow Tower, Tech Street, Pune - 411001</p>
        <p><strong>🕒 Hours:</strong> 24/7 Live Chat, 9am - 6pm Phone Support</p>
      </div>
    </div>
    </div>
  );
};

export default Support;
