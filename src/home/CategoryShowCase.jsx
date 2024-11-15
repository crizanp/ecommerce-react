import React, { useState } from "react";
import { Link } from "react-router-dom";

const titleStyle = {
  padding: "20px 0", // Add suitable padding
  textTransform: "uppercase", // Convert to uppercase
  fontWeight: "bold", // Make it bold
};

const ProductData = [
  {
    imgUrl: "assets/images/products/youtube-premium.png",
    cate: "Top Picks Product",
    ur: "/shop/youtube-premium",
    title: "Youtube Premium",
    author: "assets/images/course/author/01.jpg",
    brand: "Starting Price",
    price: "NPR. 1000.00",
    id: 1,
  },
  
  {
    imgUrl: "assets/images/products/telegram-premium.png",
    cate: "Top Picks Product",
    title: "Telegram Premium",
    ur: "/shop/telegram-premium",

    author: "assets/images/course/author/02.jpg",
    brand: "Price",
    price: "4200.00",
    id: 3,
  },
  {
    imgUrl: "assets/images/products/canva-pro-150.png",
    cate: "Top Demanded Tools",
    ur: "/shop/canva-pro-subscription",

    title: "Canva Premium",
    author: "assets/images/categoryTab/brand/apple.png",
    brand: "Starting Price",
    price: "NPR. 650.00",
    id: 4,
  },
  {
    imgUrl: "assets/images/products/story-blocks-subscription-150.png",
    cate: "Top Demanded Tools",
    ur: "/shop/story-blocks-subscription",

    title: "Story Blocks Subscription",
    author: "assets/images/course/author/04.jpg",
    brand: "1 Month Unlimited Access",
    price: "NPR. 999.00",
    id: 5,
  },
  {
    imgUrl: "assets/images/products/spotify-premium.png",
    cate: "Top Demanded Tools",
    title: "Spotify Premium",
    ur: "/shop/spotify-premium",

    author: "assets/images/course/author/01.jpg",
    brand: "Starting Price",
    price: "NPR. 530.00",
    id: 6,
  },
  {
    imgUrl: "assets/images/products/netflix-subscription-150.png",
    cate: "Top Demanded Tools",
    title: "Netflix Premium",
    ur: "/shop/netflix-subscription",

    author: "assets/images/course/author/02.jpg",
    brand: "Starting Price",
    price: "NPR. 450.00",
    id: 7,
  },
  {
    imgUrl: "assets/images/products/story-blocks-subscription-150.png",
    cate: "Top Picks Product",
    ur: "/shop/story-blocks-subscription",

    title: "Story Blocks Subscription",
    author: "assets/images/course/author/04.jpg",
    brand: "1 Month Unlimited Access",
    price: "NPR. 999.00",
    id: 5,
  },
  {
    imgUrl: "assets/images/products/pubg-mobileuc.png",
    cate: "Top Picks Product",
    ur: "/shop/pubg-mobile-uc",

    title: "Pubg Mobile UC",
    author: "assets/images/course/author/04.jpg",
    brand: "100 UC",
    price: "NPR.130.00",
    id: 9,
  },
  {
    imgUrl: "assets/images/products/google-play-gift-card.png",
    cate: "Top Demanded Tools",
    ur: "/shop/google-play-gift-card",

    title: "Google Play Card",
    author: "assets/images/course/author/04.jpg",
    brand: "Starting Price",
    price: "NPR. 5.00",
    id: 10,
  },
  {
    imgUrl: "assets/images/products/instagram-follower-150.png",
    cate: "Top Social Grow",
    title: "Instagram Followers",
    ur: "/shop/instagram-followers",

    author: "assets/images/course/author/04.jpg",
    brand: "Starting Price",
    price: "NPR. 300.00",
    id: 11,
  },
  {
    imgUrl: "assets/images/products/facebook-page-like-150.png",
    cate: "Top Social Grow",
    ur: "/shop/facebook-page-like-increase",

    title: "Facebook Page Like",
    author: "assets/images/course/author/04.jpg",
    brand: "Starting Price",
    price: "NPR. 550.00",
    id: 11,
  },
  {
    imgUrl: "assets/images/products/youtube-monitization.png",
    cate: "Top Social Grow",
    ur: "/shop/youtube-monetization",

    title: "Yotube Monetization",
    author: "assets/images/course/author/04.jpg",
    brand: "Starting Price",
    price: "NPR. 14999.00",
    id: 11,
  },
  {
    imgUrl: "assets/images/products/tiktok-followers-150.png",
    cate: "Top Social Grow",
    ur: "/shop/tiktok-followers",

    title: "Tiktok Followers",
    author: "assets/images/course/author/04.jpg",
    brand: "Starting Price",
    price: "NPR. 700.00",
    id: 11,
  },
  
];

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const CategoryShowCase = () => {
  const uniqueCategories = [
    ...new Set(ProductData.map((product) => product.cate)),
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div
      style={{
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <div className="section-wrapper">
          {uniqueCategories.map((category, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-12 pt-4">
                  <h2 className="title" style={titleStyle}>
                    {category}
                  </h2>
                </div>
              </div>
              <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-2 course-filter">
                {shuffleArray(ProductData.filter((product) => product.cate === category)).slice(0, 4).map((product) => (
                  <div key={product.id} className="col">
                    <div className="course-item style-4">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <img
                            src={product.imgUrl}
                            alt=""
                            style={{  }}
                          />
                        </div>

                        <div className="course-content">
                          <Link to={`${product.ur}`}>
                            <p style={{ color: "black", fontSize:"1rem" ,fontWeight:"bold" }}>
                              {product.title}
                            </p>
                          </Link>
                          <div
                            className="course-footer"
                            style={{ borderTop: "0px solid #ecf0f3;" }}
                          >
                            <div className="course-author">
                              <Link
                                to="/"
                                className="ca-name"
                                style={{ fontSize: "15px", color: "rgb(5,64,242)" }}
                              >
                                {product.brand}
                              </Link>
                            </div>
                            <div className="course-price">
                              <span
                                className="course-price text-dark"
                                style={{ fontSize: "15px" }}
                              >
                                {product.price}
                              </span>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-center mt-4">
        <Link to="/shop" className="lab-btn">
          <span>See All Product</span>
        </Link>
      </div> */}
    </div>
  );
};

export default CategoryShowCase;