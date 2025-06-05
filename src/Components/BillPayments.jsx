import React from "react";

const BillPayments = () => {
  const bills = ["Electricity", "Water", "Gas", "Broadband", "DTH"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Bill Payments</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {bills.map((bill, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded text-center hover:shadow-lg cursor-pointer"
          >
            <p className="text-md font-semibold">{bill} Bill</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillPayments;
