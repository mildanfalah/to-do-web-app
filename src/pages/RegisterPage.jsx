import React from "react";
import RegisterInput from "../components/RegisterInput";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <section className="register-page">
      <h2>Please fill out the following form to create an account.</h2>
      <RegisterInput />
      <p>
        Back to <Link to="/">Dashboard</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
