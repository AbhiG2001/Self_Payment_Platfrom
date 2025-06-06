import React, { useState } from "react";

const Sendmoney = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!recipient || !amount) {
      setMessage("Please enter both recipient and amount.");
    } else {
      setMessage(`₹${amount} sent to ${recipient} successfully!`);
      // Reset inputs
      setRecipient("");
      setAmount("");
      setNote("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto" >
      <h2 style={{fontFamily:"monospace"}}  className="text-2xl text-blue-600  mb-6 font-bold">Send Money</h2>
      <div>
        <label style={{fontFamily: 'Montserrat, sans-serif'}} className="block text-gray-700 font-medium" htmlFor="">
          Recipient (UPI ID or Phone)
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="e.g.7038526960 or mrabhi@upi"
          className="mt-1 w-full py-2 bg-white border border-gray-300 rounded px-3"
        />
      </div>
      <div>
        <label style={{fontFamily: 'Montserrat, sans-serif'}} className="block text-gray-700 font-medium">Amount (₹)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g 500"
          className="mt-1 w-full border border-gray-300 bg-white rounded px-3 py-2"
        />
      </div>
      <div>
        <label style={{fontFamily: 'Montserrat, sans-serif'}} className="block text-gray-700 font-medium">
          Note (optional)
        </label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g. Rent, Dinner"
          className="mt-1 w-full border bg-white border-gray-300 rounded px-3 py-2"
        />
      </div>
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition mt-4"
      >
        Send Money
      </button>
      {message && (
        <p className="text-green-500 text-xl font-semibold text-center mt-4">
          {message}
        </p>
      )}
    </div>
  );
};

export default Sendmoney;
