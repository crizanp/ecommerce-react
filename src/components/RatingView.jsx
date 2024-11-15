import React from "react";

const RatingView = ({ value }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= value; i++) {
      const starClassName = i <= value ? "star selected" : "star";
      stars.push(<span key={i} className={starClassName}>★</span>);
    }

    return stars;
  };

  return <div className="rating-view">{renderStars()}</div>;
};

export default RatingView;
