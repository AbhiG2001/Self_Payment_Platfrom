import React, { useState } from "react";
import SplitText from "./UtilityAndGovernment/SplitText";
import { useNavigate } from "react-router-dom";
import raw from "./Bill/raw"; // Import raw data
import LoginLogo from "../assets/LoginLogo.jpg";
import SplashCursor from "./Animations/SplashCursor";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const PaymentDashboard = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <SplashCursor />
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        <motion.img
          src={Logo}
          alt="Pay Now"
          className="mx-auto w-32 h-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <img
          onClick={handleLogin}
          className="h-[60px] w-[60px]"
          src={LoginLogo}
          alt=""
        />
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
              <p className="font-semibold text-sm sm:text-base">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PaymentDashboard;
