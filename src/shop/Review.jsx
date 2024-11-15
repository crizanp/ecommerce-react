import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  onValue,
} from "firebase/database";
import defaultProfilePic from "../assets/images/logo/man.webp";
import RatingView from "../components/RatingView";

const Review = ({ productSlug }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Ensure that productSlug is defined before querying the database
    if (!productSlug) {
      return;
    }

    const db = getDatabase();
    const reviewsRef = ref(db, "reviews");

    // Query reviews for the specific product based on its slug
    const productReviewsQuery = query(
      reviewsRef,
      orderByChild("slug"),
      equalTo(productSlug)
    );

    // Listen for changes in the reviews data
    const unsubscribe = onValue(productReviewsQuery, (snapshot) => {
      const reviewsData = snapshot.val();

      if (reviewsData) {
        // Convert the object of reviews into an array
        const reviewsArray = Object.values(reviewsData);
        setReviews(reviewsArray);
      } else {
        setReviews([]);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [productSlug]);

  const renderReviews = () => {
    if (reviews.length === 0) {
      return (
        <div className="container">
          <h4 className="no-reviews py-4 ">No reviews available for this product.</h4>
        </div>
      );
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      appendDots: (dots) => (
        <div style={{ position: "absolute" }}>
          <ul style={{ margin: "0", display: "flex", listStyle: "none", padding: 0 ,  justifyContent:"center"}}>
            {dots.map((dot, index) => (
              <li key={index} style={{ marginRight: "10px" }}>
                {dot}
              </li>
            ))}
          </ul>
        </div>
      ),
      
      customPaging: (i) => (
        <div
          style={{
            width: "30px",
            height: "30px",
            border: "2px solid blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {i + 1}
        </div>
      ),
      arrows: false,
    };
  
    return (
      <Slider {...settings}>
        {reviews.map((review, i) => (
          i % 2 === 0 && (
            <div key={i} className="review-group">
              <div className="review-item" style={{boxShadow:"none"}}>
                <div className="review-header">
                  <div className="profile-pic">
                    <img
                      src={defaultProfilePic}
                      alt="Profile"
                      className="profile-img"
                    />
                  </div>
                  <div className="user-info">
                    <p className="username">
                      {review.username || "Anonymous User"}
                    </p>
                    <p className="posted-date">{review.date}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="rating-section">
                    <RatingView value={review.rating} />
                  </div>
                </div>
                <div className="review-content">
                  <p>{review.message}</p>
                </div>
              </div>
              {reviews[i + 1] && (
                <div className="review-item">
                  <div className="review-header">
                    <div className="profile-pic">
                      <img
                        src={defaultProfilePic}
                        alt="Profile"
                        className="profile-img"
                      />
                    </div>
                    <div className="user-info">
                      <p className="username">
                        {reviews[i + 1].username || "Anonymous User"}
                      </p>
                      <p className="posted-date">{reviews[i + 1].date}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="rating-section">
                      <RatingView value={reviews[i + 1].rating} />
                    </div>
                  </div>
                  <div className="review-content">
                    <p>{reviews[i + 1].message}</p>
                  </div>
                </div>
              )}
            </div>
          )
        ))}
      </Slider>
    );
  };

  return <div className="review-container">{renderReviews()}</div>;
};

export default Review;
