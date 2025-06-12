import React, { useState } from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Recharge = () => {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleRecharge = () => {
    if (!mobile || !amount) {
      setMessage("please enter both mobile number and amount.");
    } else {
      setMessage(`Recharge of ₹${amount} is being processed for ${mobile}`);
      setMobile("");
      setAmount("");
    }
  };

  // const handleRecharge = () => {
  //   alert(`Recharge of ₹${amount} is being processed for ${mobile}`);
  // };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow max-w-md mx-auto h-[315px]">
        {/* <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">
          Mobile Recharge
        </h2> */}
        <BlurText
        text="Mobile Recharge"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          className="w-full border rounded p-2 mb-4"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="w-full border rounded p-2 mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleRecharge}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Recharge Now
        </button>
        {message && (
          <p className="text-red-500 mt-4 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Recharge;
