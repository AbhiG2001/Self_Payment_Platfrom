import React, { useState } from "react";

const DigitalGold = () => {
  const [balance, setBalance] = useState(0.0); // in grams
  const [amount, setAmount] = useState("");
  const [pricePerGram, setPricePerGram] = useState(5800); // mock price in ₹

  const handleBuy = () => {
    const rupees = parseFloat(amount);
    if (!rupees || rupees <= 0) return;
    const grams = rupees / pricePerGram;
    setBalance((prev) => parseFloat((prev + grams).toFixed(4)));
    setAmount("");
  };

  const handleSell = () => {
    const rupees = parseFloat(amount);
    if (!rupees || rupees <= 0) return;
    const grams = rupees / pricePerGram;
    if (grams > balance) {
      alert("Insufficient gold balance.");
      return;
    }
    setBalance((prev) => parseFloat((prev - grams).toFixed(4)));
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6">Digital Gold</h1>

      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md space-y-4">
        <div className="text-lg text-gray-700 text-center">
          Current Price: <strong>₹{pricePerGram} / gram</strong>
        </div>

        <div className="text-center text-xl text-yellow-700 font-semibold">
          Gold Balance: {balance} g
        </div>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter amount in ₹"
        />

        <div className="flex space-x-4">
          <button
            onClick={handleBuy}
            className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Buy Gold
          </button>
          <button
            onClick={handleSell}
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sell Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalGold;
