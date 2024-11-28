import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center footer" style={{ color: "#fff", backgroundColor: "rgb(114, 32, 255)" }}>
      <div className="container p-4">
        <div className="row text-md-start mt-5">
          {/* Logo Start */}
          <div className="col-md-4  ">
            <h4 className="pb-3">
              NDS <span className="Nepal">Nepal </span>
            </h4>
            <p className="text-light">
              NDSNEPAL is a social media marketing company that provides
              services for Facebook, Instagram, Tiktok, Telegram, Youtube, and
              many more.
            </p>
            <p className="copy-right text-light">
              Copyright © 2022-2024 <a href="https://nxtechhosting.com" style={{ color: "white", fontWeight: "bold" }}>Crizan</a>. Powered by <a href="#" style={{ color: "white", fontWeight: "bold" }}> IGHDigital</a>. All right reserved.
              <br />
            </p>
            {/* Social Icons */}
            <ul className="social-icons list-unstyled">
              <li>
                <a href="#" className="facebook">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="icofont-youtube"></i>
                </a>
              </li>
              {/* Add other social icons as needed */}
            </ul>
            {/* End Social Icons */}
          </div>
          {/* Logo end */}

          {/* Solutions Start */}
          <div className="col-md-3">
            <h5 className="pb-3">OUR TOP PAGES </h5>
            <ul className="list-style ps-0 text-light" >
              <li className="pb-3"><a href="/search/facebook" style={{ color: "white" }}>Facebook Services</a></li>
              <li className="pb-3"><a href="/search/instagram" style={{ color: "white" }}>Instagram Services</a></li>
              <li className="pb-3"><a href="/search/telegram" style={{ color: "white" }}>Telegram Services</a></li>
              <li className="pb-3"><a href="/search/premium" style={{ color: "white" }}>Premium Services</a></li>
              <li className="pb-3"><a href="/search/youtube" style={{ color: "white" }}>Youtube Services</a></li>
            </ul>
          </div>
          {/* Solutions end */}

          {/* Quick links Start */}
          <div className="col-md-3">
            <h5 className="pb-3"> QUICK LINKS </h5>
            <ul className="list-style ps-0">
              <li className="pb-3">About Us</li>
              <li className="pb-3">FAQ</li>
              <li className="pb-3">Motivation</li>
            </ul>
          </div>
          {/* Quick links end */}

          {/* Other Start */}
          <div className="col-md-2">
            <h5 className="pb-3"> OTHERS </h5>
            <ul className="list-style ps-0">
              <li className="pb-3">Privacy Policy</li>
              <li className="pb-3">Terms of Use</li>
              <li className="pb-3">Features</li>
              <li className="pb-3">Refund Policies</li>
              <li className="pb-3">Contact Us</li>
            </ul>
          </div>
          {/* Other end */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
