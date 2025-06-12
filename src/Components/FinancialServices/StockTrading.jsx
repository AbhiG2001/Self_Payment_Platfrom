import React, { useState } from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Stock Trading animation completed!");
};

const StockTrading = () => {
  const [portfolio, setPortfolio] = useState([
    { symbol: "AAPL", quantity: 10, price: 175 },
    { symbol: "TSLA", quantity: 5, price: 250 },
  ]);
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleBuy = () => {
    if (!searchSymbol || !searchPrice || parseFloat(searchPrice) <= 0) {
      setMessage("Please enter a valid symbol and price.");
      return;
    }

    const newStock = {
      symbol: searchSymbol.toUpperCase(),
      quantity: 1,
      price: parseFloat(searchPrice),
    };

    setPortfolio([...portfolio, newStock]);
    setMessage(`Bought 1 share of ${newStock.symbol} at $${newStock.price}`);
    setSearchSymbol("");
    setSearchPrice("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <BlurText
        text="Stock Trading"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl mb-6 text-blue-700 font-bold"
      />

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Portfolio</h2>
          {portfolio.length > 0 ? (
            <ul className="space-y-2">
              {portfolio.map((stock, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border p-2 rounded bg-gray-100"
                >
                  <span className="font-mono text-blue-700">{stock.symbol}</span>
                  <span className="text-gray-600">{stock.quantity} shares</span>
                  <span className="text-green-600 font-semibold">${stock.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No stocks in your portfolio.</p>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Buy Stock</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={searchSymbol}
              onChange={(e) => setSearchSymbol(e.target.value)}
              placeholder="Stock Symbol (e.g., GOOGL)"
              className="border p-2 rounded bg-white"
            />
            <input
              type="number"
              value={searchPrice}
              onChange={(e) => setSearchPrice(e.target.value)}
              placeholder="Price"
              className="border p-2 rounded bg-white"
            />
          </div>
          <button
            onClick={handleBuy}
            className="mt-4 bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
          {message && (
            <p className="mt-3 text-green-600 font-semibold text-center">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockTrading;
