import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Profile</h2>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            value="Abhishek Ghuge"
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            value="abhishek@example.com"
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
        <div>
          <label className="block font-semibold">Mobile</label>
          <input
            type="tel"
            value="7038526960"
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
