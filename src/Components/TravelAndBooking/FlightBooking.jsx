import React, { useState } from "react";

const FlightBooking = () => {
  const [flights] = useState([
    { from: "Mumbai", to: "Delhi", date: "2025-07-18", fare: 3200 },
    { from: "Bangalore", to: "Kolkata", date: "2025-07-21", fare: 4100 },
  ]);

  const handleBook = (route) => {
    alert(`Flight booked from ${route.from} to ${route.to}`);
  };

  return (
    <div className="min-h-screen p-6 bg-blue-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Flight Booking</h1>
      <div className="w-full max-w-lg space-y-4">
        {flights.map((flight, i) => (
          <div key={i} className="bg-white shadow p-4 rounded-xl flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">{flight.from} → {flight.to}</h2>
              <p className="text-gray-600">{flight.date} | ₹{flight.fare}</p>
            </div>
            <button
              onClick={() => handleBook(flight)}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-800"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightBooking;
