import React from "react";
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar" style={{ backgroundColor: "blue", color: "white", padding: "10px 20px" }}>
      <div className="left-side" style={{ display: "flex", alignItems: "center" }}>
        <div className="email" style={{ marginRight: "20px" }}>
          <FaEnvelope /> info@ndsnepal.com
        </div>
        <div className="separator" style={{ margin: "0 10px", borderRight: "2px solid white", height: "20px" }}></div>
      </div>
      <div className="right-side" style={{ display: "flex", alignItems: "center" }}>
        <div className="social-icons" style={{ display: "flex", marginRight: "20px" }}>
          <a href="#" className="social-icon" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>
            <FaFacebook />
          </a>
          <a href="#" className="social-icon" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>
            <FaTwitter />
          </a>
          <a href="#" className="social-icon" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>
            <FaInstagram />
          </a>
        </div>
        <Link to="/faq" className="faq-link" style={{ color: "white", textDecoration: "none" }}>
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
