import React, { useState } from "react";
import BlurText from "./Animations/BlurText";
import "./Wallet.css"; 
const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Wallet = () => {
  const [balance, setBalance] = useState(6000);
  const [message, setMessage] = useState("");

  const handleAddMoney = () => {
    const input = prompt("Enter amount to add:");
    const amount = parseFloat(input);
    if (!isNaN(amount) && amount > 0) {
      setBalance(prev => prev + amount);
      setMessage(`₹${amount} added successfully.`);
    } else {
      setMessage("Invalid amount.");
    }
  };

  const handleWithdraw = () => {
    const input = prompt("Enter amount to withdraw:");
    const amount = parseFloat(input);
    if (!isNaN(amount) && amount > 0) {
      if (amount <= balance) {
        setBalance(prev => prev - amount);
        setMessage(`₹${amount} withdrawn successfully.`);
      } else {
        setMessage("Insufficient balance.");
      }
    } else {
      setMessage("Invalid amount.");
    }
  };

  return (
    <div className="wallet-container">
      <BlurText
        text="My Wallet"
        delay={100}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="wallet-heading"
      />
      <div className="wallet-box">
        <div className="wallet-balance">
          Current Balance: <span className="wallet-amount">₹{balance}</span>
        </div>
        <button className="wallet-btn add" onClick={handleAddMoney}>
          Add Money
        </button>
        <button className="wallet-btn withdraw" onClick={handleWithdraw}>
          Withdraw
        </button>
        {message && <p className="wallet-message">{message}</p>}
      </div>
    </div>
  );
};

export default Wallet;
