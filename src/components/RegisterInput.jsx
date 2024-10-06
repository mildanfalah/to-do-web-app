import React, { useState } from "react";
import useFormInput from "../hooks/UseFormInput";
import { Link } from "react-router-dom";

const RegisterInput = ({ onSuccessfulRegister }) => {
  const [emailValue, emailChangeHandler] = useFormInput("");
  const [passwordValue, passwordChangeHandler] = useFormInput("");
  const [confirmPasswordValue, confirmPasswordChangeHandler] = useFormInput("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!validateEmail(emailValue)) {
        setError("Invalid email format");
        return;
      }

      if (passwordValue.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      if (passwordValue !== confirmPasswordValue) {
        setError("Passwords do not match");
        return;
      }

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((user) => user.email === emailValue)) {
        setError("User with this email already exists");
        return;
      }

      // Save user to LocalStorage
      const newUser = { email: emailValue, password: passwordValue };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      // Clear form
      emailChangeHandler({ target: { value: "" } });
      passwordChangeHandler({ target: { value: "" } });
      confirmPasswordChangeHandler({ target: { value: "" } });

      onSuccessfulRegister();
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="register-section">
      <form className="register-section__form" onSubmit={handleRegister}>
        <h2>Create an Account</h2>

        <p>Please fill in the form below to create an account</p>
        <div>
          <label className="label-input" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={emailChangeHandler}
            required
          />
        </div>
        <div>
          <label className="label-input" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            required
          />
        </div>
        <div>
          <label className="label-input" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPasswordValue}
            onChange={confirmPasswordChangeHandler}
            required
          />
        </div>
        <div className="register-section__button-notification">
          {error && (
            <p className="error-message register-error-message">{error}</p>
          )}
          <button className="btn btn-submit" type="submit">
            Sign Up
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
      <div className="register-section__banner">
        <img src="register-banner.jpg" alt="" />
      </div>
    </div>
  );
};

export default RegisterInput;
