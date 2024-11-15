// SignUp.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const title = "Sign Up";
const btnText = "Sign Up Now";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUpWithEmail = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setErrorMessage(data.message);
        setSuccessMessage("");
      } else {
        setSuccessMessage(`Your account has been registered successfully`);
        setErrorMessage("");
        setFormData({
          email: "",
          name: "",
          number: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while processing your request");
      setSuccessMessage("");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="signup-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignUpWithEmail}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Your Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <div className="form-group">
                  <button type="submit" className="lab-btn">
                    {btnText}
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group text-center">
                  <span className="text-danger">{errorMessage}</span>
                  <span className="text-success">{successMessage}</span>
                </div>
              </div>
            </form>
            {successMessage && (
              <div className="account-bottom">
                <p>
                  <Link to="/login">Click here to login</Link>
                </p>
              </div>
            ) || (
              <div className="account-bottom">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
