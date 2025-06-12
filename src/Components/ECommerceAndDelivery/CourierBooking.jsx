import React, { useState } from "react";

const CourierBooking = () => {
  const [form, setForm] = useState({ sender: "", receiver: "", weight: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Courier booked successfully!\nFrom: ${form.sender}\nTo: ${form.receiver}`);
    setForm({ sender: "", receiver: "", weight: "" });
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Courier Booking</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md w-full space-y-4">
        <input
          type="text"
          placeholder="Sender Address"
          value={form.sender}
          onChange={(e) => setForm({ ...form, sender: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Receiver Address"
          value={form.receiver}
          onChange={(e) => setForm({ ...form, receiver: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={form.weight}
          onChange={(e) => setForm({ ...form, weight: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800">Book Courier</button>
      </form>
    </div>
  );
};

export default CourierBooking;
