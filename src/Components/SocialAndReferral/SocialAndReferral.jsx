import React from "react";
import { useNavigate } from "react-router-dom";
import raw from "../Bill/raw"; 

const SocialAndReferral = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-center text-red-600">Social And Referral</h1>
      </header>

      {/* Display Financial Services */}
      <main className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {raw.SocialAndReferral.map((SocialAndReferral, index) => (
            <div
              key={index}
              onClick={() => navigate(SocialAndReferral.path)}
              className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={SocialAndReferral.icon}
                alt={SocialAndReferral.title}
                className="mx-auto h-14 mb-2 object-contain"
              />
              <p className="font-semibold text-sm sm:text-base">{SocialAndReferral.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SocialAndReferral;
