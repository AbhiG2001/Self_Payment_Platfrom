import React from "react";
import BlurText from "../Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const offersList = [
  {
    title: "10% Cashback on Bill Payments",
    desc: "Get 10% cashback when you pay your electricity or gas bill using UPI.",
  },
  {
    title: "Mobile Recharge Offer",
    desc: "Flat ₹20 cashback on your first mobile recharge this month.",
  },
  {
    title: "Scan & Win",
    desc: "Scan and pay at local stores to win scratch cards up to ₹100.",
  },
  {
    title: "Refer & Earn",
    desc: "Invite your friends and earn ₹50 for each successful referral.",
  },
  {
    title: "Weekend Super Cashback",
    desc: "Get 15% cashback on transactions above ₹500 made during weekends.",
  },
  {
    title: "New User Offer",
    desc: "First-time users get ₹100 cashback on their first transaction above ₹300.",
  },
  {
  title: "Festive Bonus Deal",
  desc: "Celebrate the festive season with ₹75 cashback on payments above ₹750.",
}
];


const Offers = () => {             
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">Latest Offers</h2> */}
         <BlurText
        text="Latest Offers"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
        {offersList.map((offer, index) => (
          <div
            
            key={index}
            className="bg-white p-4 rounded shadow mb-4 hover:shadow-md transition"
          >
            <h3 style={{fontFamily: 'Montserrat, sans-serif'}}            
 className="text-lg font-semibold text-gray-800">{offer.title}</h3>
            <p style={{fontFamily: 'Montserrat, sans-serif'}} className="text-gray-600">{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
