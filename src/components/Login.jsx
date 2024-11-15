// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Update import statement

const title = "Login";
const btnText = "Login Now";

const Login = () => {
  const navigate = useNavigate(); // Update hook usage
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Check if the user is already authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect to the dashboard or home page
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage("");
        localStorage.setItem("token", data.token); // Save JWT token in local storage
        navigate("/"); // Redirect to the dashboard or home page
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while processing your request");
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
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
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
                />
              </div>
              {/*show error message*/}
              <div className="form-group">
                <span className="text-danger error-message">
                  {errorMessage}
                </span>
              </div>

              <div className="form-group text-end">
                <Link to="/forgotPass" className="forget-pass">
                  Forget Password?
                </Link>
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
                </div>
              </div>
            </form>
            {/* account bottom */}
            <div className="account-bottom">
              <p>
                Don’t have an account? <Link to="/sign-up">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
