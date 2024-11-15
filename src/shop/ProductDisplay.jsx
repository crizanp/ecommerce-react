import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

const ProductDisplay = ({ item }) => {
  const {
    id,
    name,
    category,
    description,
    image,
    prices,
    rules,
    features,
    price: singlePrice,
  } = item;

  const [quantity, setQuantity] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [price, setPrice] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = existingCart.some((cartItem) => cartItem.id === id);
    setIsAddedToCart(isInCart);
  }, [id]);

  const handleSizeButtonClick = (selectedQuantity) => {
    setQuantity(selectedQuantity);

    const selectedPrice = prices
      ? prices.find((p) => p.quantity === selectedQuantity)?.price || 0
      : singlePrice || 0;

    setPrice(isNaN(selectedPrice) ? 0 : selectedPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: image,
      name: name,
      price: price,
      rules: rules,
      features: features,
      customText: coupon,
      size: `${quantity} ${prices ? prices[0].Subject : ""}`,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = existingCart.findIndex((item) => item.id === id);

    if (existingProduct >= 0) {
      existingCart[existingProduct].customText = coupon;
      existingCart[existingProduct].size = product.size;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCoupon("");
    setIsAddedToCart(true);
    setEditMode(false);

    alert("Product Added to Cart");
  };

  useEffect(() => {
    if (prices && prices.length > 0 && !quantity) {
      setQuantity(prices[0].quantity);
      setPrice(prices[0].price);
    } else if (singlePrice && !quantity) {
      setPrice(singlePrice);
    }
  }, [prices, singlePrice, quantity]);

  const rulesArray = Array.isArray(rules) ? rules : [];
  const featuresArray = Array.isArray(features) ? features : [];

  const handleEdit = () => {
    setEditMode(true);
    setIsAddedToCart(false);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setIsAddedToCart(true);
  };

  return (
    <div className="product-container">
      <PageHeader title={name} curPage={name} category={category} />

      {prices && prices.length > 1 ? (
        <h2 className="product-name">
          {name} ( {quantity}{" "}
          {prices ? prices.find((p) => p.quantity === quantity)?.Subject : ""} )
        </h2>
      ) : (
        <h2 className="product-name">{name}</h2>
      )}
      <p className="product-description" style={{ marginBottom: "0px" }}>
        {description}
      </p>
      <h4
        className="product-price"
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        NPR. {price.toFixed(2)}
      </h4>
      {prices && prices.length > 1 && (
        <div className="size-selection">
          <div className="size-buttons">
            {prices.map((p) => (
              <button
                key={p.quantity}
                onClick={() => handleSizeButtonClick(p.quantity)}
                className={`size-button ${
                  quantity === p.quantity ? "selected" : ""
                }`}
              >
                {p.quantity} {p.Subject}
              </button>
            ))}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="add-to-cart-form pt-3">
        <div className="user-input">
          <textarea
            rows="4"
            cols="50"
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter your custom text (e.g., product requirements)"
            className={`custom-textarea ${coupon ? "focused" : ""}`}
            required
          ></textarea>
        </div>

        {isAddedToCart && !editMode ? (
          <div>
            <button
              type="button"
              className="edit-btn"
              onClick={handleEdit}
              style={{
                backgroundColor: "rgb(114, 32, 255)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              <center>Edit</center>
            </button>
            <Link
              to={"/cart-page"}
              className="checkout-btn"
              style={{
                backgroundColor: "rgb(114, 32, 255)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                fontWeight: "bold",
                width: "",
              }}
            >
              <center>
                <FaShoppingCart style={{ marginRight: "5px" }} />
                Checkout
              </center>
            </Link>
          </div>
        ) : (
          <button
            type="submit"
            className="add-to-cart-btn"
            style={{
              backgroundColor: "rgb(114, 32, 255)",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
              width: "40%",
            }}
          >
            <center>
              <FaShoppingCart style={{ marginRight: "5px" }} />
              {editMode ? "Update Cart" : "Add to Cart"}
            </center>
          </button>
        )}

        {editMode && (
          <button
            type="button"
            className="cancel-edit-btn"
            onClick={handleCancelEdit}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
              width: "40%",
              marginTop: "10px",
            }}
          >
            <center>Cancel Edit</center>
          </button>
        )}
      </form>

      <div class="accordion pt-4" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Description
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div
              class="accordion-body"
              dangerouslySetInnerHTML={{ __html: rules }}
            ></div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Terms and Conditions
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div
              class="accordion-body"
              dangerouslySetInnerHTML={{ __html: features }}
            ></div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductDisplay;
