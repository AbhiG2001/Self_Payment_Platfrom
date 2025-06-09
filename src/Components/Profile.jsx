import React from "react";
import MyProfile from "../assets/myprofile.jpeg";
import BlurText from "./Animations/BlurText";
import { useNavigate } from "react-router-dom";
import MyProfilePicture from "./MyProfilePicture";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        {/* <h2 style={{fontFamily:"monospace"}} className="text-2xl font-bold text-blue-600 mb-4">My Profile</h2> */}
        <BlurText
          text="My Profile"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8 text-blue-600 font-mono"
        />
        <img
          className="h-12 w-12 rounded-full cursor-pointer"
          src={MyProfile}
          alt="Profile"
          onClick={() => navigate("/myProfilepicture")}
        />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow space-y-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-2xl mb-1 text-red-800"
          >
            Personal Details
          </h2>
          <label
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="block font-semibold text-xl"
          >
            Full Name
          </label>
          <input
            type="text"
            value="Abhishek Ghuge"
            className="bg-linear-to-bl from-red-300 via-white to-blue-300 w-full p-2 border rounded-2xl border-gray-200 text-gray-700 text-center"
            readOnly
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="block font-semibold text-xl"
          >
            Email
          </label>
          <input
            type="email"
            value="abhishek@example.com"
            className="bg-linear-to-bl from-red-300 via-white to-blue-300  w-full p-2 border rounded-2xl border-gray-200 text-gray-700 text-center"
            readOnly
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="block font-semibold text-xl"
          >
            Mobile
          </label>
          <input
            type="tel"
            value="(+91)7038526960"
            className="bg-linear-to-bl from-red-300 via-white to-blue-300 w-full p-2 border rounded-2xl border-gray-200 text-gray-700 text-center "
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
