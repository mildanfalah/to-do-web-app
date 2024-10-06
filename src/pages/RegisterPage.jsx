import React, { useState } from "react";
import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSuccessfulRegistration = () => {
    setIsRegistered(true);
    alert("Registration successful! you can now log in.");

    // Redirect to the login page after a short delay
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className="register-page">
      {isRegistered ? (
        <div className="success-message">
          <p>
            Registration successful! You will be redirected to the login page
            shortly.
          </p>
          <p>
            If you're not redirected, please{" "}
            <Link to="/login">click here to log in</Link>.
          </p>
        </div>
      ) : (
        <RegisterInput onSuccessfulRegister={handleSuccessfulRegistration} />
      )}
    </section>
  );
}

export default RegisterPage;
