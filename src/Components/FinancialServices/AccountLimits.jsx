import React, { useState } from "react";

const AccountLimits = () => {
  const [limit, setLimit] = useState(50000);
  const [requested, setRequested] = useState(false);

  const handleRequestIncrease = () => {
    setRequested(true);
    setTimeout(() => setRequested(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Account Limits</h1>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <p className="text-gray-700 text-lg">
          Your current transaction limit: <span className="text-green-600 font-semibold">₹{limit}</span>
        </p>
        <button
          onClick={handleRequestIncrease}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
        >
          Request Increase
        </button>
        {requested && (
          <p className="text-blue-600 text-center">Request sent successfully!</p>
        )}
      </div>
    </div>
  );
};

export default AccountLimits;
    