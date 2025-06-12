import React, { useState } from "react";

const PropertyTax = () => {
  const [details, setDetails] = useState({
    owner: "",
    propertyId: "",
    area: "",
    annualValue: "",
  });
  const [tax, setTax] = useState(null);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const calculateTax = () => {
    const value = parseFloat(details.annualValue);
    if (!isNaN(value)) {
      const taxAmount = value * 0.1; // Example: 10% of annual value
      setTax(taxAmount.toFixed(2));
    } else {
      alert("Please enter a valid annual value.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property tax paid successfully!");
    setDetails({ owner: "", propertyId: "", area: "", annualValue: "" });
    setTax(null);
  };

  return (
    <div className="p-6 min-h-screen bg-yellow-50 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-yellow-800 mb-6">Property Tax Payment</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          value={details.owner}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="propertyId"
          placeholder="Property ID"
          value={details.propertyId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Property Area (e.g., 1200 sq ft)"
          value={details.area}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="annualValue"
          placeholder="Annual Rental Value (₹)"
          value={details.annualValue}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="button"
          onClick={calculateTax}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
        >
          Calculate Tax
        </button>

        {tax && (
          <div className="text-center text-green-700 font-semibold">
            Estimated Tax: ₹{tax}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PropertyTax;
