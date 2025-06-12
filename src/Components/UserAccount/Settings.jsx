import React, { useState } from "react";

const Settings = () => {
  const [password, setPassword] = useState("");

  const handleChangePassword = () => {
    alert("Password changed successfully!");
    setPassword("");
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New Password"
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={handleChangePassword}
        className="bg-yellow-600 text-white w-full py-2 rounded"
      >
        Change Password
      </button>
    </div>
  );
};

export default Settings;
