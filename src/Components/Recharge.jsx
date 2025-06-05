import React, { useState } from "react";

const Recharge = () => {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecharge = () => {
    alert(`Recharge of ₹${amount} is being processed for ${mobile}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Mobile Recharge</h2>
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
      </div>
    </div>
  );
};

export default Recharge;
