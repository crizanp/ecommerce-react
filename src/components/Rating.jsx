import React, { useState } from "react";

const Rating = ({ value, onChange }) => {
  const stars = [5, 4, 3, 2, 1];
  const reactions = {
    1: "😢",
    2: "😞",
    3: "😐",
    4: "😊",
    5: "😍",
  };

  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleStarClick = (star) => {
    onChange(star);
    setSelectedReaction(reactions[star]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="selected-reaction" style={{ fontSize: "2em" }}>
        {selectedReaction && <span>{selectedReaction}</span>}
      </div>
      <div className="rate">
        {stars.map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`star${star}`}
              name="rate"
              value={star}
              checked={value === star}
              style={{ display: "none" }}
            />
            <label
              htmlFor={`star${star}`}
              title={`${star} stars`}
              onClick={() => handleStarClick(star)}
              style={{ cursor: "pointer", fontSize: "1.5em" }}
            >
              {star} stars
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Rating;
