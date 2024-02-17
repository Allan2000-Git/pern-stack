import React from 'react';
import StarRating from './StarRating';

const ReviewCard = () => {
    return (
        <div className="col-sm-4 mb-4">
            <div className="card overflow-hidden">
                <div className="card-body bg-light-subtle">
                    <StarRating rating={4.5} />
                    <p className="card-text review">With supporting text below as a natural lead-in to additional content.</p>
                    <span className="username">- Joy</span>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
