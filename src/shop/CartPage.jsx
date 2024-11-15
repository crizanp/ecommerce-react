import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../fakeactivate/Modal";
import PageHeader from "../components/PageHeader";
import '../fakeactivate/Fakeactivate.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItems);
  }, []);
  //calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  const handleIncrease = (item) => {
    item.quantity = +item.quantity + 1;
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity = +item.quantity - 1;
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      });
    }
  };

  const handleRemove = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((p) => p.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };
  const updateLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const orderTotal = cartSubTotal;
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Set default quantity to 1 for items without a quantity
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(updatedCartItems);
  }, []);
  const handleProceedToPayment = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="container" style={{ paddingTop: "110px" }}>
        <div className="row" style={{ paddingTop: "inherit" }}>
          <div className="col-lg-8 pt-3">
            <h2>Your Shopping Cart</h2>
            <PageHeader title="Shopping Cart" curPage="Cart" />

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Custom Text</th>{" "}
                  {/* New column for custom text */}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, indx) => (
                  <tr key={indx}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="cart-image"
                          style={{ maxWidth: "50px", maxHeight: "50px" }}
                        />
                        <div className="ms-3">
                          <Link
                            to={`/search/${item.name}`}
                            className="text-dark text-decoration-none"
                          >
                            {item.name} ({item.size})
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <b>NPR</b> {item.price}
                    </td>
                    <td>
                      <div className="cart-quantity">
                        <button
                          className="btn btn-link"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="btn btn-link"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <b>NPR</b> {item.price * item.quantity}
                    </td>
                    <td>
                      <span data-bs-toggle="tooltip" title={item.customText}>
                        {item.customText.length > 20
                          ? `${item.customText.substring(0, 20)}...`
                          : item.customText}
                      </span>
                    </td>{" "}
                    {/* Display custom text */}
                    <td>
                      <button
                        onClick={() => handleRemove(item)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order Summary</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>
                        <b>NPR</b> {cartSubTotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>Free Shipping</td>
                    </tr>
                    <tr className="fw-bold">
                      <td>Total</td>
                      <td>NPR {orderTotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={handleProceedToPayment}
                  >
                    Proceed to Payment
                  </button>
                </div>

                {showModal && <Modal handleClose={handleCloseModal} cartTotal={cartSubTotal} cartItems={cartItems} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
