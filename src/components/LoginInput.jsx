import React, { useState } from "react";
import useFormInput from "../hooks/UseFormInput";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useFormInput("");
  const [password, setPassword] = useFormInput("");
  const [loginError, setLoginError] = useState("");

  const handleLoginFailure = (error) => {
    setLoginError(error);
  };

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
      handleLoginFailure("Invalid email or password");
    }
  };

  return (
    <div className="login-section">
      <div className="login-section__banner">
        <img src="login-banner.jpg" alt="" />
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

        {loginError && <p className="error-message">{loginError}</p>}
        <p className="login-page__navigate">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
