import React, { useState } from "react";
import BlurText from "../Animations/BlurText";
import FS from "./FS";
import { SiTrueup } from "react-icons/si";

const handleAnimationComplete = () => {
  console.log("Loan Repayment animation complete");
};

const LoanRepayment = () => {
  const [loanAccount, setLoanAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loanAccount || !amount) {
      setMessage("Please enter both loan account and amount.");
      setError(true)
    }else if(loanAccount.length < 8){
      setMessage("Loan Account Number must be at least 8 characters.");
      setError(true)
    }else if(Number(amount) <= 0){
      setMessage("Amount must be a Positive number.")
      setError(true)
    }
     else {
      setMessage(`₹${amount} repaid successfully for Loan A/C ${loanAccount}.`);
      setLoanAccount("");
      setAmount("");
      setNote("");
      setError(false)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto flex flex-col items-start gap-4">
      <div className="bg-white w-full h-25 p-4 rounded">
        <div className="flex items-center">
        <FS />
      </div>
      <BlurText
        text="Loan Repayment"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
          className="text-2xl mt-2 font-mono text-transparent bg-clip-text animate-gradient"
      />
      </div>

      <div className="bg-white w-full rounded p-3 flex flex-col gap-px">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Loan Account Number
            </label>
            <input
              type="text"
              value={loanAccount}
              onChange={(e) => setLoanAccount(e.target.value)}
              placeholder="Enter your Loan A/C number"
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to repay"
              className="w-full py-2 px-3 border border-gray-300 bg-white rounded"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
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

        <div className="bg-white h-20 w-full">
          {message && (
            <p className={`font-semibold text-center pt-4 ${
              error?"text-red-600":"text-green-600"
              }`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanRepayment;
