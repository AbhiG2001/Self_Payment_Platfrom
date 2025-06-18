import React, { useState } from "react";
import BlurText from "../Animations/BlurText";
import FS from "./FS";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Sendmoney = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSend = () => {
    const isOnlyDigits = /^\d+$/.test(recipient);

    if (!recipient || !amount) {
      setMessage("Please enter both recipient and amount.");
      setError(true);
    } else if (isOnlyDigits && recipient.length < 10) {
      setMessage("Phone number must be exactly 10 digits.");
      setError(true);
    } else {
      setMessage(`₹${amount} sent to ${recipient} successfully!`);
      setError(false);
      setRecipient("");
      setAmount("");
      setNote("");
    }
  };

  const gradientColors = [
    "#40ffaa",
    "#4079ff",
    "#40ffaa",
    "#4079ff",
    "#40ffaa",
  ];
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColors.join(", ")})`,
    backgroundSize: "300% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto flex flex-col items-start gap-4">
      <div className="bg-white w-full p-4 rounded shadow-sm h-25">
        <div className="flex items-center">
          <FS />
        </div>
        <BlurText
          text="Send Money"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mt-2 font-mono text-transparent bg-clip-text animate-gradient"
          style={gradientStyle}
        />
      </div>

      <div className="bg-white w-full rounded p-4 shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium font-montserrat">
            Recipient (UPI ID or Phone)
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => {
              const input = e.target.value;
              if (/[a-zA-Z@]/.test(input)) {
                setRecipient(input);
              } else if (/^\d{0,10}$/.test(input)) {
                setRecipient(input);
              }
            }}
            placeholder="e.g. 7038526960 or mrabhi@upi"
            className="mt-1 w-full py-2 bg-white border border-gray-300 rounded px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium font-montserrat">
            Amount (₹)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500"
            className="mt-1 w-full border border-gray-300 bg-white rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium font-montserrat">
            Note (optional)
          </label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Rent, Dinner"
            className="mt-1 w-full border bg-white border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition mt-2"
        >
          Send Money
        </button>

        <div className="h-20">
          {message && (
          <p
            className={`text-center font-semibold pt-4  ${
              error ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Sendmoney;
