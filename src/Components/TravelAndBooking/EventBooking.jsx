import React, { useState } from "react";

const EventBooking = () => {
  const [events] = useState([
    { name: "Music Concert", location: "Mumbai", date: "2025-07-15" },
    { name: "Art Exhibition", location: "Delhi", date: "2025-07-20" },
  ]);

  const handleBook = (eventName) => {
    alert(`Booking confirmed for ${eventName}`);
  };

  return (
    <div className="min-h-screen p-6 bg-purple-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Event Booking</h1>
      <div className="w-full max-w-lg space-y-4">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-xl flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p className="text-gray-600">{event.location} | {event.date}</p>
            </div>
            <button
              onClick={() => handleBook(event.name)}
              className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-800"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBooking;
