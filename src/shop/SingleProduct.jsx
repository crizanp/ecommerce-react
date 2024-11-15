import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { AuthContext } from "../contexts/AuthProvider";
import { Card, Col, Row } from "react-bootstrap";
import FilterSidebar from "./FilterSidebar";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [showFeatures, setShowFeatures] = useState(true);
  const [showRules, setShowRules] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const { slug } = useParams();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const currentProduct = data.find((p) => p.slug.toString() === slug);
        setProduct(currentProduct);

        const similarProducts = data.filter(
          (p) => p.category === currentProduct.category && p.slug !== slug
        );
        setSimilarProducts(similarProducts);
      });
  }, [slug]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (!product) {
    return <div style={{ paddingTop: "100px" }}>Loading...</div>;
  }

  const {
    id,
    name,
    category,
    description,
    image,
    prices,
    metaDescription,
    metaTitle,
    rules,
    features,
    price: singlePrice,
  } = product;

  const rulesArray = Array.isArray(rules) ? rules : [];
  const featuresArray = Array.isArray(features) ? features : [];
  const currentUrl = window.location.href;

  return (
    <div>
        <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`NDSNEPAL | ${
            product.seo ? product.seo.metaDescription : ""
          }`}
        />
        <meta
          name="keywords"
          content={`NDSNEPAL | ${product.seo ? product.seo.metaKeywords : ""}`}
        />
        <meta name="author" content="Nepal Digital Service | NDSNEPAL" />
        <title>{`${product.name} | NDSNEPAL`}</title>
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`NDSNEPAL | ${product.seo ? product.seo.metaTitle : ""}`}
        />
        <meta
          property="og:description"
          content={`NDSNEPAL | ${
            product.seo ? product.seo.metaDescription : ""
          }`}
        />
        <meta property="og:image" content={`../${product.image}`} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta
          name="twitter:title"
          content={`NDSNEPAL | ${product.seo ? product.seo.metaTitle : ""}`}
        />
        <meta
          name="twitter:description"
          content={`NDSNEPAL | ${
            product.seo ? product.seo.metaDescription : ""
          }`}
        />
        <meta name="twitter:image" content={`../${product.image}`} />
        <meta name="geo.region" content="977" />
        <meta name="geo.placename" content="Kathmandu, Nepal" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        
      </Helmet>
      </HelmetProvider>
      ;
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div
            className="product-details"
            style={{ boxShadow: "0 0 10px rgb(136 136 136 / 0%)" }}
          >
            <div className="row align-items-center">
              <div className="col-md-5 col-12">
                <div className="product-thumb pro-single-top">
                  <div className="single-thumb">
                    <img
                      src={`../${product.image}`}
                      alt={product.name}
                      style={{ width: "150%", borderRadius: "10px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="post-content">
                  <div>
                    <ProductDisplay key={product.id} item={product} />
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-12 d-none d-md-block">
              <a href="https://ighdigital.ae/marketing-solutions/">  <img
                  src="../assets/images/ads/long.png"
                  alt="Ads Placeholder"
                  style={{ width: "100%", height: "100%" }}
                /></a>
              </div>
            </div>
          </div>

          <div className="d-block d-md-none py-4">
            <img
              src="https://via.placeholder.com/100x30"
              alt="Ads Placeholder"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="container">
            <div className="row">
              {similarProducts.length > 0 && (
                <div className="similar-products my-5">
                  <h4 className="pb-3">Related Products</h4>
                  <Row xs={2} md={2} lg={5} className="g-4">
                    {shuffleArray(similarProducts.slice(0, 5)).map(
                      (similarProduct) => (
                        <Col key={similarProduct.id}>
                          <Card className="" style={{ border: "none" }}>
                            <Link
                              to={`/shop/${similarProduct.slug}`}
                              style={{ textDecoration: "none", border: "none" }}
                            >
                              <Card.Img
                                variant="top"
                                src={`../${similarProduct.image}`}
                                alt={similarProduct.name}
                                className="card-img-top"
                                style={{ width: "100%", borderRadius: "10px" }}
                              />
                              <Card.Body>
                                <Card.Title style={{}}>
                                  {similarProduct.name}
                                </Card.Title>
                              </Card.Body>
                            </Link>
                          </Card>
                        </Col>
                      )
                    )}
                  </Row>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
