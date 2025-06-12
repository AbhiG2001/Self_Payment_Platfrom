import React, { useState } from "react";

const FixedDeposit = () => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [interestRate, setInterestRate] = useState(6.5); // fixed interest rate
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturity = () => {
    const principal = parseFloat(amount);
    const years = parseFloat(tenure);
    if (isNaN(principal) || isNaN(years)) return;

    const maturity = principal * Math.pow(1 + interestRate / 100, years);
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Fixed Deposit Calculator</h1>

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Deposit Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Tenure (in years)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter tenure"
          />
        </div>

        <div className="text-gray-600">
          Interest Rate: <strong>{interestRate}%</strong> p.a.
        </div>

        <button
          onClick={calculateMaturity}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800 w-full"
        >
          Calculate Maturity
        </button>

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
