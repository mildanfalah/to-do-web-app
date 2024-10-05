import React, { useState } from "react";

const RegisterInput = ({ onSuccessfulRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!validateEmail(email)) {
        setError("Invalid email format");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((user) => user.email === email)) {
        throw new Error("User with this email already exists");
      }

      // Save user to LocalStorage
      const newUser = { email, password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      // Clear form
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      onSuccessfulRegister();
    } catch (error) {
      setError(error.message);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
