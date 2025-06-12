import React, { useState } from "react";

const games = [
  { id: 1, name: "PUBG Mobile", pricePerCredit: 10 },
  { id: 2, name: "Free Fire", pricePerCredit: 8 },
  { id: 3, name: "Call of Duty Mobile", pricePerCredit: 12 },
  { id: 4, name: "Valorant", pricePerCredit: 15 },
];

const GamingCredits = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [credits, setCredits] = useState(0);
  const [message, setMessage] = useState("");

  const handlePurchase = () => {
    if (!selectedGame || credits <= 0) {
      setMessage("Please select a game and valid credit amount.");
      return;
    }

    const total = credits * selectedGame.pricePerCredit;
    setMessage(`You successfully purchased ${credits} credits for ${selectedGame.name} (₹${total}).`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Buy Gaming Credits</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 mb-6">
        {games.map((game) => (
          <div
            key={game.id}
            className={`p-4 rounded-lg shadow-md cursor-pointer border ${
              selectedGame?.id === game.id ? "border-purple-500 bg-purple-50" : "border-gray-300"
            }`}
            onClick={() => {
              setSelectedGame(game);
              setMessage("");
              setCredits(0);
            }}
          >
            <h2 className="text-lg font-semibold text-gray-800">{game.name}</h2>
            <p className="text-sm text-gray-600">₹{game.pricePerCredit} per credit</p>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="flex flex-col items-center space-y-3">
          <input
            type="number"
            min="1"
            value={credits}
            onChange={(e) => setCredits(Number(e.target.value))}
            placeholder="Enter credits"
            className="border border-gray-300 p-2 rounded text-center w-48"
          />
          <button
            onClick={handlePurchase}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Buy Credits
          </button>
        </div>
      )}

      {message && <div className="mt-6 text-green-600 font-medium text-center">{message}</div>}
    </div>
  );
};

export default GamingCredits;
