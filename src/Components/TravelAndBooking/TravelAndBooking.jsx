import React from "react";
import { useNavigate } from "react-router-dom";
import raw from "../Bill/raw";
import GradientText from "../Animations/GradientText";

const TravelAndBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        {/* <h1 className="text-3xl font-semibold text-center text-red-600">Travel And Booking</h1> */}
        <GradientText
          colors={["#40ffaa", " #4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-2xl sm:text-3xl"
        >
          Travel And Booking
        </GradientText>
      </header>

      {/* Display Financial Services */}
      <main className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {raw.TravelAndBooking.map((TravelAndBooking, index) => (
            <div
              key={index}
              onClick={() => navigate(TravelAndBooking.path)}
              className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={TravelAndBooking.icon}
                alt={TravelAndBooking.title}
                className="mx-auto h-14 mb-2 object-contain"
              />
              <p className="font-semibold text-sm sm:text-base">
                {TravelAndBooking.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TravelAndBooking;
