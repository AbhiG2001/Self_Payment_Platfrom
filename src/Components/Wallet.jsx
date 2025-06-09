import React from "react";
import BlurText from "./Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      {/* <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">My Wallet</h2> */}
      <BlurText
        text="My Wallet"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
      <div className="bg-white p-6 rounded shadow space-y-4">
        <div style={{fontFamily: 'Montserrat, sans-serif'}} className="text-lg">
          Current Balance: <span className="font-bold text-green-600">₹2,500</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add Money</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded w-full">Withdraw</button>
      </div>
    </div>
  );
};

export default Wallet;
