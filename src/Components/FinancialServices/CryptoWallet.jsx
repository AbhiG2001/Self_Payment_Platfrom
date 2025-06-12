import React, { useState } from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Crypto Wallet animation completed!");
};

const CryptoWallet = () => {
  const [balance, setBalance] = useState(0.0);
  const [walletAddress] = useState("0xABCDEF1234567890");

  const handleBuy = () => {
    alert("Redirecting to buy crypto...");
  };

  const handleSell = () => {
    alert("Redirecting to sell crypto...");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <BlurText
        text="Crypto Wallet"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl mb-6 text-purple-700 font-bold"
      />

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md space-y-5">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Wallet Address</label>
          <input
            type="text"
            value={walletAddress}
            readOnly
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-sm font-mono"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Wallet Balance</label>
          <div className="text-2xl font-mono text-green-600">{balance.toFixed(4)} BTC</div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBuy}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Buy
          </button>
          <button
            onClick={handleSell}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoWallet;
