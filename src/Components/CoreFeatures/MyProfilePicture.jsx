import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../assets/myprofile.jpeg"

const MyProfilePicture = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(() => {
    return localStorage.getItem("profileImage") || null;
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-4">
      <img
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full object-cover shadow"
        src={image || DefaultProfile}
        alt="Profile"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="bg-white p-2 border rounded-2xl text-center shadow"
      />
      <button
        onClick={() => navigate(-1)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Back to Profile
      </button>
    </div>
  );
};

export default MyProfilePicture;
