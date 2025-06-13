import React, { useState } from "react";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([
    { name: "Netflix", active: true },
    { name: "Spotify", active: true },
    { name: "Hotstar", active: false },
  ]);

  const toggleSubscription = (index) => {
    const updated = [...subscriptions];
    updated[index].active = !updated[index].active;
    setSubscriptions(updated);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Manage Subscriptions</h1>
      <div className="w-full max-w-md space-y-4">
        {subscriptions.map((sub, i) => (
          <div
            key={i}
            className="bg-white p-4 shadow rounded-xl flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{sub.name}</h2>
              <p className="text-sm text-gray-500">
                Status:{" "}
                <span className={sub.active ? "text-green-600" : "text-red-500"}>
                  {sub.active ? "Active" : "Inactive"}
                </span>
              </p>
            </div>
            <button
              onClick={() => toggleSubscription(i)}
              className={`px-3 py-1 rounded text-white ${
                sub.active ? "bg-red-600 hover:bg-red-800" : "bg-green-600 hover:bg-green-800"
              }`}
            >
              {sub.active ? "Cancel" : "Activate"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
