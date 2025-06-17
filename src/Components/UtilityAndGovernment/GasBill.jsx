import React, { useState } from "react";

const GasBill = () => {
  const [provider, setProvider] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    if (!provider || !customerNumber || !amount) {
      setMessage("Please fill out all fields.");
      return;
    }
    // Simulate payment success
    setMessage(`Payment of ₹${amount} to ${provider} was successful!`);
    setProvider("");
    setCustomerNumber("");
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">
        Gas Bill Payment
      </h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Gas Provider</option>
          <option value="Indane">Indane</option>
          <option value="HP Gas">HP Gas</option>
          <option value="Bharat Gas">Bharat Gas</option>
        </select>
        <input
          type="text"
          placeholder="Customer Number"
          value={customerNumber}
          onChange={(e) => setCustomerNumber(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Pay Bill
        </button>
        {message && <p className="text-center text-sm text-blue-600 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default GasBill;
