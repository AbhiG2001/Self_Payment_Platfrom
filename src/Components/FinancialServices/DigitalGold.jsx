import React, { useState } from "react";

const DigitalGold = () => {
  const [balance, setBalance] = useState(0.0); // in grams
  const [amount, setAmount] = useState("");
  const [pricePerGram] = useState(5800); // mock price in ₹
  const [message, setMessage] = useState("");

  const clearMessage = () => {
    setTimeout(() => setMessage(""), 3000);
  };

  const handleBuy = () => {
    const rupees = parseFloat(amount);
    if (!rupees || rupees <= 0) {
      setMessage("Please enter a valid amount to buy.");
      clearMessage();
      return;
    }
    const grams = rupees / pricePerGram;
    setBalance((prev) => parseFloat((prev + grams).toFixed(4)));
    setAmount("");
    setMessage(`Successfully bought ${grams.toFixed(4)}g of gold.`);
    clearMessage();
  };

  const handleSell = () => {
    const rupees = parseFloat(amount);
    if (!rupees || rupees <= 0) {
      setMessage("Please enter a valid amount to sell.");
      clearMessage();
      return;
    }
    const grams = rupees / pricePerGram;
    if (grams > balance) {
      setMessage("❌ Insufficient gold balance.");
      clearMessage();
      return;
    }
    setBalance((prev) => parseFloat((prev - grams).toFixed(4)));
    setAmount("");
    setMessage(`Sold ${grams.toFixed(4)}g of gold successfully.`);
    clearMessage();
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6">Digital Gold Wallet</h1>

      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-5">
        <div className="text-lg text-center text-gray-700">
          Current Price: <strong className="text-yellow-700">₹{pricePerGram} / gram</strong>
        </div>

        <div className="text-center text-xl font-bold text-yellow-800">
          Gold Balance: {balance} g
        </div>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in ₹"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <div className="flex space-x-4">
          <button
            onClick={handleBuy}
            className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          >
            Buy Gold
          </button>
          <button
            onClick={handleSell}
            className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            Sell Gold
          </button>
        </div>

        {message && (
          <div className="text-center text-sm font-medium text-blue-600 mt-2">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalGold;
