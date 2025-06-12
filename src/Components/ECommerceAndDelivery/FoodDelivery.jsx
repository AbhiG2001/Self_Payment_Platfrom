import React, { useState } from "react";

const FoodDelivery = () => {
  const [order, setOrder] = useState({ item: "", address: "" });

  const handleOrder = () => {
    if (!order.item || !order.address) return alert("Please fill in all fields.");
    alert(`Order placed for ${order.item} to ${order.address}`);
    setOrder({ item: "", address: "" });
  };

  return (
    <div className="p-6 bg-red-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-red-700">Food Delivery</h1>
      <div className="bg-white p-6 rounded shadow w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Food Item"
          value={order.item}
          onChange={(e) => setOrder({ ...order, item: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Delivery Address"
          value={order.address}
          onChange={(e) => setOrder({ ...order, address: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button onClick={handleOrder} className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-800">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default FoodDelivery;
