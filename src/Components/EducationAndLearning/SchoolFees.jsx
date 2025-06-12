import React, { useState } from "react";

const SchoolFees = () => {
  const [school, setSchool] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (!school || !studentId || !studentName || !amount) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(
      `Successfully paid ₹${amount} fees for ${studentName} (ID: ${studentId}) at ${school}.`
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Pay School Fees
        </h2>
        <form onSubmit={handlePayment} className="space-y-4">
          <select
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select School</option>
            <option value="Green Valley Public School">Green Valley Public School</option>
            <option value="Sunshine International School">Sunshine International School</option>
            <option value="Oakridge High School">Oakridge High School</option>
          </select>

          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Pay Fees
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-green-600 font-medium">{message}</div>
        )}
      </div>
    </div>
  );
};

export default SchoolFees;
