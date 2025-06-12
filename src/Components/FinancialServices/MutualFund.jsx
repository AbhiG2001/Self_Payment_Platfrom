import React from "react";

const MutualFunds = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mutual Fund Investment</h1>
      
      <p className="mb-4 text-lg">
        Invest in a wide range of mutual funds across equity, debt, and hybrid categories.
      </p>

      <div className="bg-white p-4 shadow rounded-xl space-y-4">
        <h2 className="text-xl font-semibold">Popular Funds</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Axis Bluechip Fund</li>
          <li>SBI Equity Hybrid Fund</li>
          <li>ICICI Prudential Technology Fund</li>
          <li>HDFC Small Cap Fund</li>
        </ul>

        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Start Investing
        </button>
      </div>
    </div>
  );
};

export default MutualFunds;
