import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  return (
    <div className="p-6 text-center text-xl font-medium">
      Logging out...
    </div>
  );
};

export default Logout;
