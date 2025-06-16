import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../../assets/myprofile.jpeg";
import PixelTransition from "../Animations/PixelTransition";

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
      {/* <img
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full object-cover shadow"
        src={image || DefaultProfile}
        alt="Profile"
      /> */}
      <PixelTransition
        firstContent={
          <img
            src={image || DefaultProfile}
            alt="default pixel transition content, a myProfile!"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "orangered",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
              Abhi!
            </p>
          </div>
        }
        gridSize={14}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="bg-gray-300 p-2 border rounded-2xl text-center shadow"
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
