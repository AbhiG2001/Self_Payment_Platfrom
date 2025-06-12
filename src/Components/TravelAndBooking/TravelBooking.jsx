import React, { useState } from "react";

const TravelBooking = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleBook = () => {
    alert(`Booking confirmed from ${from} to ${to}`);
    setFrom("");
    setTo("");
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Book Bus/Train Tickets</h2>
      <input
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="From"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To"
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={handleBook}
        className="bg-green-600 text-white w-full py-2 rounded"
      >
        Book Now
      </button>
    </div>
  );
};

export default TravelBooking;
