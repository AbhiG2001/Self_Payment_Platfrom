import React from "react";
import BlurText from "./Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const transactions = [
  { id: 1, type: "Recharge", amount: "₹199", date: "2025-06-04" },
  { id: 2, type: "Scan & Pay", amount: "₹350", date: "2025-06-03" },
  { id: 3, type: "Electricity Bill", amount: "₹620", date: "2025-06-01" },
];

const TransactionHistory = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    {/* <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">Transaction History</h2> */}
     <BlurText
        text="Transactions History"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
    <div className="bg-white rounded shadow p-4 space-y-3">
      {transactions.map((txn) => (
        <div
          key={txn.id}
          className="flex justify-between border-b pb-2 last:border-b-0"
        >
          <span style={{fontFamily: 'Montserrat, sans-serif'}} className="text-gray-800">{txn.type}</span>
          <span className="text-green-600">{txn.amount}</span>
          <span className="text-sm text-gray-500">{txn.date}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionHistory;
