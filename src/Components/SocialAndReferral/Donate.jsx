import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = () => {
    alert(`Thank you for donating ₹${amount}!`);
    setAmount("");
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Donate</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Donation Amount"
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={handleDonate}
        className="bg-purple-600 text-white w-full py-2 rounded"
      >
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
