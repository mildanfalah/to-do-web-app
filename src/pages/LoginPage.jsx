import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return "This is Login Page, go to" + <Link to="/register">Register</Link>;
}

export default LoginPage;
