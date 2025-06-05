import React from "react";
import { useNavigate } from "react-router-dom";
import sendmoney from "../assets/sendmoney.png";
import qr from "../assets/qr.png";          
import recharge from "../assets/recharge.jpg";
import offers from "../assets/offers.png";


const PaymentDashboard = () => {
  const navigate= useNavigate();
  const services = [
   { title: "Send Money", icon: sendmoney, path: "/send-money" },
    { title: "Scan & Pay", icon: qr, path: "/scan-pay" },
    { title: "Mobile Recharge", icon: recharge, path: "/recharge" },
    { title: "Offers", icon: offers, path: "/offers" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">PayNow</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          Login
        </button>
      </header>

      <main className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={()=>navigate(service.path)}
            className="bg-white p-4 rounded shadow text-center hover:shadow-lg cursor-pointer transition"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="mx-auto h-10 mb-2"
            />
            <p className="font-semibold">{service.title}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default PaymentDashboard;
