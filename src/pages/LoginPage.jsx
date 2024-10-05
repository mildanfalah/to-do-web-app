import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";

function LoginPage() {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    // Store the user's email in localStorage
    localStorage.setItem("userEmail", user.email);

    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event("storage"));

    // Navigate to the dashboard
    navigate("/");
  };

  const handleLoginFailure = (error) => {
    setLoginError(error);
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <LoginInput
        setIsLoggedIn={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
      {loginError && <p className="error-message">{loginError}</p>}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
