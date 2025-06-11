import React, { useState } from 'react';

const CreditCardBill = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Paid ₹${amount} for Credit Card ending with ${cardNumber.slice(-4)}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pay Credit Card Bill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="border p-2 w-full" required />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Pay Now</button>
      </form>
    </div>
  );
};

export default CreditCardBill;
