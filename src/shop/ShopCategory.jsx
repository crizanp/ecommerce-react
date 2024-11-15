import React from "react";

const ShopCategory = ({ setProducts, selectedCategory, menuItems, setItems, filterItem }) => (
  <div className="widget widget-category">
    <h5 className="widget-title">Categories</h5>
    <div>
      {menuItems.map((Val, id) => (
        <button
          className={`m-2 ${selectedCategory === "All" ? "btn btn-primary" : "btn btn-outline-primary"}`}
          onClick={() => filterItem(Val)}
          key={id}
        >
          {Val}
        </button>
      ))}
    </div>
  </div>
);

export default ShopCategory;
