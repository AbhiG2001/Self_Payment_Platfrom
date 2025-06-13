import React, { useState } from "react";

const HotelBooking = () => {
  const [hotels] = useState([
    { name: "Taj Palace", location: "Delhi", price: 4500 },
    { name: "Leela", location: "Mumbai", price: 5200 },
  ]);

  const handleBook = (hotel) => {
    alert(`Hotel room booked at ${hotel.name}`);
  };

  return (
    <div className="min-h-screen p-6 bg-emerald-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Hotel Booking</h1>
      <div className="w-full max-w-lg space-y-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-xl flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location} | ₹{hotel.price}/night</p>
            </div>
            <button
              onClick={() => handleBook(hotel)}
              className="bg-emerald-600 text-white px-4 py-1 rounded hover:bg-emerald-800"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelBooking;
