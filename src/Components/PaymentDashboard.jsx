import React from "react";
import SplitText from "../Components/SplitText";

import { useNavigate } from "react-router-dom";
import sendmoney from "../assets/sendmoney.png";
import qr from "../assets/qr.png";
import recharge from "../assets/recharge.jpg";
import offers from "../assets/offers.png";
import history from "../assets/history.png";
import profile from "../assets/Profile.png";
import support from "../assets/support.png";
import wallet from "../assets/wallet.png";
import bills from "../assets/Bill.png"
import Rewards  from "../assets/rewards.png";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
const PaymentDashboard = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Send Money", icon: sendmoney, path: "/send-money" },
    { title: "Scan & Pay", icon: qr, path: "/scan-pay" },
    { title: "Mobile Recharge", icon: recharge, path: "/recharge" },
    { title: "Offers", icon: offers, path: "/offers" },
    { title: "Transaction History", icon: history, path: "/transactions" },
    { title: "My Profile", icon: profile, path: "/profile" },
    { title: "Support", icon: support, path: "/support" },
     { title: "My Wallet", icon: wallet, path: "/wallet" },
    { title: "Bill Payments", icon: bills, path: "/bills" },
    { title: "Rewards", icon: Rewards, path: "/rewards" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 rounded-lg flex justify-between items-center">
        {/* <h1 className=" p-2 text-3xl  font-bold text-blue-600">
          Pay<span className=" text-3xl text-red-600">Now</span>
        </h1> */}
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
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <button className="text-xl bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          Login
        </button>
      </header>

      <main className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
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
      </main>
    </div>
  );
};

export default PaymentDashboard;
