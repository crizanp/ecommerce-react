import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const btnText = "Get Started Now";
import { categoryList } from "../home/HomeCategory.jsx";
import PageHeader from "../components/PageHeader.jsx";


const CardShowcase = () => {
  return (
    <>
    <PageHeader title="Buy Everything with Us" curPage="showcase-product" />
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div> */}
        <div className="section-wrapper">
          <div className="row justify-content-center row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
            {categoryList.map((val, i) => (
              <div key={i} className="col p-0 m-0">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img
                        src={val.imgUrl}
                        alt={val.imgAlt}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="category-content">
                      <Link to="/shop">
                        <h6 className="bg-dark px-2">{val.title}</h6>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardShowcase;
