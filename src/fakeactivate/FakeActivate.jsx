import React, { useState } from 'react';
import './FakeActivate.css';
import Modal from './Modal'; // Import the Modal component

const FakeActivate = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility

    const handlePlatformChange = (e) => {
        setSelectedPlatform(e.target.value);
        setSelectedCountry('');
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleOrderClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const platformData = {
        Telegram: {
            USA: { price: '10', accounts: 100 },
            UK: { price: '12', accounts: 120 },
            // Add more countries and their prices for Telegram
        },
        WhatsApp: {
            USA: { price: '15', accounts: 150 },
            UK: { price: '18', accounts: 180 },
            // Add more countries and their prices for WhatsApp
        },
        // Add more platforms and their prices for different countries
    };

    const platforms = Object.keys(platformData);
    const countries = selectedPlatform ? Object.keys(platformData[selectedPlatform]) : [];



    return (
        <div className='container ' style={{ paddingTop: "200px" }}>
            <div className='banner'>
                <h1 className='banner-title text-center' style={{ color: "black" }}>Instant Activation Accounts </h1>
                <p className='banner-description text-center ' style={{ color: "black" }}>Access various platforms instantly with chosen country numbers. We ensure fast, hassle-free service delivery upon your request. Experience convenience and swift activation for your needs. Simplify your platform access with our tailored solutions.
                </p>
            </div>

            <div className='card'>
                <h1 className='title'>Platform Accounts</h1>
                <div className='select-boxes'>
                    <div className='select-box'>
                        <label>Select Platform:</label>
                        <select className='custom-select' value={selectedPlatform} onChange={handlePlatformChange}>
                            <option value="">Select Platform</option>
                            {platforms.map((platform, index) => (
                                <option key={index} value={platform}>
                                    {platform}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedPlatform && (
                        <div className='select-box'>
                            <label>Select Country:</label>
                            <select className='custom-select' value={selectedCountry} onChange={handleCountryChange}>
                                <option value="">Select Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {selectedCountry && (
                    <div className='info'>
                        <h3>{`Price: NPR ${platformData[selectedPlatform][selectedCountry].price}`}</h3>
                        <button className='order-btn' onClick={handleOrderClick}>Order Now</button>
                    </div>
                )}

                {showModal && (
                     <div className="modal active">
                     <div className="modal-content">
                     <Modal handleClose={handleCloseModal} />
                     </div>
                 </div>
                )}
            </div>
        </div>
    );
};

export default FakeActivate;
