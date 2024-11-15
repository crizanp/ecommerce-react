import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./css/search.css"; // Import your CSS file for styling

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Use the location hook from react-router to get the current URL location
  const location = useLocation();

  // useEffect to update the search term based on the query parameter in the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTermFromUrl = searchParams.get("search") || "";
    console.log("Search term from URL:", searchTermFromUrl);
    setSearchTerm(searchTermFromUrl);
  }, [location.search]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const renderSuggestions = () => {
    const suggestions = filteredProducts.slice(0, 10);
    console.log("Filtered products:", suggestions);

    return suggestions.map((product) => (
      <div
        key={product.id}
        className="suggestion-item"
        onClick={() => handleSuggestionClick(product.name)}
      >
        {product.name}
      </div>
    ));
  };

  return (
    <div className="search-container">
      <form className="search-wrapper">
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ borderColor: "rgb(13,110,253)",borderRadius:"0px" }} // Set the border color to blue
        />
        <button type="submit" className="btn-search">
          <i className="icofont-search-2"></i>
        </button>
      </form>

      {showSuggestions && (
        <div className="suggestions-container">{renderSuggestions()}</div>
      )}

      {searchTerm && !showSuggestions && (
        <div className="search-results">
          {filteredProducts.slice(0, 10).map((product) => (
            <Link key={product.id} to={`/shop/${product.slug}`}>
              <div className="result-item">
                <div className="product-content">
                  <p>
                    <Link to={`/shop/${product.slug}`}>{product.name}</Link>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
