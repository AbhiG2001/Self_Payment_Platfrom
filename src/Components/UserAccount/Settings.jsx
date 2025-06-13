import React, { useState } from "react";

const Settings = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pwd) => {
    if (pwd.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd)) {
      return "Password must include at least one uppercase letter and one number.";
    }
    return "";
  };

  const handleChangePassword = () => {
    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      setMessage("");
      return;
    }

    // Simulated API success
    setError("");
    setMessage("Password changed successfully!");
    setPassword("");
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Account Settings</h2>

      <div className="h-[85px]">
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New Password"
        className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {message && <p className="text-green-600 text-sm mb-2">{message}</p>}
      </div>

      <button
        onClick={handleChangePassword}
        className="bg-yellow-600 hover:bg-yellow-700 transition text-white w-full py-2 rounded"
      >
        Change Password
      </button>
    </div>
  );
};

export default Settings;
