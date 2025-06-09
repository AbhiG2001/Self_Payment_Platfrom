import React from "react";
import BlurText from "./Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};


const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-xl mx-auto">
      {/* <h1 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">Support</h1> */}
      <BlurText
        text="Support"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
      <p style={{fontFamily: 'Montserrat, sans-serif'}} className="mb-4 text-gray-700">
        If you need help, reach out via email or call. Were here 24/7.
      </p>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>
          📥 <strong>Email:</strong> support@paynow.com
        </p>
        <p>
          ☎️ <strong>Phone:</strong> support@paynow.com
        </p>
      </div>
    </div>
  );
};

export default Support;
