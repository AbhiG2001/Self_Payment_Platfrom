import React, { useState } from "react";

const ElectricityBill = () => {
  const [details, setDetails] = useState({ consumerId: "", amount: "" });

  const handleChange = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

  const handlePay = () => {
    alert(`Paid ₹${details.amount} for Consumer ID: ${details.consumerId}`);
    setDetails({ consumerId: "", amount: "" });
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Electricity Bill Payment</h2>
      <input
        name="consumerId"
        value={details.consumerId}
        onChange={handleChange}
        placeholder="Consumer ID"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        name="amount"
        type="number"
        value={details.amount}
        onChange={handleChange}
        placeholder="Amount (₹)"
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={handlePay}
        className="bg-blue-600 text-white w-full py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default ElectricityBill;
