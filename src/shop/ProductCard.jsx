import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <div className="shop-product-wrap row justify-content-center" id="paginate">
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
          <div className="product-item" style={{ marginBottom: "0px" }}>
            <div className="product-thumb">
              <div className="">
                <Link to={`/shop/${product.slug}`}>
                  <img
                    src={`/${product.image}`}
                    alt={product.name}
                    style={{
                      borderRadius: "8px",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </div>
            </div>

            {/* Product content */}
            <div className="product-content">
              <p className="product-name" style={{ textAlign: "left" }}>
                <Link
                  to={`/shop/${product.slug}`}
                  style={{
                    color: "black",
                    fontSize: ".975rem",
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  {product.name}
                  {/* Render category only for large devices */}
                  <span className="d-none d-lg-inline">
                    {" "}
                    ({product.category})
                  </span>
                </Link>
              </p>

              {product.prices && product.prices.length > 0 && (
                <h6
                  className="product-price"
                  style={{ color: "rgb(13,110,253)", textAlign: "left" }}
                >
                  {product.prices.length > 1
                    ? `Starting at NPR.${Math.min(
                        ...product.prices.map((priceObj) => priceObj.price)
                      )}`
                    : `Price: NPR.${product.prices[0].price}`}
                </h6>
              )}
              {!product.prices && product.price && (
                <h6
                  className="product-price"
                  style={{ color: "rgb(13,110,253)", textAlign: "left" }}
                >
                  Price: NPR.{product.price}
                </h6>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
