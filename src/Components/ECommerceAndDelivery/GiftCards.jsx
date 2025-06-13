import React, { useState } from "react";

const GiftCards = () => {
  const [cards] = useState([
    { brand: "Amazon", value: 500 },
    { brand: "Flipkart", value: 1000 },
    { brand: "Myntra", value: 750 },
  ]);

  const handleRedeem = (brand) => {
    alert(`Redeeming ${brand} gift card...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Gift Cards</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{card.brand}</h2>
              <p className="text-sm text-gray-600">₹{card.value}</p>
            </div>
            <button
              onClick={() => handleRedeem(card.brand)}
              className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-700"
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCards;
