// FilterSidebar.jsx
import React, { useState } from "react";
import "./FilterSidebar.css"; 
import { Link } from "react-router-dom";

export const tagsData = [
  { name: "Canva Pro", url: "/shop/canva-pro-subscription" },
  { name: "Instagram Likes", url: "/shop/instagram-likes" },
  { name: "UC Pubg", url: "/shop/pubg-mobile-uc" },
  { name: "Netflix Subs", url: "/shop/netflix-subscription" },
  { name: "Facebook Page Like", url: "/shop/facebook-page-like-increase" },
  { name: "Tiktok Follower", url: "/shop/tiktok-followers" },
  { name: "Youtube Subscriber", url: "/shop/youtube-subscriber-increase" },
];

const FilterSidebar = ({ menuItems, selectedCategory, filterItems, isMobile }) => {
  const [tags] = useState(tagsData);

  if (isMobile) {
    return (
      <div className="filter-sidebar mobile">
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => filterItems(e.target.value)}
        >
          <option value="All">Please select the category</option>
          {menuItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {renderTags(tags, selectedCategory, filterItems)}
      </div>
    );
  } else {
    return (
      <div className="filter-sidebar desktop">
        <ul className="list-group p-3">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`list-group-item ${selectedCategory === item ? " bg-purple" : ""}`}
              onClick={() => filterItems(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        {renderTags(tags, selectedCategory, filterItems)}
      </div>
    );
  }
};

const renderTags = (tags, selectedCategory, filterItems) => (
  <div className="tags container">
    {tags.map(({ name, url }) => (
      <Link 
        to={url} 
        className={`tag-link ${selectedCategory === name ? "active" : ""}`}
      >
        <span className="tag">{name}</span>
      </Link>
    ))}
  </div>
);

export default FilterSidebar;
