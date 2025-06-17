import React from "react";
import { useNavigate } from "react-router-dom";
import raw from "../Bill/raw"; 
import GradientText from "../Animations/GradientText";


const CoreFeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        {/* <h1 className="text-3xl font-semibold text-center text-red-600">Core  Features</h1> */}
        <GradientText
                  colors={["#40ffaa", " #4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class text-2xl sm:text-3xl"
                >
                  Core Features
                </GradientText>
      </header>

      {/* Display Financial Services */}
      <main className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {raw.CoreFeatures.map((CoreFeatures, index) => (
            <div
              key={index}
              onClick={() => navigate(CoreFeatures.path)}
              className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={CoreFeatures.icon}
                alt={CoreFeatures.title}
                className="mx-auto h-14 mb-2 object-contain"
              />
              <p className="font-semibold text-sm sm:text-base">{CoreFeatures.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoreFeatures;
