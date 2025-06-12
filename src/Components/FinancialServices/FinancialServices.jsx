import React from "react";
import { useNavigate } from "react-router-dom";
import raw from "../Bill/raw"; 

const FinancialServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-center text-red-600">Financial Services</h1>
      </header>

      {/* Display Financial Services */}
      <main className="mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {raw.FinancialServices.map((FinancialServices, index) => (
            <div
              key={index}
              onClick={() => navigate(FinancialServices.path)}
              className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={FinancialServices.icon}
                alt={FinancialServices.title}
                className="mx-auto h-14 mb-2 object-contain"
              />
              <p className="font-semibold text-sm sm:text-base">{FinancialServices.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FinancialServices;
