import React, { useState } from "react";
import useFormInput from "../hooks/UseFormInput";

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
    <div className="register-input">
      <h2>Create an Account</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={emailChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPasswordValue}
            onChange={confirmPasswordChangeHandler}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegisterInput;
