// src/components/Login.js
import React, { useState } from "react";
import useFormInput from "../hooks/UseFormInput";

const Login = ({ setIsLoggedIn, onLoginFailure }) => {
  const [email, setEmail] = useFormInput("");
  const [password, setPassword] = useFormInput("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Save login session
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setIsLoggedIn(user);
      setError("");
    } else {
      onLoginFailure("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
