import React from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    // Store the user's email in localStorage
    localStorage.setItem("userEmail", user.email);

    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event("storage"));

    // Give user alert notification
    alert("Login successful!");

    // Navigate to the dashboard
    navigate("/");
  };

  return (
    <div className="login-page">
      <LoginInput setIsLoggedIn={handleLoginSuccess} />
    </div>
  );
}

export default LoginPage;
