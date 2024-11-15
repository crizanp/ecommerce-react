import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, curPage, category }) => {
  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb px-1">
        <li className="breadcrumb-item" >
          <Link to="/" style={{color:"blue"}}>Home</Link>
        </li>
        {category && (
          <li className="breadcrumb-item">
            <Link to={`/category/${category}`} style={{color:"blue"}}>{category}</Link>
          </li>
        )}
        <li className="breadcrumb-item active" aria-current="page">
          {curPage}
        </li>
      </ol>
    </nav>
  );
};

export default PageHeader;
