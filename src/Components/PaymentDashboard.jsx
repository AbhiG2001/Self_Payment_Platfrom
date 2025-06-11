import React from "react";
import SplitText from "../Components/SplitText";
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import sendmoney from "../assets/sendmoney.png";
import qr from "../assets/qr.png";
import recharge from "../assets/recharge.jpg";
import offers from "../assets/offers.png";
import history from "../assets/history.png";
import profile from "../assets/Profile.png";
import support from "../assets/support.png";
import wallet from "../assets/wallet.png";
import bills from "../assets/Bill.png";
import Rewards from "../assets/rewards.png";
import Notifications from "../assets/Notifications.png";
import Signup from "../assets/Signup.jpg";
import Dashboard from "../assets/Dashboard.png";
import Login from "../assets/Login.png";
import SplitBill from "../assets/SplitBill.png";
import ElectricityBill from "../assets/ElectricityBill.png";
import BTT from "../assets/BTtikit.jpg"
import MovieTickets from "../assets/moviesTickets.jpg";
import donate from "../assets/donates.jpg"
import refer from "../assets/refer.jpg"
import accountSetting from "../assets/AccountSetting.png"
import logout from "../assets/logout.jpg"

import creditCard from "../assets/creditCard.jpg"
import waterBill from "../assets/waterBill.png"
import gasBill from "../assets/gasBill.png"
import insurance from "../assets/insurance.png"
import fastag from "../assets/fastag.jpg"
import emi from "../assets/emi.png"
import loan from "../assets/loan.png"
import flight from "../assets/flight.jpg"
import hotel from "../assets/hotel.png"
import event from "../assets/event.png"
import giftCard from "../assets/event.png"
import subscription from "../assets/subscription.jpg"
import addBank from "../assets/addBank.jpg"
import kyc from "../assets/kyc.png"
import tax from "../assets/tax.png"
import upiLink from "../assets/upiLink.png"
import topup from "../assets/topup.jpg"
import location from "../assets/location.png"
import referHistory from "../assets/referHistory.jpg"
import limit from "../assets/limit.png"


const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
const PaymentDashboard = () => {
  const Navigate = useNavigate();

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
    { title: "Login", icon: Login, path: "/login" },
    { title: "Signup", icon: Signup, path: "/signup" },
    { title: "Dashboard", icon: Dashboard, path: "/dashboard" },
    { title: "Notifications", icon: Notifications, path: "/notifications" },
    { title: "SplitBill", icon: SplitBill, path: "/SplitBill" },
    { title: "Electricity Bill", icon: ElectricityBill, path: "/electricity" },
    { title: "Bus/Train Tickets", icon: BTT, path: "/travel-booking" },
    { title: "Movie Tickets", icon: MovieTickets, path: "/movies" },
    { title: "Donate", icon: donate, path: "/donate" },
    { title: "Refer & Earn", icon: refer, path: "/refer" },
    { title: "Account Settings", icon: accountSetting, path: "/settings" },
    { title: "Logout", icon: logout, path: "/logout" },

    { title: "Credit Card Bill", icon: creditCard, path: "/credit-card-bill" },
{ title: "Water Bill", icon: waterBill, path: "/water-bill" },
{ title: "Gas Bill", icon: gasBill, path: "/gas-bill" },
{ title: "Insurance", icon: insurance, path: "/insurance" },
{ title: "Fastag Recharge", icon: fastag, path: "/fastag" },
{ title: "EMI Payments", icon: emi, path: "/emi-payment" },
{ title: "Loan Repayment", icon: loan, path: "/loan-repayment" },
{ title: "Flight Booking", icon: flight, path: "/flight-booking" },
{ title: "Hotel Booking", icon: hotel, path: "/hotel-booking" },
{ title: "Event Booking", icon: event, path: "/event-booking" },
{ title: "Gift Cards", icon: giftCard, path: "/gift-cards" },
{ title: "Subscription", icon: subscription, path: "/subscriptions" },
{ title: "Add Bank Account", icon: addBank, path: "/add-bank" },
{ title: "KYC Verification", icon: kyc, path: "/kyc-verification" },
{ title: "Tax Payments", icon: tax, path: "/tax-payment" },
{ title: "UPI Linked Accounts", icon: upiLink, path: "/upi-accounts" },
{ title: "Wallet Top-up", icon: topup, path: "/wallet-topup" },
{ title: "Nearby Offers", icon: location, path: "/nearby-offers" },
{ title: "Refer History", icon: referHistory, path: "/refer-history" },
{ title: "Account Limits", icon: limit, path: "/account-limits" },
];

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
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <button
          onClick={handleLogin}
          className="text-xl bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
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
