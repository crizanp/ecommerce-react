import React, { useState, useContext } from 'react';
import Rating from '../components/Rating';
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database';
import { AuthContext } from '../contexts/AuthProvider';

const ReviewForm = ({ productSlug }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      // Handle the case where the user is not authenticated
      console.log('User not authenticated');
      return;
    }

    // Get a reference to the 'reviews' node in your Firebase database
    const db = getDatabase();
    const reviewsRef = ref(db, 'reviews');

    // Create a new review object with the product's slug
    const newReview = {
      rating,
      message,
      username: user.displayName || 'Anonymous',
      email: user.email || 'anonymous@example.com',
      date: new Date().toISOString(),
      timestamp: serverTimestamp(),
      slug: productSlug, // Access the productSlug directly
    };

    // Push the new review to the 'reviews' node
    await push(reviewsRef, newReview);

    // Clear the form after submission
    setRating(0);
    setMessage('');
  };

  return (
    <>
      <div className="review-form" style={{width:"80%", margin:" 0 auto"}}>
      <h4 style={{paddingTop:"20PX",color:"rgb(51,51,51)"}}>RATE THIS PRODUCT</h4>
        <form onSubmit={handleFormSubmit} className="row">
          <div className="col-md-4 col-12">
            <div className="form-group">
              <span className="rating">
               <Rating value={rating} onChange={handleRatingChange} />
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                rows={8}
                className="form-control"
                placeholder="Message"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <button type="submit" className="lab-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
