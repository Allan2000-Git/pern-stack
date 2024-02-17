import React, { useState } from 'react'

const AddReviewForm = () => {
    const [username, setUsername] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    return (
        <>
            <div className="mb-2 mt-3">
                <h4>Add your review</h4>
                <form>
                    <div className="form-row">
                        <div className="form-group col-8 mb-3">
                            <label htmlFor="name">Name</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} id="name" placeholder="Your name" type="text" className="form-control"
                            />
                        </div>
                        <div className="form-group col-4 d-flex align-items-center gap-3 mb-3">
                            <label htmlFor="rating">Rating</label>
                            <input value={rating} onChange={(e) => setRating(Number(e.target.value))} type="range" name="rating" min={1} max={5} />
                            <label className="">{rating}</label>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="review">Review</label>
                        <textarea rows={5} value={review} onChange={(e) => setReview(e.target.value)} id="review" className="form-control" placeholder="Your review here"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddReviewForm