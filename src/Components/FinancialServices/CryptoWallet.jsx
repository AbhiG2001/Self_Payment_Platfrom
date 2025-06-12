import React, { useState } from "react";

const CryptoWallet = () => {
  const [balance, setBalance] = useState(0.0);
  const [walletAddress, setWalletAddress] = useState("0xABCDEF1234567890");

  const handleBuy = () => {
    alert("Redirecting to buy crypto...");
  };

  const handleSell = () => {
    alert("Redirecting to sell crypto...");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Crypto Wallet</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <div>
          <label className="block font-semibold">Wallet Address</label>
          <input
            type="text"
            value={walletAddress}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-semibold">Wallet Balance</label>
          <div className="text-xl text-green-600 font-mono">
            {balance.toFixed(4)} BTC
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleBuy}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Buy
          </button>
          <button
            onClick={handleSell}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoWallet;
