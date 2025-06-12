import React, { useState } from "react";

const KYCVerification = () => {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");

  const handleSubmit = () => {
    if (name && aadhar.length === 12) {
      alert("KYC submitted for verification.");
      setName(""); setAadhar("");
    } else {
      alert("Please enter valid details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">KYC Verification</h1>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Aadhaar Number"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          maxLength={12}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-800"
        >
          Submit KYC
        </button>
      </div>
    </div>
  );
};

export default KYCVerification;
