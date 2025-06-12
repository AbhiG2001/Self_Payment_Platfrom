import React, { useState } from "react";

const ottPlatforms = [
  {
    id: 1,
    name: "Netflix",
    plans: [
      { type: "Basic", price: 199 },
      { type: "Standard", price: 499 },
      { type: "Premium", price: 649 },
    ],
  },
  {
    id: 2,
    name: "Amazon Prime Video",
    plans: [
      { type: "Monthly", price: 179 },
      { type: "Yearly", price: 1499 },
    ],
  },
  {
    id: 3,
    name: "Disney+ Hotstar",
    plans: [
      { type: "Mobile", price: 149 },
      { type: "Super", price: 899 },
      { type: "Premium", price: 1499 },
    ],
  },
  {
    id: 4,
    name: "Sony LIV",
    plans: [
      { type: "Monthly", price: 299 },
      { type: "Annual", price: 999 },
    ],
  },
];

const OTTSubscriptions = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [message, setMessage] = useState("");

  const handlePurchase = () => {
    if (!selectedPlatform || !selectedPlan) {
      setMessage("Please select both a platform and a plan.");
      return;
    }

    setMessage(
      `You have successfully subscribed to ${selectedPlatform.name} (${selectedPlan.type} Plan) for ₹${selectedPlan.price}.`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">OTT Subscriptions</h1>

      <div className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        {ottPlatforms.map((platform) => (
          <div
            key={platform.id}
            onClick={() => {
              setSelectedPlatform(platform);
              setSelectedPlan(null);
              setMessage("");
            }}
            className={`p-4 rounded-lg shadow-md cursor-pointer border transition ${
              selectedPlatform?.id === platform.id
                ? "border-orange-500 bg-orange-50"
                : "border-gray-300"
            }`}
          >
            <h2 className="text-xl font-semibold">{platform.name}</h2>
          </div>
        ))}
      </div>

      {selectedPlatform && (
        <div className="flex flex-col items-center space-y-4 w-full max-w-md">
          <h2 className="text-xl font-medium text-orange-700">
            Select a plan for {selectedPlatform.name}
          </h2>
          {selectedPlatform.plans.map((plan, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedPlan(plan);
                setMessage("");
              }}
              className={`w-full p-3 rounded-lg shadow-md cursor-pointer text-center border ${
                selectedPlan?.type === plan.type
                  ? "border-orange-500 bg-orange-100"
                  : "border-gray-200"
              }`}
            >
              <span className="font-semibold">{plan.type}</span> - ₹{plan.price}
            </div>
          ))}
          <button
            onClick={handlePurchase}
            className="mt-2 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Subscribe
          </button>
        </div>
      )}

      {message && <p className="mt-6 text-green-600 font-medium text-center">{message}</p>}
    </div>
  );
};

export default OTTSubscriptions;
