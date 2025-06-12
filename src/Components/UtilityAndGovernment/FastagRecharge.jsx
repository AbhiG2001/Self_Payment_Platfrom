import React, { useState } from "react";

const FastagRecharge = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleRecharge = (e) => {
    e.preventDefault();

    if (!vehicleNumber || !amount) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(`Recharge of ₹${amount} for vehicle ${vehicleNumber} is successful!`);
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-yellow-700 text-center mb-4">
          FASTag Recharge
        </h2>
        <form onSubmit={handleRecharge} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Vehicle Number (e.g. MH12AB1234)"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Recharge Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Recharge Now
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-green-600 font-medium">{message}</div>
        )}
      </div>
    </div>
  );
};

export default FastagRecharge;
