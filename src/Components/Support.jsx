import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Support</h1>
      <p className="mb-4 text-gray-700">
        If you need help, reach out via email or call. Were here 24/7.
      </p>
      <div className="bg-white p-4 rounded shadow space-y-2">
        <p>
          📥 <strong>Email:</strong> support@paynow.com
        </p>
        <p>
          ☎️ <strong>Phone:</strong> support@paynow.com
        </p>
      </div>
    </div>
  );
};

export default Support;
