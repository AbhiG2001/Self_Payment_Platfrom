import React from "react";
import BlurText from "./Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const transactions = [
  { id: 1, type: "Recharge", amount: "₹199", date: "2025-06-04" },
  { id: 2, type: "Scan & Pay", amount: "₹350", date: "2025-06-03" },
  { id: 3, type: "Electricity Bill", amount: "₹620", date: "2025-06-01" },
  { id: 4, type: "Mobile Bill", amount: "₹499", date: "2025-05-30" },
  { id: 5, type: "DTH Recharge", amount: "₹299", date: "2025-05-28" },
  { id: 6, type: "Water Bill", amount: "₹250", date: "2025-05-27" },
  { id: 7, type: "Send Money", amount: "₹1,200", date: "2025-05-25" },
  { id: 8, type: "Receive Money", amount: "₹900", date: "2025-05-23" },
  { id: 9, type: "Rent Payment", amount: "₹8,000", date: "2025-05-22" },
  { id: 10, type: "Grocery Purchase", amount: "₹1,100", date: "2025-05-21" },
  { id: 11, type: "Credit Card Bill", amount: "₹3,200", date: "2025-05-20" },
  { id: 12, type: "Scan & Pay", amount: "₹220", date: "2025-05-19" },
  { id: 13, type: "Fuel Payment", amount: "₹1,000", date: "2025-05-18" },
];

const TransactionHistory = () => (
  <div className="flex items-center justify-center">
    <div className="min-h-screen w-full bg-gray-100 p-6 sm:w-[50%] self-center">
    {/* <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">Transaction History</h2> */}
     <BlurText
        text="Transactions History"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
    <div className="bg-white rounded shadow p-4 space-y-3">
      {transactions.map((txn) => (
        <div
          key={txn.id}
          className="flex justify-between border-b pb-2 last:border-b-0"
        >
          <span style={{fontFamily: 'Montserrat, sans-serif'}} className="text-gray-800  w-[40%]">{txn.type}</span>
          <span className="text-green-600  items-ceter justify-center flex  w-[20%]">{txn.amount}</span>
          <span className="text-sm text-gray-500  w-[40%]  items-c4 justify-end flex ">{txn.date}</span>
        </div>
      ))}
    </div>
  </div>
  </div>
  
);

export default TransactionHistory;
