import React from "react";

const ScanPay = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Scan & Pay</h2>
        <p className="text-gray-700 mb-6">
          Simulate a QR scan by uploading a QR image or entering UPI ID manually.
        </p>
        <input
          type="text"
          placeholder="Enter UPI ID (e.g. abhi@upi)"
          className="w-full border rounded p-2 mb-4"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default ScanPay;
