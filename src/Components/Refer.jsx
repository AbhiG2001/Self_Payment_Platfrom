import React from "react";

const Refer = () => {
  const referralCode = "PAYNOW123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied!");
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Refer & Earn</h2>
      <p className="mb-2">Share your referral code:</p>
      <div className="mb-4 bg-gray-100 p-2 rounded text-lg font-bold">
        {referralCode}
      </div>
      <button
        onClick={handleCopy}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Copy Code
      </button>
    </div>
  );
};

export default Refer;
