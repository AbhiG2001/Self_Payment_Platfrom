import React, { useState } from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("FD Animation Complete!");
};

const FixedDeposit = () => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate] = useState(6.5); // fixed interest rate
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [error, setError] = useState("");

  const calculateMaturity = () => {
    const principal = parseFloat(amount);
    const years = parseFloat(tenure);

    if (isNaN(principal) || isNaN(years) || principal <= 0 || years <= 0) {
      setError("Please enter valid positive numbers for both fields.");
      setMaturityAmount(null);
      return;
    }

    setError("");
    const maturity = principal * Math.pow(1 + interestRate / 100, years);
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <BlurText
        text="Fixed Deposit Calculator"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl mb-6 text-indigo-700 font-bold"
      />

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Deposit Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded bg-white"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Tenure (in years)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full border p-2 rounded bg-white"
            placeholder="Enter tenure"
          />
        </div>

        <div className="text-gray-600">
          Interest Rate: <strong>{interestRate}%</strong> p.a.
        </div>

        <button
          onClick={calculateMaturity}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full"
        >
          Calculate Maturity
        </button>

        {error && (
          <p className="text-red-600 text-sm text-center mt-2">{error}</p>
        )}

        {maturityAmount && (
          <div className="mt-4 text-green-700 font-semibold text-center">
            Maturity Amount: ₹{maturityAmount}
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedDeposit;
