import React from "react";
import { useNavigate } from "react-router-dom";
import BlurText from "../Animations/BlurText";
import {
  FaBolt, FaWater, FaGasPump, FaWifi, FaTv, FaMobileAlt, FaCreditCard,
  FaFileInvoiceDollar, FaUniversity, FaCity, FaCar, FaSatelliteDish,
  FaGraduationCap, FaReceipt, FaBuilding
} from "react-icons/fa";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const BillPayments = () => {
  const navigate = useNavigate();

  const bills = [
    { name: "Electricity", icon: <FaBolt /> },
    { name: "Water", icon: <FaWater /> },
    { name: "Gas", icon: <FaGasPump /> },
    { name: "Broadband", icon: <FaWifi /> },
    { name: "DTH", icon: <FaTv /> },
    { name: "Mobile Postpaid", icon: <FaMobileAlt /> },
    { name: "Credit Card", icon: <FaCreditCard /> },
    { name: "Insurance", icon: <FaFileInvoiceDollar /> },
    { name: "Loan EMI", icon: <FaUniversity /> },
    { name: "Property Tax", icon: <FaCity /> },
    { name: "Municipal Services", icon: <FaUniversity /> },
    { name: "Fastag Recharge", icon: <FaCar /> },
    { name: "Cable TV", icon: <FaSatelliteDish /> },
    { name: "Education Fees", icon: <FaGraduationCap /> },
    { name: "Subscription Services", icon: <FaReceipt /> },
    { name: "Housing Society Maintenance", icon: <FaBuilding /> }
  ];

  const handleClick = (billName) => {
    const route = billName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/pay/${route}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <BlurText
        text="Bill Payments"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl mb-8 text-blue-600 font-mono"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bills.map((bill, index) => (
          <div
            key={index}
            onClick={() => handleClick(bill.name)}
            className="bg-white shadow-md hover:shadow-xl p-5 rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="text-3xl text-green-600 mb-3 flex justify-center">
              {bill.icon}
            </div>
            <p className="text-md font-semibold text-gray-800">{bill.name} Bill</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillPayments;
