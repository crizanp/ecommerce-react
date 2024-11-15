import React, { useRef, useEffect } from 'react';

const Modal = ({ handleClose, cartTotal, cartItems }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  // Create a function to generate the message for both WhatsApp and Viber
  const generateMessage = () => {
    const productNames = cartItems.map((item) => `${item.name} (${item.size})`).join(', ');
    return `Hello, I want ${cartItems.length} product(s). Products: ${productNames}. Total: NPR ${cartTotal.toFixed(2)}`;
  };

  return (
    <div className="modal active">
      <div ref={modalRef} className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Contact Us</h2>
        <p>Reach us through Viber or WhatsApp:</p>
        <div className="contact-buttons">
          <a href={`viber://chat?number=9810570014&text=${generateMessage()}`} className="viber-button">Viber</a>
          <a href={`https://wa.me/9810570014?text=${encodeURIComponent(generateMessage())}`} className="whatsapp-button">WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
