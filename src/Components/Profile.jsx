import React from "react";
import MyProfile from "../assets/myprofile.jpeg";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">My Profile</h2>
        <img className="h-15 w-15 rounded-full" src={MyProfile} alt="" />
      </div>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <h2 style={{fontFamily: 'Montserrat, sans-serif'}} className="text-2xl mb-1 text-red-800">Personal Details</h2>
          <label style={{fontFamily: 'Montserrat, sans-serif'}} className="block font-semibold">Full Name</label>
          <input
          
            type="text"
            value="Abhishek Ghuge"
            className="w-full p-2 border rounded border-gray-200"
            readOnly
          />
        </div>
        <div>
          <label style={{fontFamily: 'Montserrat, sans-serif'}} className="block font-semibold">Email</label>
          <input
            type="email"
            value="abhishek@example.com"
            className="w-full p-2 border rounded border-gray-200"
            readOnly
          />
        </div>
        <div>
          <label style={{fontFamily: 'Montserrat, sans-serif'}} className="block font-semibold">Mobile</label>
          <input
            type="tel"
            value="7038526960"
            className="w-full p-2 border rounded border-gray-200"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
