import React, { useState } from "react";

const StockTrading = () => {
  const [portfolio, setPortfolio] = useState([
    { symbol: "AAPL", quantity: 10, price: 175 },
    { symbol: "TSLA", quantity: 5, price: 250 },
  ]);
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchPrice, setSearchPrice] = useState(null);

  const handleBuy = () => {
    if (!searchSymbol || !searchPrice) return;
    setPortfolio([...portfolio, { symbol: searchSymbol.toUpperCase(), quantity: 1, price: searchPrice }]);
    setSearchSymbol("");
    setSearchPrice(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Stock Trading</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Your Portfolio</h2>
          {portfolio.length > 0 ? (
            <ul className="space-y-2">
              {portfolio.map((stock, index) => (
                <li key={index} className="flex justify-between items-center border p-2 rounded">
                  <span className="font-mono">{stock.symbol}</span>
                  <span className="text-gray-600">{stock.quantity} shares</span>
                  <span className="text-green-600 font-semibold">${stock.price}</span>
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
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={searchPrice || ""}
              onChange={(e) => setSearchPrice(parseFloat(e.target.value))}
              placeholder="Price"
              className="border p-2 rounded"
            />
          </div>
          <button
            onClick={handleBuy}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockTrading;
