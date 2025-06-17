import React, { useState } from "react";

const Insurance = () => {
  const [provider, setProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (!provider || !policyNumber || !insuranceType || !amount) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setMessage(`Payment of ₹${amount} for ${insuranceType} insurance was successful!`);
    setProvider("");
    setPolicyNumber("");
    setInsuranceType("");
    setAmount("");
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-800">
        Insurance Services
      </h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Insurance Provider</option>
          <option value="LIC">LIC</option>
          <option value="HDFC Life">HDFC Life</option>
          <option value="ICICI Lombard">ICICI Lombard</option>
        </select>

        <input
          type="text"
          placeholder="Policy Number"
          value={policyNumber}
          onChange={(e) => setPolicyNumber(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          value={insuranceType}
          onChange={(e) => setInsuranceType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Insurance Type</option>
          <option value="Life">Life</option>
          <option value="Health">Health</option>
          <option value="Vehicle">Vehicle</option>
        </select>

        <input
          type="number"
          placeholder="Premium Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Pay Premium
        </button>

        {message && <p className="text-center text-green-600 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default Insurance;
