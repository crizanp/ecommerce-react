// NavItems.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoHome from "../assets/images/logo/logo-blue.png";
import logoShop from "../assets/images/logo/logo.png";
import "./NavItems.css";

const NavItems = () => {
  const location = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartInfo, setCartInfo] = useState(null);

  const fetchCartInfo = async () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      if (cartItems.length > 0) {
        const totalQuantity = cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalPrice = cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        setCartInfo({
          quantity: totalQuantity,
          totalPrice: totalPrice.toFixed(2),
        });
      } else {
        setCartInfo({ quantity: 0, totalPrice: 0 });
      }
    } catch (error) {
      console.error("Error fetching cart information:", error);
    }
  };

  useEffect(() => {
    fetchCartInfo();
  }, []);

  const isShopPage = location.pathname.startsWith("/shop");
  const isCartPage = location.pathname.startsWith("/cart-page");
  const isSearchPage = location.pathname.startsWith("/search");
  const isCategoryPage = location.pathname.startsWith("/category");
  const isFakeActivate = location.pathname.startsWith("/fakeactivate");

  const logoSrc =
    isShopPage || isCategoryPage || isSearchPage || isFakeActivate || isCartPage
      ? logoShop
      : logoHome;

  const navbarStyle =
    isShopPage || isCategoryPage || isSearchPage || isFakeActivate || isCartPage
      ? { backgroundColor: "rgb(227 238 255)" }
      : {};

  return (
    <>
      <div
        className="d-none d-md-block topbar py-2"
        style={{ backgroundColor: "#7220ff", color: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 social-icons my-auto">
              {/* Add your social icons here */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="icofont-facebook text-light mx-1"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="icofont-twitter text-light "></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="icofont-instagram text-light mx-1"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="icofont-pinterest text-light "></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="icofont-youtube text-light mx-1"></i>
              </a>

              <div>
                <span className="px-3">| </span>
                <i className="icofont-flash"></i>
                <span>Instant Delivery</span>
              </div>
            </div>

            <div className="col-md-8 mail-info text-end">
              <span>Email: info@ndsnepal.com</span>
            </div>
          </div>
        </div>
      </div>
      <header className={`header-section style-4`} style={navbarStyle}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-search-acte">
                <div className="logo">
                  <Link to="/">
                    <img src={logoSrc} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/fakeactivate">Activate</Link>
                    </li>
                    <li>
                      <Link to="/cart-page">
                        My Cart
                        {/* ({cartInfo.quantity} items, NPR{" "}
                        {cartInfo.totalPrice}) */}
                      </Link>
                    </li>
                    
                    {/* Conditionally render Viber and WhatsApp links based on screen size */}
                    <li className="viber-menu d-lg-block" style={{backgroundColor:"#7220ff", borderRadius:"7px"}}>
                      <a
                        href="viber://chat?number=9810570014"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                      >
                        <i className="icofont-viber"></i> Viber
                      </a>
                    </li>
                    <li className="whatsapp-menu d-lg-block" style={{backgroundColor:"lightgreen", borderRadius:"7px",marginLeft:"10px"}}>
                      <a
                        href="whatsapp://send?abid=9810570014&text=Hello, Are you available at the moment !!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="icofont-whatsapp"></i> WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }`}
                  style={{marginRight:"14px"}}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavItems;
