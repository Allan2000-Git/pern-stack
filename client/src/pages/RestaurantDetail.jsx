import React, { useEffect } from 'react'
import { useYelpContext } from '../context/yelpContext';
import { useParams} from "react-router-dom";
import yelpApi from '../api/yelpApi';
import Reviews from '../components/Reviews';
import AddReviewForm from '../components/AddReviewForm';
import StarRating from '../components/StarRating';

const RestaurantDetail = () => {
    const {id} = useParams();

    const {selectedRestaurant, setSelectedRestaurant, selectedRestaurantReview, setSelectedRestaurantReview} = useYelpContext();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await yelpApi.get(`/${id}`);
                setSelectedRestaurant(response.data.restaurantRows[0]);
                setSelectedRestaurantReview(response.data.reviewRows);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    },[])

    return (
        <div className="container mt-5">
            <h1 className="text-center">{selectedRestaurant && selectedRestaurant.name}</h1>
            <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                <StarRating rating={selectedRestaurant?.avg_rating} />
                <span className="text-warning">({selectedRestaurant?.total_reviews})</span>
            </div>  
            <Reviews reviews={selectedRestaurantReview} />
            <AddReviewForm/>
        </div>
    )
}

export default RestaurantDetail