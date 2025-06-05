import React from "react";

const rewards = [
  { id: 1, title: "Scratch Card Won", amount: "₹10" },
  { id: 2, title: "UPI Cashback", amount: "₹25" },
  { id: 3, title: "Electricity Bill Cashback", amount: "₹50" },
];

const Rewards = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Rewards</h2>
      <div className="space-y-4">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{reward.title}</p>
            <p className="text-green-600">+ {reward.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
