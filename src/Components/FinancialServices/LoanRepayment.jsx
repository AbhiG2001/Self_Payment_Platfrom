import React, { useState } from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Loan Repayment animation complete");
};

const LoanRepayment = () => {
  const [loanAccount, setLoanAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loanAccount || !amount) {
      setMessage("Please enter both loan account and amount.");
    } else {
      setMessage(`₹${amount} repaid successfully for Loan A/C ${loanAccount}.`);
      setLoanAccount("");
      setAmount("");
      setNote("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      <BlurText
        text="Loan Repayment"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block text-gray-700 font-medium mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Loan Account Number
          </label>
          <input
            type="text"
            value={loanAccount}
            onChange={(e) => setLoanAccount(e.target.value)}
            placeholder="Enter your Loan A/C number"
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Amount (₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to repay"
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Note (optional)
          </label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Monthly installment"
            className="w-full py-2 px-3 border border-gray-300 bg-white rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Repay Loan
        </button>
      </form>

      {message && (
        <p className="text-green-500 text-xl font-semibold text-center mt-4">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoanRepayment;
