import React, { useState } from "react";
import BlurText from "../Animations/BlurText";
import FS from "./FS";

const handleAnimationComplete = () => {
  console.log("Mutual Fund animation completed!");
};

const MutualFunds = () => {
  const [selectedFund, setSelectedFund] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInvest = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!selectedFund) newErrors.selectedFund = "Please select a fund.";
    if (!amount) newErrors.amount = "Please enter an amount.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage("");
    } else {
      setMessage(`₹${amount} invested in ${selectedFund} successfully!`);
      setSelectedFund("");
      setAmount("");
      setErrors({});
    }
  };

  const funds = [
    "Axis Bluechip Fund",
    "SBI Equity Hybrid Fund",
    "ICICI Prudential Technology Fund",
    "HDFC Small Cap Fund",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto flex flex-col items-start gap-4">
      {/* Header Section */}
      <div className="bg-white w-full p-4 rounded shadow-sm">
        <div className="flex items-center">
          <FS />
        </div>
        <BlurText
          text="Mutual Fund Investment"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-6 text-blue-600 font-bold"
        />
      </div>

      {/* Form Section */}
      <div className="bg-white w-full rounded p-4 shadow-md">
        <p className="mb-4 text-lg font-montserrat text-gray-700">
          Invest in a wide range of mutual funds across equity, debt, and hybrid categories.
        </p>

        <form onSubmit={handleInvest} className="space-y-5">
          {/* Fund Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1 font-montserrat">
              Select Fund
            </label>
            <select
              value={selectedFund}
              onChange={(e) => setSelectedFund(e.target.value)}
              className={`w-full p-2 border rounded bg-white ${
                errors.selectedFund ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">-- Choose a Fund --</option>
              {funds.map((fund, index) => (
                <option key={index} value={fund}>
                  {fund}
                </option>
              ))}
            </select>
            {errors.selectedFund && (
              <p className="text-red-600 text-sm mt-1">{errors.selectedFund}</p>
            )}
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1 font-montserrat">
              Amount to Invest (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter investment amount"
              className={`w-full p-2 border rounded bg-white ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount && (
              <p className="text-red-600 text-sm mt-1">{errors.amount}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Start Investing
          </button>
        </form>

        {message && (
          <p className="text-green-600 text-center font-semibold mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default MutualFunds;
