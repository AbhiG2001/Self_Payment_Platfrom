import React from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const BillPayments = () => {
  const bills = [
    "Electricity",
    "Water",
    "Gas",
    "Broadband",
    "DTH",
    "Mobile Postpaid",
    "Credit Card",
    "Insurance",
    "Loan EMI",
    "Property Tax",
    "Municipal Services",
    "Fastag Recharge",
    "Cable TV",
    "Education Fees",
    "Subscription Services",
    "Housing Society Maintenance"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* <h2
        style={{ fontFamily: "monospace" }}
        className="text-2xl font-bold text-blue-600 mb-4"
      >
        Bill Payments
      </h2> */}
      <BlurText
        text="Bill Payments"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {bills.map((bill, index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded text-center hover:shadow-lg cursor-pointer text-green-700 text-xl"
          >
            <p className="text-md font-semibold">{bill} Bill</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillPayments;
