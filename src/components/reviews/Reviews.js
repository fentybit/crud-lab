import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const filteredReviews = reviews.filter( review => review.restaurantId === restaurantId )

    const displayReviews = filteredReviews.map( review => <Review key={review.id} review={review} deleteReview={deleteReview} /> )

    return (
      <ul>
        Reviews
        { displayReviews }
      </ul>
    );
  }
};

export default Reviews;