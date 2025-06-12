import React, { useState } from "react";

const TrafficChallan = () => {
  const [details, setDetails] = useState({
    vehicleNumber: "",
    challanNumber: "",
  });
  const [fineAmount, setFineAmount] = useState(null);
  const [paid, setPaid] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const fetchFine = () => {
    if (details.vehicleNumber && details.challanNumber) {
      // Simulate fine fetch logic
      const amount = 500; // Replace with API call if needed
      setFineAmount(amount);
      setPaid(false);
    } else {
      alert("Please enter all fields.");
    }
  };

  const handlePayment = () => {
    alert("Challan paid successfully!");
    setPaid(true);
  };

  return (
    <div className="min-h-screen bg-red-50 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Traffic Challan Payment</h2>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md space-y-4">
        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number (e.g., MH12AB1234)"
          value={details.vehicleNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="challanNumber"
          placeholder="Challan Number"
          value={details.challanNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          onClick={fetchFine}
          className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded"
        >
          Check Fine
        </button>

        {fineAmount !== null && (
          <div className="text-center text-lg text-red-800 font-semibold">
            Fine Amount: ₹{fineAmount}
          </div>
        )}

        {fineAmount !== null && !paid && (
          <button
            onClick={handlePayment}
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
          >
            Pay Now
          </button>
        )}

        {paid && (
          <div className="text-center text-green-700 font-medium">
            ✅ Payment Successful!
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficChallan;
