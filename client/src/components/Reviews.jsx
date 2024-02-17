import React from 'react';
import StarRating from './StarRating';

const ReviewCard = ({reviews}) => {
    return (
        <div className="row mt-5">
            {
                reviews.map(review => (
                    <div key={review.id} className="col-sm-4 mb-4">
                        <div className="card overflow-hidden">
                            <div className="card-body bg-light-subtle">
                                <StarRating rating={review?.rating} />
                                <p className="card-text review">{review?.review}</p>
                                <span className="username">- {review?.username}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ReviewCard;
