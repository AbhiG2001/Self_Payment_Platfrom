import React from "react";
import { useNavigate } from "react-router-dom";
import raw from "../Bill/raw";
import GradientText from "../Animations/GradientText";

const LifestyleAndDigital = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        {/* <h1 className="text-3xl font-semibold text-center text-red-600">Lifestyle And Digital</h1> */}
        <GradientText
          colors={["#40ffaa", " #4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-2xl sm:text-3xl"
        >
          Lifestyle And Digital
        </GradientText>
      </header>

      {/* Display Financial Services */}
      <main className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {raw.LifestyleAndDigital.map((LifestyleAndDigital, index) => (
            <div
              key={index}
              onClick={() => navigate(LifestyleAndDigital.path)}
              className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={LifestyleAndDigital.icon}
                alt={LifestyleAndDigital.title}
                className="mx-auto h-14 mb-2 object-contain"
              />
              <p className="font-semibold text-sm sm:text-base">
                {LifestyleAndDigital.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LifestyleAndDigital;
