import React from "react";
import SplitText from "./UtilityAndGovernment/SplitText";
import { useNavigate } from "react-router-dom";
import raw from "./Bill/raw"; // Import raw data
import LoginLogo from "../assets/LoginLogo.jpg"

const PaymentDashboard = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        <SplitText
          text="PayNow"
          className="text-3xl font-semibold text-center text-red-600"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1} 
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => console.log("Animation Complete")}
        />
        {/* <button
          onClick={handleLogin}
          className="text-xl bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Login
        </button> */}
        <img onClick={handleLogin} className="h-[60px] w-[60px]" src={LoginLogo} alt="" />
      </header>

      {/* Display only services data */}
      <main className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {raw.services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)}
              className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mx-auto h-14 mb-2 object-contain"
              />
              <p className="font-semibold text-sm sm:text-base">{service.title}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaymentDashboard;
