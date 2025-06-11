import React, { useState } from "react";

const MovieTickets = () => {
  const [movie, setMovie] = useState("");
  const [seats, setSeats] = useState(1);

  const handleBook = () => {
    alert(`Booked ${seats} seat(s) for "${movie}"`);
    setMovie("");
    setSeats(1);
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Book Movie Tickets</h2>
      <input
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Movie Name"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        min="1"
      />
      <button
        onClick={handleBook}
        className="bg-red-600 text-white w-full py-2 rounded"
      >
        Book Tickets
      </button>
    </div>
  );
};

export default MovieTickets;
