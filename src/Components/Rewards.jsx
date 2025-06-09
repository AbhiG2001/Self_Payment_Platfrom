import React from "react";
import "./Rewards.css"
import BlurText from "./Animations/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const rewards = [
  {
    id: 1,
    title: "Scratch Card Won",
    amount: "₹10",
    desc: "Earned by paying at a local merchant via QR.",
  },
  {
    id: 2,
    title: "UPI Cashback",
    amount: "₹25",
    desc: "Received on first UPI transaction this week.",
  },
  {
    id: 3,
    title: "Electricity Bill Cashback",
    amount: "₹50",
    desc: "Cashback for paying electricity bill via UPI.",
  },
];

const Rewards = () => {
  return (
    <div className="container">
      {/* <h2 className="heading">My Rewards</h2> */}
      <BlurText
        text="My Rewards"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 text-blue-600 font-mono"
      />
      <div className="list">
        {rewards.map((reward) => (
          <div key={reward.id} className="card">
            <p className="title">{reward.title}</p>
            <p className="desc">{reward.desc}</p>
            <p className="amount">+{reward.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
