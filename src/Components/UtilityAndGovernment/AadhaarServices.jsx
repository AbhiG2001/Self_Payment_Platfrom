import React, { useState } from "react";

const AadhaarServices = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!aadhaarNumber || !selectedService) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(`Your request for "${selectedService}" has been submitted successfully.`);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">
          Aadhaar Services
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            maxLength={12}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Service</option>
            <option value="Download Aadhaar">Download Aadhaar</option>
            <option value="Update Address">Update Address</option>
            <option value="Check Status">Check Aadhaar Status</option>
            <option value="Order PVC Aadhaar">Order PVC Aadhaar</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Submit Request
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-green-600 font-medium">{message}</div>
        )}
      </div>
    </div>
  );
};

export default AadhaarServices;
