import React, { useState } from "react";

const GroceryOrders = () => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (!item.trim()) return;
    setCart([...cart, item]);
    setItem("");
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Grocery Orders</h1>
      <div className="bg-white p-6 rounded shadow w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Add Grocery Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button onClick={addItem} className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-800">
          Add to Cart
        </button>
        <div className="mt-4">
          <h2 className="font-semibold text-gray-700">Your Cart:</h2>
          <ul className="list-disc pl-5">
            {cart.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GroceryOrders;
