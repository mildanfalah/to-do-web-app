import React, { useState } from "react";
import useFormInput from "../hooks/UseFormInput";

const Login = ({ setIsLoggedIn, onLoginFailure }) => {
  const [email, setEmail] = useFormInput("");
  const [password, setPassword] = useFormInput("");
  // const [error, setError] = useState("");

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
    <div className="login-section">
      <div className="login-section__banner">
        <img src="../public/login-banner.jpg" alt="" />
      </div>
      <form className="login-section__form" onSubmit={handleLogin}>
        <h2 className="sub-title">Login to Your Account</h2>

        <div>
          <label className="label-input" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={setEmail}
            required
          />
        </div>
        <div>
          <label className="label-input" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={setPassword}
            required
          />
        </div>
        <button className="btn btn-submit" type="submit">
          Login
        </button>
        {/* {error && <p className="error-message">{error}</p>} */}
      </form>
    </div>
  );
};

export default Login;
