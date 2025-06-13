import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDonate = () => {
    const num = parseFloat(amount);

    if (!num || num <= 0) {
      setError("Please enter a valid donation amount.");
      setMessage("");
      return;
    }
    setError("");
    setMessage(`Thank you for donating ₹${num.toFixed(2)}!`);
    setAmount("");
  };
  return (
    <div className="p-6 bg-white shadow-md rounded max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">Donate</h2>
      <div className="h-[80px]">
        <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount (₹)"
        className="w-full mb-3 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
        min="1"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {message && <p className="text-green-600 text-sm mb-2">{message} </p>}
      </div>

      <button
        onClick={handleDonate}
        className="bg-purple-600 hover:bg-purple-700 transition text-white w-full py-2 rounded font-medium"
      >
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
