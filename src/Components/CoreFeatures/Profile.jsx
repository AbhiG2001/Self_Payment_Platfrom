import React, { useEffect, useState } from "react";
import BlurText from "../Animations/BlurText";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../../assets/myprofile.jpeg";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Profile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(DefaultProfile);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <BlurText
          text="My Profile"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8 text-blue-600 font-mono"
        />
        <img
          className="h-12 w-12 rounded-full cursor-pointer object-cover"
          src={profileImage}
          alt="Profile"
          onClick={() => navigate("/myProfilepicture")}
        />
      </div>
      <div className="bg-white py-6 rounded-2xl shadow space-y-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-1 text-red-800 font-montserrat">
            Personal Details
          </h2>
          <label className="text-green-700 block font-semibold text-xl font-montserrat">
            Full Name
          </label>
          <input
            type="text"
            value="Abhishek Ghuge"
            readOnly
            className="bg-linear-to-bl from-red-300 via-white to-blue-300  p-2 w-60 border rounded-2xl border-gray-200 text-gray-700 text-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-green-700 block font-semibold text-xl font-montserrat">
            Email
          </label>
          <input
            type="email"
            value="abhishek@example.com"
            readOnly
            className="bg-linear-to-bl from-red-300 via-white to-blue-300 w-60 p-2 border rounded-2xl border-gray-200 text-gray-700 text-center"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-green-700 block font-semibold text-xl font-montserrat">
            Mobile
          </label>
          <input
            type="tel"
            value="(+91)7038526960"
            readOnly
            className="bg-linear-to-bl from-red-300 via-white to-blue-300 w-60 p-2 border rounded-2xl border-gray-200 text-gray-700 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
