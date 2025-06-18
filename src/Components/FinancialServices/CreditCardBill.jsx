import React, { useState } from "react";
import BlurText from "../Animations/BlurText";
import FS from "./FS";
import { text } from "framer-motion/client";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const CreditCardBill = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error,setError] = useState("");
  const [message, setMessage] = useState("");

  const handleCardChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16); // Digits only, max 16
    setCardNumber(value);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (Number(value) >= 0) {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardNumber.length < 12 || amount <= 0) {
      setMessage("Please enter a valid card number and amount.");
      setError(true)
      return;
    } else if (!cardNumber || !amount) {
      setMessage("Please enter both card number and amount");
      setError(true)
    } else {
      setMessage(
        `₹${amount} paid successfully for Credit Card ending with ${cardNumber.slice(
          -4
        )}.`
      );
      setError(false)
    }
    setCardNumber("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto flex flex-col items-start gap-4">
      <div className="bg-white w-full p-4 rounded shadow-sm h-25">
        <div className="flex items-center">
          <FS />
        </div>

        <BlurText
          text="Pay Credit Card Bill"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mt-2 font-mono text-transparent bg-clip-text animate-gradient"
        />
      </div>

      <div className="bg-white w-full rounded p-3 flex flex-col gap-px">
        <form onSubmit={handleSubmit} className="space-y-5  rounded-2xl">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="Enter 12–16 digit card number"
              value={cardNumber}
              onChange={handleCardChange}
              className="bg-white border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
              
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChange}
              className="bg-white border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Pay Now
          </button>
        </form>

       
        <div className="w-full h-20">
          {message && (
            <p className={`text-center font-semibold pt-4 ${
              error ? "text-red-600": "text-green-600"
            }` }>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditCardBill;
