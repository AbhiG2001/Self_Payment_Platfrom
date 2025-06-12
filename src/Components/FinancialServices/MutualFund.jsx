import React, { useState } from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Mutual Fund animation completed!");
};

const MutualFunds = () => {
  const [selectedFund, setSelectedFund] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleInvest = (e) => {
    e.preventDefault();
    if (!selectedFund || !amount) {
      setMessage("Please select a fund and enter amount.");
    } else {
      setMessage(`₹${amount} invested in ${selectedFund} successfully!`);
      setSelectedFund("");
      setAmount("");
    }
  };

  const funds = [
    "Axis Bluechip Fund",
    "SBI Equity Hybrid Fund",
    "ICICI Prudential Technology Fund",
    "HDFC Small Cap Fund"
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800 max-w-md mx-auto">
      <BlurText
        text="Mutual Fund Investment"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl mb-6 text-blue-600 font-bold"
      />

      <p className="mb-4 text-lg font-montserrat text-gray-700">
        Invest in a wide range of mutual funds across equity, debt, and hybrid categories.
      </p>

      <form onSubmit={handleInvest} className="bg-white p-5 rounded-xl shadow space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1 font-montserrat">
            Select Fund
          </label>
          <select
            value={selectedFund}
            onChange={(e) => setSelectedFund(e.target.value)}
            className="w-full p-2 border rounded bg-white"
            required
          >
            <option value="">-- Choose a Fund --</option>
            {funds.map((fund, index) => (
              <option key={index} value={fund}>
                {fund}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1 font-montserrat">
            Amount to Invest (₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter investment amount"
            className="w-full p-2 border rounded bg-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Start Investing
        </button>
      </form>

      {message && (
        <p className="text-green-600 text-center font-semibold mt-4">{message}</p>
      )}
    </div>
  );
};

export default MutualFunds;
