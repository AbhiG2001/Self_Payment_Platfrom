import React, { useState } from 'react';
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const CreditCardBill = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleCardChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 16); // Digits only, max 16
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
      setSuccessMsg('');
      alert("Please enter a valid card number and amount.");
      return;
    }

    setSuccessMsg(`₹${amount} paid successfully for Credit Card ending with ${cardNumber.slice(-4)}.`);
    setCardNumber('');
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      <BlurText
        text="Pay Credit Card Bill"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />

      <form onSubmit={handleSubmit} className="space-y-5  rounded-2xl">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Card Number</label>
          <input
            type="text"
            placeholder="Enter 12–16 digit card number"
            value={cardNumber}
            onChange={handleCardChange}
            className="bg-white border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Amount (₹)</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            className="bg-white border p-2 w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 w-full text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Pay Now
        </button>
      </form>

      {successMsg && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
          {successMsg}
        </div>
      )}
    </div>
  );
};

export default CreditCardBill;
