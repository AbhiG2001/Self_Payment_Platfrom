import React, { useState } from "react";
import BlurText from "../Animations/BlurText";
import FS from "./FS";

const handleAnimationComplete = () => {
  console.log("EMI animation done!");
};

const EMIPayments = () => {
  const [loanAccount, setLoanAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [error,setError]=useState("")

  const handleAccountChange = (e) => {
    const value = e.target.value.replace(/\s/g, ""); 
    setLoanAccount(value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (Number(value) >= 0) {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loanAccount || !amount) {
      setMessage("Please fill in both Loan Account Number and Amount.");
      setError(true)
    } else if (loanAccount.length < 8) {
      setMessage("Loan Account Number must be at least 8 characters.");
      setError(true)
    } else if (Number(amount) <= 0) {
      setMessage("Amount must be a positive number.");
      setError(true)
    } else {
      setMessage(`₹${amount} paid successfully for Loan A/C ${loanAccount}.`);
      setLoanAccount("");
      setAmount("");
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
          text="EMI Payments"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mt-2 font-mono text-transparent bg-clip-text animate-gradient"
        />
      </div>

      <div className="bg-white w-full rounded p-3 flex flex-col gap-px">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Loan Account Number
            </label>
            <input
              type="text"
              value={loanAccount}
              onChange={handleAccountChange}
              placeholder="Enter your Loan A/C number"
              className="bg-white border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount to pay"
              className="bg-white border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Pay EMI
          </button>
        </form>

        <div className="w-full h-20">
          {message && (
            <p className={`text-center font-semibold pt-4 ${
              error ? "text-red-600":"text-green-600"
            }`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMIPayments;
``