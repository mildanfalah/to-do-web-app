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
      <LoginInput
        setIsLoggedIn={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
      {loginError && <p className="error-message">{loginError}</p>}
      <p className="login-page__navigate">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
