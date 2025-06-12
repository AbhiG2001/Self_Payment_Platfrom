import React, { useState } from "react";

const WalletTopup = () => {
  const [balance, setBalance] = useState(500.0); // default balance
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTopUp = () => {
    const topUpAmount = parseFloat(amount);
    if (!topUpAmount || topUpAmount <= 0) {
      setMessage("Please enter a valid top-up amount.");
      return;
    }
    setBalance((prev) => parseFloat((prev + topUpAmount).toFixed(2)));
    setAmount("");
    setMessage(`Wallet topped up with ₹${topUpAmount.toFixed(2)} successfully.`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Wallet Top-Up</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-5">
        <div className="text-lg text-gray-800 text-center">
          Current Balance: <span className="text-green-600 font-semibold">₹{balance}</span>
        </div>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to top up"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleTopUp}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Money
        </button>

        {message && (
          <div className="text-center text-sm text-blue-600 font-medium">{message}</div>
        )}
      </div>
    </div>
  );
};

export default WalletTopup;
