import React, { useState } from "react";

const TaxPayments = () => {
  const [taxId, setTaxId] = useState("");
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    if (taxId && amount) {
      alert(`Paid ₹${amount} for Tax ID: ${taxId}`);
      setTaxId("");
      setAmount("");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Tax Payments</h1>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <input
          type="text"
          value={taxId}
          onChange={(e) => setTaxId(e.target.value)}
          placeholder="Enter Tax ID"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handlePay}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-800"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default TaxPayments;
