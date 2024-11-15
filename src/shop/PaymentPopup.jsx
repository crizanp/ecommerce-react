// PaymentPopup.js
import React from "react";

const PaymentPopup = ({ onClose }) => {
  const handlePayment = (method) => {
    // Implement payment logic for the selected method (eSewa, Khalti, Fonepay)
    console.log(`Payment through ${method}`);
    // Close the popup after payment
    onClose();
  };

  return (
    <div className="payment-popup">
      <h2>Select Payment Method</h2>
      <button onClick={() => handlePayment("eSewa")}>Pay with eSewa</button>
      <button onClick={() => handlePayment("Khalti")}>Pay with Khalti</button>
      <button onClick={() => handlePayment("Fonepay")}>Pay with Fonepay</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PaymentPopup;
