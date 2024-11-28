// Shop.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import ProductData from "../products.json";
import ProductCard from "./ProductCard";
import Search from "./Search";
import FilterSidebar from "./FilterSidebar";

const Shop = () => {
  const location = useLocation();
  const { search: searchParam, category: categoryParam } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const queryParamSearch = queryParams.get("search");

  const [products, setProducts] = useState(ProductData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productPerPage;
  const currentProducts = products.slice(0, indexOfLastProduct);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "All"
  );
  const menuItems = ["All", ...new Set(ProductData.map((val) => val.category))];

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchResultsFound, setSearchResultsFound] = useState(true);

  const filterItems = (curcat) => {
    const newItems =
      curcat === "All"
        ? ProductData
        : ProductData.filter((newVal) => newVal.category === curcat);
    setSelectedCategory(curcat);
    setProducts(newItems);
    setShowDropdown(false);
  };

  const handleSearch = (query) => {
    const filteredProducts = ProductData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
    setSearchResultsFound(filteredProducts.length > 0);
  };

  useEffect(() => {
    let updatedProducts = ProductData;

    if (categoryParam) {
      filterItems(categoryParam);
    } else if (searchParam) {
      handleSearch(searchParam);
    } else if (queryParamSearch) {
      handleSearch(queryParamSearch);
    } else {
      // Sort products based on ascending order of id
      updatedProducts = ProductData.slice().sort((a, b) => a.id - b.id);
      setProducts(updatedProducts);
      setSearchResultsFound(updatedProducts.length > 0);
    }
  }, [categoryParam, searchParam, queryParamSearch]);

  const handleFilterButtonHover = () => {
    setShowDropdown(true);
  };

  const handleFilterButtonLeave = () => {
    setShowDropdown(false);
  };

  const isMobile = window.innerWidth <= 767;

  return (
    <div>
      <Helmet>
      <title>{`Discover Premium Products${selectedCategory !== "All" ? ` in ${selectedCategory}` : ""} - NDS Nepal Shop`}</title>

        <meta
          name="description"
          content={`Explore a variety of premium products in the ${
            selectedCategory !== "All" ? `${selectedCategory} ` : ""
          }category. Find the perfect additions to enhance your digital experience. Subscribe now!`}
        />
        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content={`Discover Premium Products${
            selectedCategory !== "All" ? ` - ${selectedCategory}` : ""
          } - NDS Nepal`}
        />
        <meta
          property="og:description"
          content={`Explore a variety of premium products in the ${
            selectedCategory !== "All" ? `${selectedCategory} ` : ""
          }category. Find the perfect additions to enhance your digital experience. Subscribe now!`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="./assets/logo/logo.png" />{" "}
      </Helmet>

      <div
        className="shop-page pb-4"
        style={{ paddingTop: "105px", boxShadow: "none" }}
      >
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-3 py-3">
              <FilterSidebar
                menuItems={menuItems}
                selectedCategory={selectedCategory}
                filterItems={filterItems}
                isMobile={isMobile}
              />
            </div>

            <div className="col-lg-9">
              <article>
                <div
                  className="shop-title d-flex justify-content-between align-items-center"
                  style={{ marginBottom: "10px" }}
                >
                  <div style={{ flex: 9 }}>
                    <Search
                      products={products}
                      setProducts={setProducts}
                      style={{ backgroundColor: "#ff66b2", color: "#fff" }}
                    />
                  </div>
                </div>
                <div>
                  <PageHeader curPage={"Shop"} />
                  {searchResultsFound ? (
                    <ProductCard GridList={true} products={currentProducts} />
                  ) : (
                    <h3>
                      <center>No search results found.</center>
                    </h3>
                  )}
                </div>
                {currentProducts.length < products.length && (
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button className="btn btn-primary" onClick={loadMore}>
                      Load More
                    </button>
                  </div>
                )}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
